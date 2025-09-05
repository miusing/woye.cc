/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // 启用 SWC 压缩
  swcMinify: true,
  
  // 启用 gzip 压缩
  compress: true,
  
  // 移除 X-Powered-By 响应头
  poweredByHeader: false,
  
  // 配置缓存策略
  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
