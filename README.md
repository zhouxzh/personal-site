# zhouxianzhong.cn

用于 `zhouxianzhong.cn` 的个人网站，也是 Cloudflare Pages 的最小部署示例。

## 本地预览

这是一个无依赖的静态站点。直接打开 `index.html` 即可预览页面；若要测试与生产环境一致的构建输出：

```bash
npm run build
```

构建产物位于 `dist/`。

## 部署到 Cloudflare Pages

1. 将该仓库推送至 GitHub 或 GitLab。
2. 在 Cloudflare Dashboard 中进入 **Workers & Pages**，选择 **Create application** -> **Pages** -> **Connect to Git**。
3. 选择此仓库，并使用以下构建设置：

   | 设置项 | 值 |
   | --- | --- |
   | Framework preset | None |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | 18 或更高 |

4. 点击 **Save and Deploy**。首次部署成功后，Pages 会提供一个 `*.pages.dev` 预览地址。

## 绑定 zhouxianzhong.cn

1. 在新建的 Pages 项目中打开 **Custom domains**，点击 **Set up a custom domain**。
2. 输入 `zhouxianzhong.cn`。若此域名已托管在 Cloudflare，按照页面提示确认即可；否则在域名注册商处添加 Cloudflare 显示的 DNS 记录。
3. 再添加 `www.zhouxianzhong.cn`，并在 Pages 的域名设置中将其中一个设为主域名。通常将 `zhouxianzhong.cn` 设为主域名更简洁。
4. 等待 TLS 证书签发完成。之后每次向默认分支推送提交，Cloudflare Pages 都会自动构建并发布新版本。

`_headers` 文件会在发布时设置基础安全响应头。首屏图形是本仓库生成和发布的本地资源，不依赖第三方图片服务。
