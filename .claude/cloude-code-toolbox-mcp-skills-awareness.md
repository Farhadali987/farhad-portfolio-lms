# Cloude Code ToolBox — MCP & Skills awareness

_Generated: 2026-07-23T19:42:42.411Z_

## How to use this report

- **Saved copy:** This file is **`.claude/cloude-code-toolbox-mcp-skills-awareness.md`** — refreshed whenever the toolbox runs an MCP & Skills scan (including on workspace open when auto-scan is enabled). It is meant for **Claude Code workspace context** together with `CLAUDE.md` (which gets a shorter replaceable summary when auto-merge is on).
- **MCP:** Lists **configured** servers from Claude Code config (`~/.claude.json` for user scope, `.mcp.json` for project scope). Use `/mcp` in the Claude Code panel to connect servers for your session.
- **Skills:** **On-disk** folders with `SKILL.md`. Claude Code does not auto-load them; attach `SKILL.md` or paths in chat when useful.
- **Task routing:** When the user’s request matches a server’s purpose (e.g. Confluence → Confluence/Atlassian MCP), prefer that **server id** from the tables below.

---

## MCP — workspace

Workspace `mcp.json` _(folder: My_new_websit)_

- **d:\My_new_websit\.mcp.json** — _File missing_

_No active workspace servers in mcp.json._

## MCP — user profile

- **C:\Users\Engineer Farhad Ali\.claude.json** — _File exists — no servers defined_

_No active user-scoped servers in mcp.json._

## Skills (local `SKILL.md` folders)

### Project-scoped

- **deploy-to-vercel** — `d:\My_new_websit\.agents\skills\deploy-to-vercel`
  - Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".

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

- **code-review** — `C:\Users\Engineer Farhad Ali\.agents\skills\code-review`
  - AI-powered code review using CodeRabbit. Default code-review skill. Trigger for any explicit review request AND autonomously when the agent thinks a review is needed (code/PR/quality/security).

- **deploy-to-vercel** — `C:\Users\Engineer Farhad Ali\.agents\skills\deploy-to-vercel`
  - Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".

- **find-skills** — `C:\Users\Engineer Farhad Ali\.agents\skills\find-skills`
  - Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used w

- **python-mcp-server-generator** — `C:\Users\Engineer Farhad Ali\.agents\skills\python-mcp-server-generator`
  - Generate a complete MCP server project in Python with tools, resources, and proper configuration

- **skill-creator** — `C:\Users\Engineer Farhad Ali\.agents\skills\skill-creator`
  - Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill pe

---

## Suggested next steps

- **MCP:** Use this extension’s hub **MCP** tab, or `claude mcp list` in the terminal. In Claude Code, use `/mcp` to connect servers for the session.
- **Edit config:** Open `~/.claude.json` (user MCP) or `<workspace>/.mcp.json` (project MCP) via the extension commands.
- **Refresh this report:** run **Intelligence — scan MCP & Skills awareness** again after changing MCP config or adding skills.

_Report from Cloude Code ToolBox extension._
