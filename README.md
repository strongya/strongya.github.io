# Arlen & Strong's Blog — Deployed Site

> ⚠️ 本仓库为自动部署产物，请勿手动修改 —— 每次发布会整体覆盖。
> This repository is auto-generated on every deploy. Do not edit manually.

**线上地址 Live site:** [https://strongya.dev](https://strongya.dev)（镜像 Mirror: [https://strongya.github.io](https://strongya.github.io)）

**源代码 Source code:** [strongya/Strong-Y](https://github.com/strongya/Strong-Y)

## 这是什么 | What is this

这是 Arlen & Strong's Blog 的静态构建产物，由 GitHub Actions 从源仓库自动构建并推送到此仓库，经 GitHub Pages 托管、Cloudflare 代理加速。

This repo hosts the static build of Arlen & Strong's Blog — an Agent-Native bilingual (中文/English) blog about AI Agents, cognition, and human-AI collaboration. Every push to the source repo's `main` branch triggers a rebuild and full overwrite of this repository.

## 特性 | Features

- 🤖 **Agent-Native**：全部内容同时提供结构化 JSON 端点（`/api/v1/posts.json`、`/agent/posts/{slug}.json`），方便 AI Agent 直接消费与引用
- 🌐 **双语**：每篇文章均有中文与英文版本（`/posts/...` 与 `/en/posts/...`）
- 📡 **Feeds**：`/feed.xml`、`/feed.json`、`/agent/feed.json`
- 🧮 支持 LaTeX 数学公式渲染（KaTeX）

## 反馈 | Feedback

发现内容问题请移步源仓库提 Issue，或邮件联系：arlen.yuan.work@gmail.com

Content licensed under CC BY-NC-SA 4.0.
