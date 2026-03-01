import "./App.css";
import { useState } from "react";
import type { FeatureRequest, FeatureRequestStatus } from "./models/featureRequest";
import { useFeatureStore } from "./state/featureStore";
import { FeatureForm } from "./components/FeatureForm";
import { FeatureList } from "./components/FeatureList";

function App() {
  const [features, dispatch] = useFeatureStore();
  const [editingFeature, setEditingFeature] = useState<FeatureRequest | null>(null);

  function handleAdd(data: Omit<FeatureRequest, 'id' | 'createdAt' | 'status'>) {
    dispatch({ type: 'add', payload: data });
  }

  function handleEdit(data: Omit<FeatureRequest, 'id' | 'createdAt' | 'status'>) {
    if (!editingFeature) return;
    dispatch({ type: 'edit', payload: { id: editingFeature.id, updates: data } });
    setEditingFeature(null);
  }

  function handleDelete(id: string) {
    dispatch({ type: 'delete', payload: { id } });
    if (editingFeature?.id === id) setEditingFeature(null);
  }

  function handleChangeStatus(id: string, status: FeatureRequestStatus) {
    dispatch({ type: 'changeStatus', payload: { id, status } });
  }

  function handleStartEdit(feature: FeatureRequest) {
    setEditingFeature(feature);
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Feature Request Tracker</h1>
        <p>Spec-Driven Development Demo</p>
      </header>

      <main className="app-main">
        <section className="app-section">
          <h2>{editingFeature ? 'Edit Feature Request' : 'Add Feature Request'}</h2>
          <FeatureForm
            onSubmit={editingFeature ? handleEdit : handleAdd}
            initial={
              editingFeature
                ? { title: editingFeature.title, description: editingFeature.description, priority: editingFeature.priority }
                : undefined
            }
            submitLabel={editingFeature ? 'Save Changes' : 'Add Feature'}
          />
          {editingFeature && (
            <button onClick={() => setEditingFeature(null)} style={{ marginBottom: 12 }}>
              Cancel Edit
            </button>
          )}
        </section>
        <section className="app-section">
          <h2>Feature Requests</h2>
          <FeatureList
            features={features}
            onEdit={handleStartEdit}
            onDelete={handleDelete}
            onChangeStatus={handleChangeStatus}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
