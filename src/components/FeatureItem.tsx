import type { FeatureRequest, FeatureRequestStatus } from '../models/featureRequest';

interface FeatureItemProps {
  readonly feature: FeatureRequest;
  readonly onEdit: (feature: FeatureRequest) => void;
  readonly onDelete: (id: string) => void;
  readonly onChangeStatus: (id: string, status: FeatureRequestStatus) => void;
}

const priorityBadgeClass: Record<string, string> = {
  Low: 'badge badge-priority-low',
  Medium: 'badge badge-priority-medium',
  High: 'badge badge-priority-high',
};

const statusBadgeClass: Record<string, string> = {
  Proposed: 'badge badge-status-proposed',
  'In Progress': 'badge badge-status-in-progress',
  Released: 'badge badge-status-released',
};

export function FeatureItem({ feature, onEdit, onDelete, onChangeStatus }: Readonly<FeatureItemProps>) {
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <h3 className="feature-card-title">{feature.title}</h3>
        <div className="feature-card-meta">
          <span className={priorityBadgeClass[feature.priority]}>{feature.priority}</span>
          <span className={statusBadgeClass[feature.status]}>{feature.status}</span>
        </div>
      </div>
      <p className="feature-card-description">{feature.description}</p>
      <div className="feature-card-meta">
        <span>Created {new Date(feature.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="feature-card-actions">
        <button className="btn btn-secondary btn-sm" onClick={() => onEdit(feature)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(feature.id)}>Delete</button>
        {feature.status === 'Proposed' && (
          <button
            className="btn btn-warning btn-sm"
            onClick={() => onChangeStatus(feature.id, 'In Progress')}
          >
            Start Progress
          </button>
        )}
        {feature.status === 'In Progress' && (
          <button
            className="btn btn-success btn-sm"
            onClick={() => onChangeStatus(feature.id, 'Released')}
          >
            Release
          </button>
        )}
      </div>
    </div>
  );
}
