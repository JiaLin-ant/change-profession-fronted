export interface SkillsNeeded {
  technical: string[];
  cognitive: string[];
  social?: string[];
  adaptability?: string[];
}

export interface Job {
  id: string;
  title: string;
  automationProbability: number; // 0-100
  predictedYear: number;
  riskLevel: 'low' | 'medium' | 'high';
  milestones: Milestone[];
  adaptationStrategies?: {
    skills: string[];
    courses: string[];
    alternatives: string[];
  };
  skillsNeeded?: SkillsNeeded;
}

export interface Milestone {
  year: number;
  event: string;
} 