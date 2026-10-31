---
name: SHIP
description: Integrate and deploy finished work, with autonomy proportional to reversibility.
---

# /SHIP

Run after `/EXECUTE` when the user asks to publish, open a PR, or deploy.

## Preconditions (all must hold, else stop)

1. The plan is `Status: done` and every criterion has evidence.
2. `<pm> run verify` passes on the current tree.
3. `git status` is clean and the commit is conventional.

## Autonomy by Reversibility

| Action | Reversibility | Who decides |
|---|---|---|
| Push a branch, open a PR | Fully reversible | Agent, autonomously. |
| Deploy to staging / preview | Reversible (redeploy previous) | Agent, only with complete evidence. |
| Deploy to production | Costly to undo, user-visible | **Human approval each time.** |
| Data migrations, destructive or irreversible ops | Not reversible | **Human approval each time**, with a backup noted first. |

Prior approval for one deploy does not extend to the next.

## Protocol

1. Check preconditions.
2. Integrate: create a branch and open a PR (`gh pr create`) with the plan's objective, criteria and evidence in the description. Merge only if the user asked or the project rules allow it.
3. Deploy per `.deploy.md` (read it now) following the table above. For Coolify use the `coolify` skill.
4. **Smoke the change, not just health.** Exercise the behavior the plan delivered against the deployed URL (HTTP call or `agent-browser`), in addition to the health check.
5. **Rollback trigger**: if health or the smoke fails, roll back immediately — redeploy the previous Coolify deployment, or `git revert <commit>` and redeploy — then report what failed. Do not "fix forward" in production without approval.
6. Record the outcome (what shipped, where, smoke result) in `steps.md` or the PR.
