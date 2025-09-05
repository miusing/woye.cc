import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "亲爱的缪斯 | AI × Web3 × Crypto | 量化交易与投资洞察",
  description:
    "AI 工程师的 Web3 笔记：分享区块链见闻、Crypto 趋势、量化交易策略与 Python 实战。从 Z-Score 指标、凯利公式，到量化系统搭建，帮助你用数据与理性探索加密世界的长期价值。",
  authors: [{ name: "亲爱的缪斯 | Muse" }],
  keywords:
    "AI,Web3,Crypto,区块链,加密货币,比特币,以太坊,数字资产,量化交易,投资策略,DeFi,Z-Score,凯利公式,Python,交易系统,亲爱的缪斯",
  creator: "亲爱的缪斯",
  publisher: "亲爱的缪斯",
  robots: "index, follow",
  other: {
    googlebot:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
  openGraph: {
    title: "亲爱的缪斯 | AI × Web3 × Crypto | 量化交易与投资洞察",
    description:
      "AI 工程师的 Web3 笔记：分享区块链见闻、Crypto 趋势、量化交易策略与 Python 实战。从 Z-Score 指标、凯利公式，到量化系统搭建，帮助你用数据与理性探索加密世界的长期价值。",
    url: "https://woye.cc/",
    siteName: "亲爱的缪斯",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://woye.cc/static/images/og-cover.png", // 建议换成本地托管的统一封面
        width: 1200,
        height: 630,
        alt: "AI × Web3 × Crypto × 量化交易与投资洞察",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cr0ath",
    creator: "@cr0ath",
    title: "亲爱的缪斯 | AI × Web3 × Crypto | 量化交易与投资洞察",
    description:
      "AI 工程师的 Web3 笔记：分享区块链见闻、Crypto 趋势、量化交易策略与 Python 实战。",
    images: ["https://woye.cc/static/images/og-cover.png"], // 同上，替换掉 YouTube 外链图
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "亲爱的缪斯",
              url: "https://woye.cc",
              logo: "https://woye.cc/favicon.svg",
              description: "AI 工程师的 Web3 笔记，专注 AI × Web3 × Crypto × 量化交易。分享加密市场趋势、投资策略与 Python 实战教程。",
              founder: {
                "@type": "Person",
                name: "亲爱的缪斯",
              },
              sameAs: ["https://woye.cc"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "亲爱的缪斯",
              url: "https://woye.cc",
              description: "AI × Web3 × Crypto | 量化交易与投资洞察。分享区块链见闻、加密趋势、量化交易系统与 Python 实战。",
              inLanguage: "zh-CN",
              publisher: {
                "@type": "Organization",
                name: "亲爱的缪斯",
                logo: {
                  "@type": "ImageObject",
                  url: "https://woye.cc/favicon.svg",
                },
              },
            }),
          }}
        />
        
        {/* 文章级结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "亲爱的缪斯 - AI-Web3区块链博客",
              description: "AI × Web3 × Crypto | 量化交易与投资洞察。分享区块链见闻、加密趋势、量化交易系统与 Python 实战。",
              url: "https://woye.cc",
              inLanguage: "zh-CN",
              publisher: {
                "@type": "Organization",
                name: "亲爱的缪斯",
                logo: {
                  "@type": "ImageObject",
                  url: "https://woye.cc/favicon.svg",
                },
              },
              blogPost: [
                {
                  "@type": "BlogPosting",
                  headline: "币圈百倍收益的秘诀！干货！",
                  description: "想在币圈抓住百倍收益？核心不是频繁操作，而是：突破阶段性高点才出手，坚守大趋势，严格止损保护本金，科学仓位管理。70%长期现货，30%高风险博弈，结合前沿新闻，少操作、多等待，把握高盈亏比机会，才有可能真正赢在长期。",
                  datePublished: "2025-08-27T00:00:00+08:00",
                  dateModified: "2025-08-27T00:00:00+08:00",
                  author: {
                    "@type": "Person",
                    name: "亲爱的缪斯",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "亲爱的缪斯",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://woye.cc/favicon.svg",
                    },
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://i.meee.com.tw/oh7F5i6.png",
                    width: 1200,
                    height: 630,
                  },
                  url: "https://mp.weixin.qq.com/s/x3OhKW1l0X-CmRTxP0usZg?poc_token=HAkpu2ijX3OUpdC9TWq4_rSR7oX3GKgJ7kJMyWj6",
                },
                {
                  "@type": "BlogPosting",
                  headline: "Python量化交易系统搭建：从零到实盘的5模块架构",
                  description: "从数据获取到实盘执行，一个完整的量化交易系统由5个核心模块构成：数据获取、策略逻辑、回测系统、交易执行、主控程序。本篇文章提供循序渐进的开发路线图，涵盖API调用、风险控制、实盘安全等关键实践，帮助你从零搭建属于自己的量化系统。",
                  datePublished: "2025-08-16T00:00:00+08:00",
                  dateModified: "2025-08-16T00:00:00+08:00",
                  author: {
                    "@type": "Person",
                    name: "亲爱的缪斯",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "亲爱的缪斯",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://woye.cc/favicon.svg",
                    },
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://i.meee.com.tw/2Df39q9.png",
                    width: 1200,
                    height: 630,
                  },
                  url: "https://mp.weixin.qq.com/s/AEh4y2zfRpkx4yQofddKSg",
                },
                {
                  "@type": "BlogPosting",
                  headline: "币圈小白到底该如何入门量化交易？",
                  description: "量化交易并不是高不可攀的秘密武器，而是一个简单的四步循环：看指标 → 找规律 → 做策略 → 测试。本篇文章为币圈新手拆解量化交易的核心思路，提供基础策略与实战建议，让你学会用理性和数据代替情绪与运气。",
                  datePublished: "2025-08-16T00:00:00+08:00",
                  dateModified: "2025-08-16T00:00:00+08:00",
                  author: {
                    "@type": "Person",
                    name: "亲爱的缪斯",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "亲爱的缪斯",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://woye.cc/favicon.svg",
                    },
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://i.meee.com.tw/os87pq7.png",
                    width: 1200,
                    height: 630,
                  },
                  url: "https://mp.weixin.qq.com/s/7fux6TvcM_AqdRTr2KQN9Q",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">{children}</body>
    </html>
  )
}
