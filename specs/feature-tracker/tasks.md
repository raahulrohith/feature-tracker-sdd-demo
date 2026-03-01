# Feature Request Tracker: MVP Task List

## 1. Define Data Model ✅
- [x] Create `src/models/featureRequest.ts`.
- [x] Define the `FeatureRequest` type and enums for priority and status.
- [x] Export types for use in state and UI.

## 2. Implement State Management ✅
- [x] Create `src/state/featureStore.ts`.
- [x] Use `useReducer` to manage feature requests in memory.
- [x] Implement CRUD operations and allowed status transitions.
- [x] Export state and dispatch for use in components.

## 3. Build FeatureForm Component ✅
- [x] Create `src/components/FeatureForm.tsx`.
- [x] Implement form fields for title, description, and priority.
- [x] Add validation logic for required fields and character limits.
- [x] Support both create and edit modes.

## 4. Build FeatureList Component ✅
- [x] Create `src/components/FeatureList.tsx`.
- [x] Render a list of all feature requests, sorted newest first.
- [x] Pass each request to a FeatureItem component.

## 5. Build FeatureItem Component ✅
- [x] Create `src/components/FeatureItem.tsx`.
- [x] Display feature request details, including priority and status.
- [x] Add buttons for edit, delete, and status change.
- [x] Handle allowed/disallowed status transitions.

## 6. Integrate Components in App ✅
- [x] Update `src/App.tsx` to use FeatureForm, FeatureList, and state store.
- [x] Wire up create, edit, delete, and status change flows.
- [x] Ensure state updates propagate to the UI.

## 7. Enforce Validation and Business Rules ✅
- [x] Ensure FeatureForm enforces all field validation rules.
- [x] Ensure state logic blocks disallowed status transitions.
- [x] Add user feedback for validation errors and blocked actions.

## 8. Prepare Demo and Manual Test Scenarios ✅
- [x] Add a few sample feature requests in initial state for demo.
- [x] Test all user flows: create, edit, delete, change status.
- [x] Verify validation, sorting, and business rules in the UI.
