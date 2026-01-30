
import { SiteContent, ContactDepartment } from './types';

export const SITE_CONTENT: SiteContent = {
  mission: "At Better Futures, we provide nurturing, safe, and professional residential environments where children and young people can overcome challenges and achieve their full potential.",
  values: [
    { title: "Compassion", description: "Every child is treated with genuine warmth and understanding." },
    { title: "Safety", description: "A secure foundation is the prerequisite for all growth." },
    { title: "Empowerment", description: "We equip young people with the skills for an independent future." },
    { title: "Integrity", description: "Transparency and professionalism in every interaction." }
  ],
  services: [
    {
      id: 'residential-care',
      title: "Residential Care",
      icon: "Home",
      description: "Specialist residential homes providing 24/7 support in a family-style environment.",
      details: [
        "Therapeutic-led environment",
        "Highly trained staffing ratios",
        "Personalized care plans",
        "Focus on educational attainment"
      ]
    },
    {
      id: 'outreach',
      title: "Community Outreach",
      icon: "Users",
      description: "Supporting young people in their transition to independent living or within their own communities.",
      details: [
        "Life skills workshops",
        "Mental health support",
        "Family mediation services",
        "Crisis intervention"
      ]
    },
    {
      id: 'education',
      title: "Educational Support",
      icon: "BookOpen",
      description: "Integrated learning pathways tailored to each individual's unique needs.",
      details: [
        "Liaison with local schools",
        "In-house tutoring",
        "Vocational training access",
        "SEND specialist support"
      ]
    }
  ],
  locations: [
    { id: '1', name: "Willow House", type: 'home', lat: 51.5074, lng: -0.1278, address: "London NW1, Greater London" },
    { id: '2', name: "The Meadows", type: 'home', lat: 51.4545, lng: -2.5879, address: "Bristol BS1, South West" },
    { id: '3', name: "Northern Hub", type: 'hub', lat: 53.4808, lng: -2.2426, address: "Manchester M1, North West" },
    { id: '4', name: "Midlands Connect", type: 'hub', lat: 52.4862, lng: -1.8904, address: "Birmingham B1, Midlands" }
  ],
  team: [
    {
      name: "Dr. Sarah Jenkins",
      role: "Clinical Director",
      bio: "Over 20 years of experience in adolescent mental health and residential care systems.",
      image: "https://picsum.photos/seed/sarah/400/400"
    },
    {
      name: "Mark Thompson",
      role: "Operations Manager",
      bio: "Focuses on maintaining the highest standards of safety and compliance across all homes.",
      image: "https://picsum.photos/seed/mark/400/400"
    }
  ]
};

export const DEPARTMENTS = Object.values(ContactDepartment);
