# zhouxianzhong.cn

用于 `zhouxianzhong.cn` 的个人网站和课程入口，使用 Cloudflare Workers Static Assets 发布。

## 本地预览

这是一个无依赖的静态站点。直接打开 `index.html` 即可预览页面；若要测试与生产环境一致的构建输出：

```bash
npm run build
```

构建产物位于 `dist/`。

## 部署到 Cloudflare Workers

该站点已配置为 Cloudflare Workers Static Assets。`wrangler.jsonc` 将 Worker 静态资源目录固定为 `./dist`。

1. 将该仓库连接到 Cloudflare Worker `personal-site` 的 Git 集成。
2. 使用构建命令 `npm run build`。
3. 由 Cloudflare 的部署流程运行 `npx wrangler deploy`。

根目录构建会生成主页，并将 `courses/` 中的嵌入课程复制到 `dist/courses/`。每次推送 `main`，Cloudflare 都会重新构建并发布。

## 课程站点

已嵌入的课程可直接在本域名下阅读：

- `/courses/vlsi-testing-technology/`
- `/courses/microelectronic-device-modeling/`

课程源仓库保持独立，嵌入的静态快照维护步骤见 [courses/README.md](courses/README.md)。

## 域名

`zhouxianzhong.cn` 和 `www.zhouxianzhong.cn` 均已绑定到 Worker。Cloudflare 的 **Always Use HTTPS** 规则应保持开启，确保 HTTP 请求自动跳转 HTTPS。

`_headers` 文件会在发布时设置基础安全响应头。首屏图形是本仓库生成和发布的本地资源，不依赖第三方图片服务。
