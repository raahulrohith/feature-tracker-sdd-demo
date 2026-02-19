# Feature Request Tracker: MVP Task List

## 1. Define Data Model
- Create `src/models/featureRequest.ts`.
- Define the `FeatureRequest` type and enums for priority and status.
- Export types for use in state and UI.

## 2. Implement State Management
- Create `src/state/featureStore.ts`.
- Use `useReducer` to manage feature requests in memory.
- Implement CRUD operations and allowed status transitions.
- Export state and dispatch for use in components.

## 3. Build FeatureForm Component
- Create `src/components/FeatureForm.tsx`.
- Implement form fields for title, description, and priority.
- Add validation logic for required fields and character limits.
- Support both create and edit modes.

## 4. Build FeatureList Component
- Create `src/components/FeatureList.tsx`.
- Render a list of all feature requests, sorted newest first.
- Pass each request to a FeatureItem component.

## 5. Build FeatureItem Component
- Create `src/components/FeatureItem.tsx`.
- Display feature request details, including priority and status.
- Add buttons for edit, delete, and status change.
- Handle allowed/disallowed status transitions.

## 6. Integrate Components in App
- Update `src/App.tsx` to use FeatureForm, FeatureList, and state store.
- Wire up create, edit, delete, and status change flows.
- Ensure state updates propagate to the UI.

## 7. Enforce Validation and Business Rules
- Ensure FeatureForm enforces all field validation rules.
- Ensure state logic blocks disallowed status transitions.
- Add user feedback for validation errors and blocked actions.

## 8. Prepare Demo and Manual Test Scenarios
- Add a few sample feature requests in initial state for demo.
- Test all user flows: create, edit, delete, change status.
- Verify validation, sorting, and business rules in the UI.
