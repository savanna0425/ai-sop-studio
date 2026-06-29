# AI SOP Studio 部署说明

## 当前状态

- GitHub 仓库：<https://github.com/savanna0425/ai-sop-studio>
- GitHub Pages 默认地址：<https://savanna0425.github.io/ai-sop-studio/>
- 目标子域名：`ai-sop-studio.savs-ai.com`
- Pages 部署方式：GitHub Actions workflow
- 当前 DNS 检查：`ai-sop-studio.savs-ai.com` 尚无 DNS 记录

## DNS 记录

在 `savs-ai.com` 的 DNS 服务商中添加：

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `ai-sop-studio` | `savanna0425.github.io` | DNS only |

如果使用 Cloudflare，建议先保持 DNS only，等待 GitHub Pages 证书签发完成后再按需开启代理。

## 切换到子域名

DNS 生效后执行：

```bash
gh api --method PUT repos/savanna0425/ai-sop-studio/pages -f cname=ai-sop-studio.savs-ai.com
```

等待 GitHub Pages 证书签发后启用 HTTPS：

```bash
gh api --method PUT repos/savanna0425/ai-sop-studio/pages -f cname=ai-sop-studio.savs-ai.com -F https_enforced=true
```

验证：

```bash
dig +short ai-sop-studio.savs-ai.com CNAME
curl -I https://ai-sop-studio.savs-ai.com/
gh api repos/savanna0425/ai-sop-studio/pages
```

## 本地验证命令

```bash
pnpm check
pnpm build
pnpm preview --host 127.0.0.1 --port 4173
```
