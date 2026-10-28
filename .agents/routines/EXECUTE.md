---
name: EXECUTE
description: Implement an approved plan with the validation gate, archive it and commit.
---

# /EXECUTE

Run when a plan has been reviewed and approved by the user.

## Protocol

1. Read the target plan file completely. If its `Status` is not `approved`, **stop** and ask the user.
2. Implement each artifact following the acceptance criteria. One milestone only.
3. Validate with the single project gate defined in `about.md` (`Quality gate`):
   ```bash
   <pm> run verify     # typecheck + lint + check:size + tests + build
   ```
4. Fix any errors before closing the milestone.
5. Close the milestone **before** committing, so the commit is complete:
   - Mark completed criteria as `[x]` and set `Status: done` in the plan.
   - Move the plan to `plans/completed/`.
   - Move the milestone to Completed in `steps.md` (one line + link to the archived plan).
   - Update `about.md` if architecture, constraints, env vars or commands changed.
6. Commit with a conventional commit, adding only the files you changed (no `git add .`, no AI attribution):
   ```bash
   git add <explicit paths>
   git commit -m "feat|fix|refactor|chore(scope): description"
   ```
7. Confirm `git status` is clean.
