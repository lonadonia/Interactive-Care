
import { GoogleGenAI } from "@google/genai";
import { SITE_CONTENT } from "./content";

const API_KEY = process.env.API_KEY || "";

export const getChatResponse = async (userMessage: string, chatHistory: { role: 'user' | 'model', text: string }[]) => {
  if (!API_KEY) return "The chat service is currently initializing. Please try again in a moment.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Construct system instructions from our CMS content
    const systemInstruction = `
      You are a professional, caring, and helpful digital assistant for "Better Futures", a children's residential care organization.
      Our mission: ${SITE_CONTENT.mission}
      Our Services: ${SITE_CONTENT.services.map(s => s.title).join(', ')}
      Our Locations: ${SITE_CONTENT.locations.map(l => l.name).join(', ')}
      
      Guidelines:
      - Maintain a warm, human, yet professional and reassuring tone.
      - NEVER give specific medical advice.
      - If someone is in immediate danger, advise them to call emergency services.
      - For placement queries, direct them to the Contact Us page's Referrals section.
      - Be concise and accurate based on the provided company info.
      - Do not make up facts about the company.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...chatHistory.map(h => ({ role: h.role === 'user' ? 'user' : 'model' as any, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request. Please try contacting us via phone.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am having trouble connecting right now. Please feel free to call our main office directly.";
  }
};
