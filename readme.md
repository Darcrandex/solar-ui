
## 开发模式

```bash
pnpm install
pnpm dev
```

## 发布 npm

先注册一个 npm 账号

```bash
pnpm build
npm login --registry=https://registry.npmjs.org
npm publish --access=public --registry=https://registry.npmjs.org
```

每次发布时记得修改 `package.json` 的 `version`

## 部署文档

```bash
pnpm run docs:deploy
```

这个步骤会自动创建一个 `gh-pages` 分支，并把 `docs-dist` 作为分支内容发布。
然后可以通过 `https://{你的github账号}.github.io/{当前项目的名称}/` 访问在线文档。
例如 `https://darcrandex.github.io/solar-ui/`

其中项目名称可以在 `.env` 进行配置

## 自定义 tailwindcss

> [参考文档 tailwind 主题](https://tailwindcss.com/docs/theme)

## 在其他项目中使用这个 UI 库

```bash
pnpm install solar-ui
```

安装并配置 [tailwindcss](https://tailwindcss.com/docs/installation)

修改配置`tailwind.config.js`

```json
{
  "content": [
    "./src/**/*.{html,js}",
    // 告诉 tailwind 需要编译 UI 库的内容
    "node_modules/solar-ui/**/*.{js}"
  ]
}
```
