# 🌟 亲爱的缪斯 - woye.cc

> AI 工程师的 Web3 笔记：分享区块链见闻、Crypto 趋势、量化交易策略与 Python 实战

## 📖 项目简介

这是一个基于 Next.js 14 构建的现代化 Web3 内容网站，专注于分享 AI、区块链、加密货币和量化交易相关的优质内容。

**网站地址**：[https://woye.cc](https://woye.cc)

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发环境

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📝 内容管理指南

### 🔄 添加新文章

当需要添加新文章时，需要修改以下文件：

#### 1. 主要文件：`app/page.tsx`

在 `videos` 数组中添加新文章：

```typescript
const videos = [
  // 现有文章...
  {
    href: "文章链接地址",
    title: "文章标题",
    description: "文章描述",
    date: "2025/月/日",
    thumbnail: "缩略图URL"
  }
]
```

#### 2. SEO优化：`app/layout.tsx`

在结构化数据的 `blogPost` 数组中添加对应的 SEO 信息：

```typescript
blogPost: [
  // 现有文章...
  {
    "@type": "BlogPosting",
    headline: "文章标题",
    description: "文章描述",
    datePublished: "2025-08-27T00:00:00+08:00",
    dateModified: "2025-08-27T00:00:00+08:00",
    author: {
      "@type": "Person",
      name: "亲爱的缪斯",
    },
    // ... 其他SEO字段
  }
]
```

### 📤 更新到 GitHub

添加新文章后，使用以下命令更新到 GitHub：

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "添加新文章：文章标题"

# 推送到 GitHub
git push origin main
```

## 🚀 部署指南

### GitHub Pages 部署

#### 1. 准备工作

确保你已经：
- 创建了 GitHub 仓库
- 设置了仓库名称为 `woye.cc`
- 本地代码已推送到 GitHub

#### 2. 自动部署（推荐）

使用 GitHub Actions 自动部署：

```bash
# 创建 .github/workflows/deploy.yml 文件
# 内容见下面的部署配置
```

#### 3. 手动部署

```bash
# 构建项目
npm run build

# 将构建结果推送到 gh-pages 分支
git checkout -b gh-pages
git add -f .next
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Vercel 部署（推荐）

#### 1. 连接 GitHub 仓库

1. 访问 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 点击 "Import"

#### 2. 配置环境变量

在 Vercel 项目设置中添加环境变量：

```
NEXT_PUBLIC_APP_URL=https://woye.cc
NEXT_PUBLIC_APP_NAME=亲爱的缪斯
```

#### 3. 自动部署

Vercel 会自动检测 Next.js 项目并部署。每次推送代码到 main 分支都会自动重新部署。

### Netlify 部署

#### 1. 连接 GitHub 仓库

1. 访问 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 选择 GitHub 并授权
4. 选择你的仓库

#### 2. 构建设置

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18`

#### 3. 环境变量

在 "Site settings" → "Environment variables" 中添加：

```
NEXT_PUBLIC_APP_URL=https://woye.cc
NEXT_PUBLIC_APP_NAME=亲爱的缪斯
```

## 🔧 开发指南

### 项目结构

```
woye.cc/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局和 SEO 配置
│   ├── page.tsx           # 主页面和文章内容
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── ui/               # UI 组件库
│   └── theme-provider.tsx # 主题切换组件
├── hooks/                 # 自定义 Hooks
├── lib/                   # 工具函数
├── public/                # 静态资源
│   ├── woye.svg          # 网站 Logo
│   ├── sitemap.xml       # 站点地图
│   └── robots.txt        # 搜索引擎爬虫配置
├── next-sitemap.config.js # 站点地图生成配置
├── next.config.mjs        # Next.js 配置
└── package.json          # 项目依赖
```

### 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

### 自定义配置

#### 修改网站信息

编辑 `app/layout.tsx` 中的 `metadata` 对象：

```typescript
export const metadata: Metadata = {
  title: "你的网站标题",
  description: "网站描述",
  // ... 其他配置
}
```

#### 修改主题配置

主题相关配置在 `components/theme-provider.tsx` 中。

## 🛠️ 依赖优化建议

当前 `node_modules` 大小为 397MB，可以通过以下方式优化：

### 1. 分析依赖大小

```bash
# 安装依赖分析工具
npm install -g depcheck

# 分析未使用的依赖
depcheck

# 分析依赖大小
npm install -g npm-bundle
npm-bundle
```

### 2. 优化建议

- 移除未使用的 UI 组件
- 使用 `@next/bundle-analyzer` 分析包大小
- 考虑使用 lighter 版本的替代库
- 按需导入大型库

### 3. 包大小分析配置

在 `next.config.mjs` 中添加：

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

然后运行：

```bash
ANALYZE=true npm run build
```

## 🔍 SEO 优化

项目已配置完整的 SEO 优化：

- ✅ 完整的元数据配置
- ✅ Open Graph 标签
- ✅ Twitter Card 支持
- ✅ 结构化数据（Schema.org）
- ✅ 自动生成站点地图
- ✅ 搜索引擎爬虫配置

## 📱 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目为私有项目，仅供作者使用。

## 📞 联系方式

- 微信公众号：亲爱的缪斯
- VX：museaction

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Radix UI](https://www.radix-ui.com/) - UI 组件库
- [Lucide React](https://lucide.dev/) - 图标库

---

**最后更新**：2025年1月6日