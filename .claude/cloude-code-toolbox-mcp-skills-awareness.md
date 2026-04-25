# Cloude Code ToolBox — MCP & Skills awareness

_Generated: 2026-04-25T13:03:22.485Z_

## How to use this report

- **Saved copy:** This file is **`.claude/cloude-code-toolbox-mcp-skills-awareness.md`** — refreshed whenever the toolbox runs an MCP & Skills scan (including on workspace open when auto-scan is enabled). It is meant for **Claude Code workspace context** together with `CLAUDE.md` (which gets a shorter replaceable summary when auto-merge is on).
- **MCP:** Lists **configured** servers from VS Code `mcp.json`. **Claude Code** uses `~/.claude/settings.json` and `/mcp` in the panel for its own MCP list — align or port configs as needed.
- **Skills:** **On-disk** folders with `SKILL.md`. Claude Code does not auto-load them; attach `SKILL.md` or paths in chat when useful.
- **Task routing:** When the user’s request matches a server’s purpose (e.g. Confluence → Confluence/Atlassian MCP), prefer that **server id** from the tables below.

---

## MCP — workspace

Workspace `mcp.json` _(folder: My_new_websit)_

- **d:\My_new_websit\.vscode\mcp.json** — _File missing_

_No active workspace servers in mcp.json._

## MCP — user profile

- **C:\Users\Engineer Farhad Ali\AppData\Roaming\Code\User\mcp.json** — _File missing_

_No active user-scoped servers in mcp.json._

## Skills (local `SKILL.md` folders)

### Project-scoped

_None found (or no workspace open)._

### User-scoped

- **approval-handler** — `C:\Users\Engineer Farhad Ali\.claude\skills\approval-handler`
  - Monitor /Approved and /Rejected folders. When file moved to /Approved → execute the action via MCP (email send, post social, etc.). Log everything.

- **ceo-briefing** — `C:\Users\Engineer Farhad Ali\.claude\skills\ceo-briefing`
  - Generate Monday Morning CEO Briefing by Sunday night or on demand. Read Business_Goals.md, recent Done/, Accounting/, create summary of revenue, bottlenecks, suggestions.

- **email-triage** — `C:\Users\Engineer Farhad Ali\.claude\skills\email-triage`
  - |

- **email-triage copy** — `C:\Users\Engineer Farhad Ali\.claude\skills\email-triage copy`
  - |

- **invoice-generator** — `C:\Users\Engineer Farhad Ali\.claude\skills\invoice-generator`
  - Create invoice from client request (WhatsApp/email). Read Rates.md or Business_Goals.md, generate markdown + suggest PDF via MCP if available.

- **whatsapp-handler** — `C:\Users\Engineer Farhad Ali\.claude\skills\whatsapp-handler`
  - |

- **whatsapp-handler copy** — `C:\Users\Engineer Farhad Ali\.claude\skills\whatsapp-handler copy`
  - Process incoming WhatsApp messages from /Needs_Action/WHATSAPP_*.md. Classify intent, suggest replies, flag sales/invoice/support, create follow-up tasks.

- **find-skills** — `C:\Users\Engineer Farhad Ali\.agents\skills\find-skills`
  - Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used w

---

## Suggested next steps

- **MCP:** Command Palette → `MCP: List Servers` (or this extension’s hub **MCP** tab). In Claude Code, use `/mcp` to connect servers for the Claude session.
- **Edit config:** `MCP: Open Workspace Folder MCP Configuration` / `MCP: Open User Configuration`.
- **Refresh this report:** run **Intelligence — scan MCP & Skills awareness** again after changing `mcp.json` or adding skills.

_Report from Cloude Code ToolBox extension._
