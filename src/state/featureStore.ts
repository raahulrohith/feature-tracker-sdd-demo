import { useReducer } from 'react';
import type { FeatureRequest, FeatureRequestStatus } from '../models/featureRequest';

export type FeatureAction =
  | { type: 'add'; payload: Omit<FeatureRequest, 'id' | 'createdAt' | 'status'> }
  | { type: 'edit'; payload: { id: string; updates: Partial<Omit<FeatureRequest, 'id' | 'createdAt'>> } }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'changeStatus'; payload: { id: string; status: FeatureRequestStatus } };

function allowedStatusTransition(from: FeatureRequestStatus, to: FeatureRequestStatus): boolean {
  if (from === 'Proposed' && to === 'In Progress') return true;
  if (from === 'In Progress' && to === 'Released') return true;
  if (from === to) return true;
  return false;
}

function featureReducer(state: FeatureRequest[], action: FeatureAction): FeatureRequest[] {
  switch (action.type) {
    case 'add': {
      const { title, description, priority } = action.payload;
      const newFeature: FeatureRequest = {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        status: 'Proposed',
        createdAt: new Date().toISOString(),
      };
      return [newFeature, ...state];
    }
    case 'edit': {
      return state.map(fr =>
        fr.id === action.payload.id
          ? { ...fr, ...action.payload.updates }
          : fr
      );
    }
    case 'delete': {
      return state.filter(fr => fr.id !== action.payload.id);
    }
    case 'changeStatus': {
      return state.map(fr => {
        if (fr.id !== action.payload.id) return fr;
        if (fr.status === 'Released') return fr; // No transitions from Released
        if (!allowedStatusTransition(fr.status, action.payload.status)) return fr;
        return { ...fr, status: action.payload.status };
      });
    }
    default:
      return state;
  }
}

const initialFeatures: FeatureRequest[] = [
  {
    id: '1',
    title: 'Add dark mode',
    description: 'Allow users to switch to a dark theme for better night-time usability.',
    priority: 'High',
    status: 'Proposed',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: '2',
    title: 'Export feature list',
    description: 'Enable exporting the feature request list as CSV or JSON.',
    priority: 'Medium',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
];

export function useFeatureStore() {
  return useReducer(featureReducer, initialFeatures);
}
