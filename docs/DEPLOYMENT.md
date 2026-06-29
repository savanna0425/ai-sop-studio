# AI SOP Studio 部署说明

## 当前状态

- GitHub 仓库：<https://github.com/savanna0425/ai-sop-studio>
- GitHub Pages 默认地址：<https://savanna0425.github.io/ai-sop-studio/>
- 目标子域名：`ai-sop-studio.savs-ai.com`
- Pages 部署方式：GitHub Actions workflow
- 当前 DNS 检查：`ai-sop-studio.savs-ai.com` 尚无 DNS 记录
- 当前 Pages 自定义域名：未绑定，避免 DNS 未生效时默认地址跳转到不可用子域名

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

也可以在 GitHub Actions 中手动运行 `Activate Custom Domain`。该工作流每天自动检查一次 DNS；当 `ai-sop-studio.savs-ai.com` 指向 `savanna0425.github.io` 后，会自动绑定 Pages custom domain，并在证书存在时启用 HTTPS。仓库不会在构建产物中携带 `CNAME` 文件，所以 DNS 未就绪前默认地址会保持可访问。

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
