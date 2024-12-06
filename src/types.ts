export interface Service {
    category: string;
    name: string;
    explanation: string;
    required: boolean;
    oneTimeCost: number;
    monthlyCost?: number;
  }
  