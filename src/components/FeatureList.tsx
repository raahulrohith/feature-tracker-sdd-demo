import type { FeatureRequest, FeatureRequestStatus } from '../models/featureRequest';
import { FeatureItem } from './FeatureItem';

interface FeatureListProps {
  readonly features: FeatureRequest[];
  readonly onEdit: (feature: FeatureRequest) => void;
  readonly onDelete: (id: string) => void;
  readonly onChangeStatus: (id: string, status: FeatureRequestStatus) => void;
}

export function FeatureList({ features, onEdit, onDelete, onChangeStatus }: Readonly<FeatureListProps>) {
  return (
    <div>
      {features.length === 0 && <div>No feature requests yet.</div>}
      {features.map(feature => (
        <FeatureItem
          key={feature.id}
          feature={feature}
          onEdit={onEdit}
          onDelete={onDelete}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
}
