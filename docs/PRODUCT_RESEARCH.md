# AI SOP Studio 产品调研

## 定位

AI SOP Studio 是 Agent 工作流资产平台，不是新的执行 harness。平台负责把目标、SOP 切片、skills、eval、工具依赖和导出器编译成平台中立 `.soprun` 包，并导出为 Codex / Claude Code 可导入配置包。

## 观察

- Codex / Claude Code 的扩展层都围绕 skills、plugins、hooks、MCP、subagents 展开，适合接收可导入配置包。
- Dify / Coze 更偏预编排 workflow，适合稳定业务流程，但对 Codex / Claude Code 重度用户的“临时任务 SOP 组装”不够贴近。
- SkillHot 当前提供公开 skills 发现能力，可作为 AI SOP Studio 的上游资产入口。

## 产品边界

- 做资产编译层，不做模型执行层。
- 第一阶段不运行 agent loop，只生成 `.soprun` 和 Codex / Claude Code 导出包。
- 商业化围绕私有 SOP 库、编译次数、团队资产管理和创作者 marketplace。

## 第一版用户

- 个人重度 Agent 用户：需要把公开 skills 和个人 SOP 快速转成可用配置。
- SOP 创作者：把方法论打包成可售卖、可安装资产。
- 团队：管理私有 SOP、版本、权限和导出标准。

## MVP 验证

1. 用户能理解“不是新 harness，而是工作流资产编译平台”。
2. 用户能从目标生成清晰 `.soprun` 结构预览。
3. 用户能选择 Codex / Claude Code 导出目标。
4. 页面能建立商业化预期：个人 Pro、创作者、团队 workspace。
