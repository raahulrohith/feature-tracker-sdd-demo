# Feature Request Tracker: MVP Analysis

## Key Risks / Complex Areas
- **Status Transition Logic:** Enforcing allowed/disallowed transitions in both UI and state may be error-prone. Test edge cases (e.g., Released → In Progress should be blocked).
- **Validation Consistency:** Ensuring all business rules (title, description length) are enforced in both form and state logic.
- **State Synchronization:** Keeping UI in sync with state updates, especially for edit/delete flows.

## Gaps / Ambiguities
- **No Undo for Delete:** Deletion is immediate and permanent; users may expect a confirmation or undo, but this is out of scope for MVP.
- **No Feedback for Blocked Actions:** Spec assumes user feedback for validation and blocked transitions, but exact UI for this is not detailed—ensure clear error messages.
- **Manual Test Data:** Initial state should include a few sample requests for demo, but details are left to implementer.

## Task Order Review
- Tasks are logically ordered: data model → state → UI → flows → validation → demo.
- No major dependencies missing; each task is small and actionable.
- UI wiring and validation should be done after core components are in place.

## Demo Focus (10–15 min)
- **Show end-to-end flow:** Create, edit, delete, and change status of feature requests.
- **Highlight business rules:** Attempt invalid transitions and show validation in action.
- **UI clarity:** Emphasize how priority and status are visible and updated live.
- **Manual test scenarios:** Use sample data to quickly demonstrate all flows.

**Recommendation:**
- Prepare 2–3 feature requests in initial state for demo.
- Practice edge cases (validation errors, blocked transitions) to show robustness.
- Keep the demo focused on MVP flows—avoid scope creep.
