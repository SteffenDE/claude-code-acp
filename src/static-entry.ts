#!/usr/bin/env node

if (process.argv.includes("--acp")) {
  process.argv = process.argv.filter((arg) => arg !== "--acp");
  await import("./index.js");
} else {
  // Default: run as Claude Code CLI (used by the SDK for sub-agents, terminal auth, etc.)
  await import("@anthropic-ai/claude-agent-sdk/cli.js");
}
