# Claude Code — project context






<!-- cloude-code-toolbox:mcp-skills-awareness-begin -->

### MCP & Skills awareness (Cloude Code ToolBox)

_Last synced: 2026-07-23T19:42:42.653Z._

- **Full report:** `.claude/cloude-code-toolbox-mcp-skills-awareness.md` in this workspace (auto-overwritten on each scan). Use it as ground truth for configured servers and skill folders.
- **MCP:** For **live tools** in Claude Code, enable the matching server via `/mcp`. Servers are configured in `~/.claude.json` (user) and `.mcp.json` (project).
- **When the user’s task matches a server** (e.g. Confluence work and a **Confluence** / **Atlassian** MCP is listed), **prefer that server id** and plan on tool use—not only file search.
- **Skills:** Folders below contain `SKILL.md`; attach or cite paths in chat when relevant.

#### Workspace MCP

- `d:\My_new_websit\.mcp.json` _(workspace: My_new_websit)_ — _file missing_

_No active workspace servers in mcp.json._

#### User MCP

- `C:\Users\Engineer Farhad Ali\.claude.json` — _no servers defined_

_No active user-scoped servers in mcp.json._

#### Project skills

- **deploy-to-vercel** — `d:\My_new_websit\.agents\skills\deploy-to-vercel` — Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".

#### User skills

- **approval-handler** — `C:\Users\Engineer Farhad Ali\.claude\skills\approval-handler` — Monitor /Approved and /Rejected folders. When file moved to /Approved → execute the action via MCP (email send, post social, etc.). Log everything.

- **ceo-briefing** — `C:\Users\Engineer Farhad Ali\.claude\skills\ceo-briefing` — Generate Monday Morning CEO Briefing by Sunday night or on demand. Read Business_Goals.md, recent Done/, Accounting/, create summary of revenue, bottlenecks, suggestions.

- **email-triage** — `C:\Users\Engineer Farhad Ali\.claude\skills\email-triage` — |

- **email-triage copy** — `C:\Users\Engineer Farhad Ali\.claude\skills\email-triage copy` — |

- **invoice-generator** — `C:\Users\Engineer Farhad Ali\.claude\skills\invoice-generator` — Create invoice from client request (WhatsApp/email). Read Rates.md or Business_Goals.md, generate markdown + suggest PDF via MCP if available.

- **whatsapp-handler** — `C:\Users\Engineer Farhad Ali\.claude\skills\whatsapp-handler` — |

- **whatsapp-handler copy** — `C:\Users\Engineer Farhad Ali\.claude\skills\whatsapp-handler copy` — Process incoming WhatsApp messages from /Needs_Action/WHATSAPP_*.md. Classify intent, suggest replies, flag sales/invoice/support, create follow-up tasks.

- **code-review** — `C:\Users\Engineer Farhad Ali\.agents\skills\code-review` — AI-powered code review using CodeRabbit. Default code-review skill. Trigger for any explicit review request AND autonomously when the agent thinks a review is needed (code/PR/quality/security).

- **deploy-to-vercel** — `C:\Users\Engineer Farhad Ali\.agents\skills\deploy-to-vercel` — Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".

- **find-skills** — `C:\Users\Engineer Farhad Ali\.agents\skills\find-skills` — Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used w

- **python-mcp-server-generator** — `C:\Users\Engineer Farhad Ali\.agents\skills\python-mcp-server-generator` — Generate a complete MCP server project in Python with tools, resources, and proper configuration

- **skill-creator** — `C:\Users\Engineer Farhad Ali\.agents\skills\skill-creator` — Create new skills, modify and improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, edit, or optimize an existing skill, run evals to test a skill, benchmark skill pe

<!-- cloude-code-toolbox:mcp-skills-awareness-end -->
