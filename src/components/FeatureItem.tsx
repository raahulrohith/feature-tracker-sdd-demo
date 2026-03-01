import type { FeatureRequest, FeatureRequestStatus } from '../models/featureRequest';

interface FeatureItemProps {
  readonly feature: FeatureRequest;
  readonly onEdit: (feature: FeatureRequest) => void;
  readonly onDelete: (id: string) => void;
  readonly onChangeStatus: (id: string, status: FeatureRequestStatus) => void;
}

const statusTransitions: Record<FeatureRequestStatus, FeatureRequestStatus[]> = {
  Proposed: ['Proposed', 'In Progress'],
  'In Progress': ['In Progress', 'Released'],
  Released: ['Released'],
};

export function FeatureItem({ feature, onEdit, onDelete, onChangeStatus }: Readonly<FeatureItemProps>) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 4, padding: 12, marginBottom: 8, background: '#fafbfc' }}>
      <div style={{ fontWeight: 'bold', fontSize: 16 }}>{feature.title}</div>
      <div style={{ margin: '4px 0' }}>{feature.description}</div>
      <div style={{ fontSize: 13, color: '#555' }}>
        Priority: <b>{feature.priority}</b> | Status: <b>{feature.status}</b> | Created: {new Date(feature.createdAt).toLocaleString()}
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => onEdit(feature)} style={{ marginRight: 8 }}>Edit</button>
        <button onClick={() => onDelete(feature.id)} style={{ marginRight: 8 }}>Delete</button>
        <label htmlFor={`status-select-${feature.id}`}>Status:</label>
        <select
          id={`status-select-${feature.id}`}
          value={feature.status}
          onChange={e => onChangeStatus(feature.id, e.target.value as FeatureRequestStatus)}
          disabled={feature.status === 'Released'}
          style={{ marginLeft: 6 }}
        >
          {statusTransitions[feature.status].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {feature.status === 'Released' && (
          <span style={{ color: 'gray', marginLeft: 8 }}>(No further changes allowed)</span>
        )}
      </div>
    </div>
  );
}
