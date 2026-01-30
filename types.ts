
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Location {
  id: string;
  name: string;
  type: 'home' | 'hub';
  lat: number;
  lng: number;
  address: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface SiteContent {
  mission: string;
  values: { title: string; description: string }[];
  services: Service[];
  locations: Location[];
  team: TeamMember[];
}

export enum ContactDepartment {
  GENERAL = 'General Enquiries',
  REFERRALS = 'Referrals & Placements',
  CAREERS = 'Careers & Recruitment',
  PARTNERSHIPS = 'Local Authority Partnerships'
}
