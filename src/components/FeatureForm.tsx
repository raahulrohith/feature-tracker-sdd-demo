
import React, { useState, useEffect } from 'react';
import type { FeatureRequestPriority, FeatureRequest } from '../models/featureRequest';

interface FeatureFormProps {
  readonly onSubmit: (data: Omit<FeatureRequest, 'id' | 'createdAt' | 'status'>) => void;
  readonly initial?: Omit<FeatureRequest, 'id' | 'createdAt' | 'status'>;
  readonly submitLabel?: string;
}

const priorities: FeatureRequestPriority[] = ['Low', 'Medium', 'High'];

export function FeatureForm({ onSubmit, initial, submitLabel = 'Add Feature' }: Readonly<FeatureFormProps>) {
  const [title, setTitle] = useState(initial?.title || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [priority, setPriority] = useState<FeatureRequestPriority>(initial?.priority || 'Medium');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initial) {
      setTitle(initial.title);
      setDescription(initial.description);
      setPriority(initial.priority);
    }
  }, [initial]);

  function validate() {
    if (!title.trim()) return 'Title is required.';
    if (title.length > 100) return 'Title must be at most 100 characters.';
    if (!description.trim()) return 'Description is required.';
    if (description.length < 10) return 'Description must be at least 10 characters.';
    return null;
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    onSubmit({ title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Medium');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <div>
        <label htmlFor="feat-title">Title:</label>
        <input
          id="feat-title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxLength={100}
          required
          style={{ marginLeft: 8 }}
        />
      </div>
      <div>
        <label htmlFor="feat-desc">Description:</label>
        <textarea
          id="feat-desc"
          value={description}
          onChange={e => setDescription(e.target.value)}
          minLength={10}
          required
          style={{ marginLeft: 8, verticalAlign: 'top' }}
        />
      </div>
      <div>
        <label htmlFor="feat-priority">Priority:</label>
        <select
          id="feat-priority"
          value={priority}
          onChange={e => setPriority(e.target.value as FeatureRequestPriority)}
          style={{ marginLeft: 8 }}
        >
          {priorities.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      <button type="submit" style={{ marginTop: 8 }}>{submitLabel}</button>
    </form>
  );
}
