export type ScreenType = 'platform' | 'architecture' | 'copilot' | 'demo' | 'solutions' | 'use-cases';

export interface PromptScenario {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  prompt: string;
  variety: string;
  confidence: string;
  narrative: string;
  remediationSteps: string[];
  preventedLoss: string;
  primaryActionText: string;
  primaryActionParam: string;
  secondaryActionText: string;
  lotId: string;
  cropName: string;
  vigor: string;
  vigorChange: string;
  moisture: string;
  humidity: string;
  anomalyPoint: { x: number; y: number; label: string };
  reasoningSteps: {
    title: string;
    description: string;
  }[];
}

export interface ConnectedModule {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
  category: 'planning' | 'operations' | 'intelligence';
}

export interface IntegrationConnector {
  name: string;
  certification: string;
  description: string;
  latency: string;
  protocol: string;
  icon: string;
}
