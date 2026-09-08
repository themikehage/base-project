---
name: EXECUTE
description: Implement an approved plan with typecheck, lint, and commit.
---

# /EXECUTE

Run when a plan has been reviewed and approved by the user.

## Protocol

1. Read the target plan file completely.
2. Implement each artifact following the acceptance criteria.
3. After all changes, validate:
   ```bash
   npx tsc --noEmit    # or equivalent typecheck
   npm run lint        # if configured
   ```
4. Fix any errors before committing.
5. Commit with conventional commit format:
   ```bash
   git add .
   git commit -m "feat|fix|refactor|chore(scope): description"
   ```
6. Mark completed criteria as `[x]` in the plan file.
7. Update `steps.md` — move milestone to Completed.
8. Update `about.md` if architecture changed.
