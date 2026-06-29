# AI SOP Studio

Agent 工作流资产平台，把目标、SOP 切片、skills、evals 和导出器编译成 Codex / Claude Code 可直接导入的配置包。

- 子域名：<https://ai-sop-studio.savs-ai.com>
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

`main` 分支推送后，GitHub Actions 构建 `dist/` 并发布到 GitHub Pages。`public/CNAME` 绑定自定义域名 `ai-sop-studio.savs-ai.com`。
