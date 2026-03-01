// FeatureRequest model and enums

export type FeatureRequestPriority = 'Low' | 'Medium' | 'High';
export type FeatureRequestStatus = 'Proposed' | 'In Progress' | 'Released';

export interface FeatureRequest {
  id: string;
  title: string;
  description: string;
  priority: FeatureRequestPriority;
  status: FeatureRequestStatus;
  createdAt: string; // ISO string
}
