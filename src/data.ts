import { Service } from './types';

export const services: Service[] = [
  {
    category: "Brand Identity",
    name: "Brand Name Research",
    explanation: "Identifying a unique and memorable name for the brand.",
    required: true,
    oneTimeCost: 1000,
  },
  {
    category: "Brand Identity",
    name: "Domain Name",
    explanation: "Securing a researched web address for the brand.",
    required: true,
    oneTimeCost: 250,
  },
  // Add more services here...
];
