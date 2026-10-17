<div align="center">

<h1>Any Model. Your Subscription.<br><em>Happy Harness.</em></h1>

<p>Orchestrate Claude, Codex and Grok in one app</p>

<p>Free and open source</p>

</div>

> ### 🔱 This is a fork
>
> Downstream fork of **[slopus/happy](https://github.com/slopus/happy)** — all credit for the
> upstream project goes to its authors. Licensed MIT, same as upstream.
>
> **What this fork adds:** a [fortnightly GitHub Actions workflow](.github/workflows/android-apk.yml)
> that runs on the 1st and 15th. It merges the latest `slopus/happy`, and when upstream has
> moved (or no release exists yet for the current version) it builds an unsigned Android APK
> with `expo prebuild` + Gradle and publishes it to
> [this repo's Releases](../../releases) — no Google Play and no EAS account needed.
> Releases are tagged `v<appVersion>-<upstreamShortSha>`, so each APK maps to an exact
> upstream commit. You can also trigger it by hand from the Actions tab.
>
> **Caveats:** APKs are **arm64-v8a only** (every phone since roughly 2017; not x86 emulators)
> and debug-signed, so uninstall any Play Store build before installing (signature mismatch).
> Push notifications still use the upstream Firebase project, and deep links still point at
> `app.happy.engineering`. The auto-merge uses `-X ours`, so if upstream edits a file this fork
> also changed (e.g. this README), upstream's version of that hunk is dropped — merge those by
> hand when it matters.
>
> This repository is intentionally standalone rather than a GitHub fork, so its issues,
> pull requests, and Actions are independent of upstream. Manual sync:
> `git remote add upstream https://github.com/slopus/happy.git && git pull upstream main`.

<img width="5178" height="2364" alt="github" src="/.github/header.png" />

<p align="center">
<a href="https://happy.engineering/#download"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/slopus/happy-desktop/main/.github/download-desktop-dark.svg"><img width="212" height="39" alt="Download Desktop for macOS, Windows, and Linux" src="https://raw.githubusercontent.com/slopus/happy-desktop/main/.github/download-desktop-light.svg" /></picture></a>
</p>

<p align="center">
<a href="https://apps.apple.com/us/app/happy-codex-claude-code-app/id6748571505"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/slopus/happy-desktop/main/.github/app-store-rating-dark.svg"><img width="150" height="56" alt="Download on the App Store. Rated 4.9 stars from 1,000+ ratings" src="https://raw.githubusercontent.com/slopus/happy-desktop/main/.github/app-store-rating-light.svg" /></picture></a>&nbsp;&nbsp;&nbsp;<a href="https://play.google.com/store/apps/details?id=com.ex3ndr.happy"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/slopus/happy-desktop/main/.github/google-play-rating-dark.svg"><img width="150" height="56" alt="Get it on Google Play. Rated 5.0 stars from 3.1k+ reviews" src="https://raw.githubusercontent.com/slopus/happy-desktop/main/.github/google-play-rating-light.svg" /></picture></a>
</p>

## What you get

1. **Multi-provider.** Astra, Fable, and Grok in one app, each with its
   vendor's own prompts and tools. Give every task the model that fits, and
   delegate to subagents on any of them.
2. **Reuse your subscriptions.** Sign in with the Claude, Codex, and Grok
   subscriptions you already pay for. Happy adds a harness, not another bill.
3. **Open source MIT.** It runs on your own hardware and your projects stay
   ordinary folders. Read the code, fork it, ship your own build.
4. **End-to-end encrypted mobile app.** Left your desk? The same sessions are
   already on your phone, and what moves between your devices is encrypted.
5. **Natively multiplayer.** Invite a colleague or a friend into the session.
   You both watch the same agent work, and either of you can steer it.

#### Resources

<p align="center">
<a href="https://happy.engineering/">Website</a> · <a href="https://happy.engineering/welcome/">Documentation</a> · <a href="https://discord.gg/fX9WBAhyfD">Discord</a> · <a href="docs/CONTRIBUTING.md">Development guide</a> · <a href="LICENSE">MIT License</a>
</p>

## How Happy fits together

| Repository                                                                            | What it is                                                                 |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **[slopus/happy](https://github.com/slopus/happy)** ← this repository | **The mobile app (iOS, Android, web), the original CLI, and the relay server** |
| [slopus/happy-desktop](https://github.com/slopus/happy-desktop) | The desktop app for macOS, Windows, and Linux |
| [slopus/happy-agent](https://github.com/slopus/happy-agent)                           | Happy Agent, the open-source agent runtime the desktop app runs on         |
| [slopus/slopus.github.io](https://github.com/slopus/slopus.github.io)                 | The website and docs at happy.engineering                                  |

## Original Happy CLI

The original CLI wraps the Claude Code and Codex harnesses directly in your
terminal and lets you continue from your phone.

For multi-model sessions and teams, move to the desktop app and Happy Harness.

```sh
npm install -g happy

# Start Claude Code
happy claude

# Or start Codex
happy codex
```

- [happy-app](packages/happy-app): the Happy mobile app and web client (Expo)
- [happy-cli](packages/happy-cli): the original Happy CLI (`happy` on npm)
- [happy-agent](packages/happy-agent): remote session control for the original Happy CLI (not the Happy Agent runtime)
- [happy-server](packages/happy-server): the relay server for encrypted sync

Migrated from the `happy-coder` package. Thanks to [@franciscop](https://github.com/franciscop) for donating the `happy` package name!
