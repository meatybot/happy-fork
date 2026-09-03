<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/.github/logotype-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="/.github/logotype-light.png">
    <img src="/.github/logotype-dark.png" width="400" alt="Happy">
  </picture>
</div>

<h1 align="center">
  Mobile and Web Client for Claude Code & Codex
</h1>

<h4 align="center">
Use Claude Code or Codex from anywhere with end-to-end encryption.
</h4>

<div align="center">
  
[🖥️ **macOS App**](https://github.com/slopus/happy-desktop/releases/latest) • [📱 **iOS App**](https://apps.apple.com/us/app/happy-claude-code-client/id6748571505) • [🤖 **Android App**](https://play.google.com/store/apps/details?id=com.ex3ndr.happy) • [🌐 **Web App**](https://app.happy.engineering) • [🎥 **See a Demo**](https://youtu.be/GCS0OG9QMSE) • [📚 **Documentation**](https://happy.engineering/docs/) • [💬 **Discord**](https://discord.gg/fX9WBAhyfD)

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
> **Caveats:** APKs are debug-signed, so uninstall any Play Store build before installing
> (signature mismatch). Push notifications still use the upstream Firebase project, and deep
> links still point at `app.happy.engineering`. The auto-merge uses `-X ours`, so if upstream
> edits a file this fork also changed (e.g. this README), upstream's version of that hunk is
> dropped — merge those by hand when it matters.
>
> This repository is intentionally standalone rather than a GitHub fork, so its issues,
> pull requests, and Actions are independent of upstream. Manual sync:
> `git remote add upstream https://github.com/slopus/happy.git && git pull upstream main`.

<img width="5178" height="2364" alt="github" src="/.github/header.png" />


<h3 align="center">
Step 1: Download App
</h3>

<div align="center">
<a href="https://apps.apple.com/us/app/happy-claude-code-client/id6748571505"><img width="135" height="39" alt="appstore" src="https://github.com/user-attachments/assets/45e31a11-cf6b-40a2-a083-6dc8d1f01291" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://play.google.com/store/apps/details?id=com.ex3ndr.happy"><img width="135" height="39" alt="googleplay" src="https://github.com/user-attachments/assets/acbba639-858f-4c74-85c7-92a4096efbf5" /></a>
</div>

<h3 align="center">
Step 2: Install CLI on your computer
</h3>

```bash
npm install -g happy
```

> Migrated from the `happy-coder` package. Thanks to [@franciscop](https://github.com/franciscop) for donating the `happy` package name!

<h3 align="center">
Step 3: Start using `happy` instead of `claude` or `codex`
</h3>

```bash
# Instead of claude, use:
happy claude
# or
happy codex
```

<h3 align="center">
Step 4 (optional): Get the desktop app
</h3>

<div align="center">
  <a href="https://github.com/slopus/happy-desktop/releases/latest">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/.github/banner-desktop-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="/.github/banner-desktop-light.png">
      <img src="/.github/banner-desktop-dark.png" width="640" alt="Now on Mac desktop — download for macOS">
    </picture>
  </a>
</div>

<p align="center">
Prefer a native app over the terminal? <a href="https://github.com/slopus/happy-desktop/releases/latest"><b>Download Happy for macOS</b></a> — conversations beside the files, diffs, terminals, and previews your work actually touches.
</p>

## How does it work?

On your computer, run `happy` instead of `claude` or `happy codex` instead of `codex` to start your AI through our wrapper. When you want to control your coding agent from your phone, it restarts the session in remote mode. To switch back to your computer, just press any key on your keyboard.

## 🔥 Why Happy Coder?

- 📱 **Mobile access to Claude Code and Codex** - Check what your AI is building while away from your desk
- 🔔 **Push notifications** - Get alerted when Claude Code and Codex needs permission or encounters errors  
- ⚡ **Switch devices instantly** - Take control from phone or desktop with one keypress
- 🔐 **End-to-end encrypted** - Your code never leaves your devices unencrypted
- 🛠️ **Open source** - Audit the code yourself. No telemetry, no tracking

## 📦 Project Components

- **[Happy Desktop](https://github.com/slopus/happy-desktop)** - Native macOS app ([download](https://github.com/slopus/happy-desktop/releases/latest))
- **[Happy App](https://github.com/slopus/happy/tree/main/packages/happy-app)** - Web UI + mobile client (Expo)
- **[Happy CLI](https://github.com/slopus/happy/tree/main/packages/happy-cli)** - Command-line interface for Claude Code and Codex
- **[Happy Agent](https://github.com/slopus/happy/tree/main/packages/happy-agent)** - Remote agent control CLI (create, send, monitor sessions)
- **[Happy Server](https://github.com/slopus/happy/tree/main/packages/happy-server)** - Backend server for encrypted sync

## 🏠 Who We Are

We're engineers scattered across Bay Area coffee shops and hacker houses, constantly checking how our AI coding agents are progressing on our pet projects during lunch breaks. Happy Coder was born from the frustration of not being able to peek at our AI coding tools building our side hustles while we're away from our keyboards. We believe the best tools come from scratching your own itch and sharing with the community.

## 📚 Documentation & Contributing

- **[Documentation Website](https://happy.engineering/docs/)** - Learn how to use Happy Coder effectively
- **[Contributing Guide](docs/CONTRIBUTING.md)** - How to contribute, PR guidelines, and development setup
- **[Edit docs at github.com/slopus/slopus.github.io](https://github.com/slopus/slopus.github.io)** - Help improve our documentation and guides

## License

MIT License - see [LICENSE](LICENSE) for details.
