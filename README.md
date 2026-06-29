# AI SOP Studio

Agent 工作流资产平台，把目标、SOP 切片、skills、evals 和导出器编译成 Codex / Claude Code 可直接导入的配置包。

- 当前线上地址：<https://savanna0425.github.io/ai-sop-studio/>
- 目标子域名：<https://ai-sop-studio.savs-ai.com>（等待 DNS CNAME 生效后切换）
- 产品定位：平台级 SOP / skill 资产编译与分发，不自建 agent harness。
- 首批导出目标：Codex、Claude Code。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 检查与构建

```bash
pnpm check
pnpm build
```

## 部署

`main` 分支推送后，GitHub Actions 构建 `dist/` 并发布到 GitHub Pages。当前先发布在 GitHub Pages 默认地址，避免 DNS 未生效时跳转到不可用子域名。

DNS 生效后，`Activate Custom Domain` workflow 会自动把 Pages 切换到 `ai-sop-studio.savs-ai.com`。手动切换步骤见 [部署说明](docs/DEPLOYMENT.md)。
