"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Theme Toggle Component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center rounded-full border p-1"
      aria-label="Toggle Theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide size-6.5 rounded-full p-1.5 text-muted-foreground ${isDark ? "hidden" : "block"}`}
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide size-6.5 rounded-full p-1.5 text-muted-foreground ${isDark ? "block" : "hidden"}`}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    </button>
  )
}

// Copy Email Button Component
function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copyEmail}
      className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      title={copied ? "已复制到剪贴板!" : "复制公众号"}
    >
      {copied ? (
        <svg
          className="w-5 h-5 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      )}
    </button>
  )
}

// Video Card Component
function VideoCard({
  href,
  title,
  description,
  date,
  thumbnail,
}: {
  href: string
  title: string
  description: string
  date: string
  thumbnail: string
}) {
  return (
    <Link href={href} className="group block">
      <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-sm dark:hover:shadow-lg transition-all bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
        <div className="relative flex-shrink-0">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            width={120}
            height={68}
            className="rounded-md group-hover:opacity-90 transition-opacity w-[120px] h-[68px] object-cover"
          />
          </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 text-sm sm:text-base line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-1 mb-2">{description}</p>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>亲爱的缪斯</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const videos = [
//     {
//       href: "https://woye.cc/web3/videos/zscore-probility-indicator-crypto-trading",
//       title: "教你快速用 Z-Score 指标预测币价",
//       description: "我发现了币价涨跌的规律！教你快速用 Z-Score 指标预测币价",
//       date: "2025/8/24",
//       thumbnail: "https://img.youtube.com/vi/LZQuG2HYJ6c/maxresdefault.jpg",
//     },
//     {
//       href: "https://woye.cc/web3/videos/crypto-quick-tips-shorts",
//       title: "Solana Seeker 手机📱开箱📦测评视频！",
//       description: "可能是亚洲区第一支 Solana Seeker 手机📱开箱📦测评视频！",
//       date: "2025/8/12",
//       thumbnail: "https://img.youtube.com/vi/DotfvA0kNpU/maxresdefault.jpg",
//     },
//     {
//       href: "https://woye.cc/web3/videos/crypto-make-a-million",
//       title: "六分钟速成：币圈小白如何快速赚到一百万",
//       description: "币圈小白最速一百万通关秘籍",
//       date: "2025/8/8",
//       thumbnail: "https://img.youtube.com/vi/mFsSziXb8JM/maxresdefault.jpg",
//     },
//     {
//       href: "https://woye.cc/web3/videos/kelly-criterion-answer",
//       title: "【答案解密】币圈赌神公式 - 凯利公式",
//       description: "【答案解密】币圈赌神公式 - 凯利公式，科学计算最优投资仓位",
//       date: "2025/8/1",
//       thumbnail: "https://img.youtube.com/vi/B6eIBg8YjB4/maxresdefault.jpg",
//     },
    {
      href: "https://mp.weixin.qq.com/s/x3OhKW1l0X-CmRTxP0usZg?poc_token=HAkpu2ijX3OUpdC9TWq4_rSR7oX3GKgJ7kJMyWj6",
      title: "币圈百倍收益的秘诀！干货！",
      description: "想在币圈抓住百倍收益？核心不是频繁操作，而是：突破阶段性高点才出手，坚守大趋势，严格止损保护本金，科学仓位管理。70%长期现货，30%高风险博弈，结合前沿新闻，少操作、多等待，把握高盈亏比机会，才有可能真正赢在长期。",
      date: "2025/8/27",
      thumbnail: "https://i.meee.com.tw/oh7F5i6.png",
    },
    {
      href: "https://mp.weixin.qq.com/s/AEh4y2zfRpkx4yQofddKSg",
      title: "Python量化交易系统搭建：从零到实盘的5模块架构",
      description: "从数据获取到实盘执行，一个完整的量化交易系统由5个核心模块构成：数据获取、策略逻辑、回测系统、交易执行、主控程序。本篇文章提供循序渐进的开发路线图，涵盖API调用、风险控制、实盘安全等关键实践，帮助你从零搭建属于自己的量化系统。",
      date: "2025/8/16",
      thumbnail: "https://i.meee.com.tw/2Df39q9.png",
    },
    {
      href: "https://mp.weixin.qq.com/s/7fux6TvcM_AqdRTr2KQN9Q",
      title: "币圈小白到底该如何入门量化交易？",
      description: "量化交易并不是高不可攀的秘密武器，而是一个简单的四步循环：看指标 → 找规律 → 做策略 → 测试。本篇文章为币圈新手拆解量化交易的核心思路，提供基础策略与实战建议，让你学会用理性和数据代替情绪与运气。",
      date: "2025/8/16",
      thumbnail: "https://i.meee.com.tw/os87pq7.png",
    },
    {
      href: "https://mp.weixin.qq.com/s/aqU0kxvNyHlVwKdEvMEIig",
      title: "如何构建 AI Agent 的上下文工程？",
      description: "总结在构建 AI 智能体过程中的 6 项核心实践，从 KV-Cache 到外部记忆系统，为开发者提供实战经验与避坑指南。",
      date: "2025/7/21",
      thumbnail: "https://i.meee.com.tw/hbrChGh.png",
    },
  ]

  return (
    <>
      <main id="nd-home-layout" className="flex flex-1 flex-col pt-14">
        {/* Header */}
        <header
          id="nd-nav"
          className="fixed top-0 z-40 left-0 backdrop-blur-lg border-b transition-colors bg-background/80 right-0"
          aria-label="Main"
        >
          <div style={{ position: "relative" }}>
            <nav className="flex h-14 w-full items-center px-4 mx-auto max-w-6xl">
              <Link className="inline-flex items-center gap-2.5 font-semibold" href="/">
                <Image src="/woye.svg" alt="亲爱的缪斯" width={24} height={24} className="w-6 h-6 mr-0" />
                亲爱的缪斯
              </Link>


              <div className="flex flex-row items-center justify-end gap-1.5 flex-1">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-4 lg:space-y-6">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/woye.svg"
                    alt="缪斯头像"
                    width={96}
                    height={96}
                    className="rounded-full border-2 border-gray-200 dark:border-gray-600"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">Muse</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4">
                  AI 工程师 | Web3 & Crypto 爱好者
                </p>

                {/* Contact Info */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-lg transition-colors group">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-green-600 text-lg flex-shrink-0"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"></path>
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="leading-none">museaction</span>
                      <CopyEmailButton email="museaction" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchange Promotions */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white text-center">🎁 优惠注册</h4>
                <div className="space-y-2">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 dark:hover:from-yellow-900/30 dark:hover:to-orange-900/30 rounded-lg transition-all group border border-yellow-200 dark:border-yellow-700"
                    href="https://www.maxweb.academy/join?ref=KFCV50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 126.61 126.61"
                      className="text-yellow-500 text-lg flex-shrink-0"
                    >
                      <g fill="currentColor">
                        <path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"></path>
                        <path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"></path>
                        <path d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"></path>
                        <path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"></path>
                        <path d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"></path>
                      </g>
                    </svg>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Binance</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">返佣20% + 专属优惠</div>
                    </div>
                    <div className="text-xs bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full font-medium">
                      推荐
                    </div>
                  </Link>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 rounded-lg transition-all group border border-blue-200 dark:border-blue-700"
                    href="https://www.xacneo.com/join/51684374"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 157.42708 44.185417"
                      className="text-black dark:text-white flex-shrink-0"
                    >
                      <g fill="currentColor" transform="matrix(0.39972707,0,0,0.34817986,0,0)">
                        <path d="M 115.822,0 H 2.94268 C 2.24645,0 1.57875,0.297103 1.08644,0.825953 0.594137,1.3548 0.317566,2.07208 0.317566,2.81999 V 124.079 c 0,0.748 0.276571,1.466 0.768874,1.995 0.49231,0.528 1.16001,0.825 1.85624,0.825 H 115.822 c 0.697,0 1.364,-0.297 1.857,-0.825 0.492,-0.529 0.769,-1.247 0.769,-1.995 V 2.81999 c 0,-0.74791 -0.277,-1.46519 -0.769,-1.994037 C 117.186,0.297103 116.519,0 115.822,0 Z M 79.0709,81.7797 c 0,0.7479 -0.2766,1.4651 -0.7689,1.994 -0.4923,0.5288 -1.16,0.8259 -1.8562,0.8259 H 42.3193 c -0.6962,0 -1.3639,-0.2971 -1.8562,-0.8259 -0.4923,-0.5289 -0.7689,-1.2461 -0.7689,-1.994 V 45.1198 c 0,-0.7479 0.2766,-1.4652 0.7689,-1.994 0.4923,-0.5289 1.16,-0.826 1.8562,-0.826 h 34.1265 c 0.6962,0 1.3639,0.2971 1.8562,0.826 0.4923,0.5288 0.7689,1.2461 0.7689,1.994 z" />
                        <path d="m 352.131,42.305 h -34.127 c -1.449,0 -2.625,1.2625 -2.625,2.82 v 36.6598 c 0,1.5574 1.176,2.82 2.625,2.82 h 34.127 c 1.45,0 2.625,-1.2626 2.625,-2.82 V 45.125 c 0,-1.5575 -1.175,-2.82 -2.625,-2.82 z" />
                        <path d="m 312.763,0.00204468 h -34.126 c -1.45,0 -2.625,1.26255532 -2.625,2.81998532 V 39.4819 c 0,1.5574 1.175,2.82 2.625,2.82 h 34.126 c 1.45,0 2.626,-1.2626 2.626,-2.82 V 2.82203 c 0,-1.55743 -1.176,-2.81998532 -2.626,-2.81998532 z" />
                        <path d="m 391.529,0.00204468 h -34.127 c -1.449,0 -2.625,1.26255532 -2.625,2.81998532 V 39.4819 c 0,1.5574 1.176,2.82 2.625,2.82 h 34.127 c 1.45,0 2.625,-1.2626 2.625,-2.82 V 2.82203 c 0,-1.55743 -1.175,-2.81998532 -2.625,-2.81998532 z" />
                        <path d="m 312.763,84.6038 h -34.126 c -1.45,0 -2.625,1.2625 -2.625,2.8199 v 36.6603 c 0,1.557 1.175,2.82 2.625,2.82 h 34.126 c 1.45,0 2.625,-1.263 2.625,-2.82 V 87.4237 c 0,-1.5574 -1.176,-2.8199 -2.625,-2.8199 z" />
                        <path d="m 391.529,84.6038 h -34.127 c -1.449,0 -2.625,1.2625 -2.625,2.8199 v 36.6603 c 0,1.557 1.176,2.82 2.625,2.82 h 34.127 c 1.45,0 2.625,-1.263 2.625,-2.82 V 87.4237 c 0,-1.5574 -1.175,-2.8199 -2.625,-2.8199 z" />
                        <path d="m 253.651,0.00204468 h -34.126 c -1.45,0 -2.626,1.26255532 -2.626,2.81998532 V 39.4819 c 0,1.5574 1.176,2.82 2.626,2.82 h 34.126 c 1.45,0 2.625,-1.2626 2.625,-2.82 V 2.82203 c 0,-1.55743 -1.175,-2.81998532 -2.625,-2.81998532 z" />
                        <path d="m 253.651,84.6038 h -34.126 c -1.45,0 -2.626,1.2625 -2.626,2.8199 v 36.6603 c 0,1.557 1.176,2.82 2.626,2.82 h 34.126 c 1.45,0 2.625,-1.263 2.625,-2.82 V 87.4237 c 0,-1.5574 -1.176,-2.8199 -2.625,-2.8199 z" />
                        <path d="m 216.888,45.0881 c 0,-0.7479 -0.277,-1.4652 -0.769,-1.994 -0.492,-0.5289 -1.16,-0.826 -1.856,-0.826 H 177.511 V 2.81999 c 0,-0.74791 -0.277,-1.46519 -0.769,-1.994037 C 176.25,0.297103 175.582,0 174.886,0 H 140.76 c -0.697,0 -1.364,0.297103 -1.857,0.825953 -0.492,0.528847 -0.769,1.246127 -0.769,1.994037 V 124.016 c 0,0.748 0.277,1.465 0.769,1.994 0.493,0.529 1.16,0.826 1.857,0.826 h 34.126 c 0.696,0 1.364,-0.297 1.856,-0.826 0.492,-0.529 0.769,-1.246 0.769,-1.994 V 84.5679 h 36.752 c 0.696,0 1.364,-0.2971 1.856,-0.8259 0.492,-0.5289 0.769,-1.2462 0.769,-1.9941 z" />
                      </g>
                    </svg>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">OKX</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">全球领先加密交易所</div>
                    </div>
                    <div className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full font-medium">
                      推荐
                    </div>
                  </Link>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 dark:hover:from-green-900/30 dark:hover:to-teal-900/30 rounded-lg transition-all group border border-green-200 dark:border-green-700"
                    href="https://partner.bybit.com/b/130380"
                  >
                    <svg width="18" height="18" viewBox="0 0 13547 4513" className="flex-shrink-0">
                      <polygon points="9655,3480 9655,-1 10355,-1 10355,3480" fill="#F6A500"/>
                      <path d="M1500 4514l-1500 0 0 -3481 1440 0c700,0 1107,381 1107,978 0,386 -262,636 -443,719 216,98 493,318 493,782 0,650 -458,1002 -1097,1002zm-116 -2875l0 0 -685 0 0 802 685 0c297,0 463,-161 463,-401 0,-239 -166,-401 -463,-401zm45 1413l0 0 -730 0 0 856 730 0c317,0 468,-195 468,-430 0,-235 -151,-425 -468,-425z" fill="#15182A"/>
                      <polygon points="4732,3086 4732,4514 4037,4514 4037,3086 2960,1033 3720,1033 4389,2436 5049,1033 5809,1033" fill="#15182A"/>
                      <path d="M7793 4514l-1500 0 0 -3481 1440 0c700,0 1107,381 1107,978 0,386 -262,636 -443,719 216,98 493,318 493,782 0,650 -458,1002 -1097,1002zm-116 -2875l0 0 -685 0 0 802 685 0c297,0 463,-161 463,-401 0,-239 -166,-401 -463,-401zm45 1413l0 0 -730 0 0 856 730 0c317,0 468,-195 468,-430 0,-235 -151,-425 -468,-425z" fill="#15182A"/>
                      <polygon points="12610,1639 12610,4514 11911,4514 11911,1639 10974,1639 10974,1033 13547,1033 13547,1639" fill="#15182A"/>
                    </svg>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Bybit</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">跟单交易和衍生品</div>
                    </div>
                    <div className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-2 py-1 rounded-full font-medium">
                      推荐
                    </div>
                  </Link>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 rounded-lg transition-all group border border-indigo-200 dark:border-indigo-700"
                    href="https://www.coinglass.com/?ref_code=ZQWGGW"
                  >
                    <svg width="18" height="18" viewBox="0 0 417 417" className="flex-shrink-0">
                      <path d="M0 0 C137.61 0 275.22 0 417 0 C417 137.61 417 275.22 417 417 C279.39 417 141.78 417 0 417 C0 279.39 0 141.78 0 0 Z " fill="#000000" transform="translate(0,0)"/>
                      <path d="M0 0 C3.92560339 3.44416146 6.21417142 7.11424257 8 12 C8.7528125 11.67386719 9.505625 11.34773438 10.28125 11.01171875 C34.74810363 0.94586513 62.98168346 0.68303827 87.6953125 10.03515625 C89.85076603 10.93752409 91.92610799 11.92482557 94 13 C94.0825 12.29875 94.165 11.5975 94.25 10.875 C95.51745525 6.01642154 97.84385631 2.77076246 102 0 C105.32571874 -0.56474469 107.7271148 -0.8294868 110.6484375 1.07421875 C119.41089731 9.9033978 119.67195043 24.28863019 120 36 C121.29292969 35.95359375 122.58585938 35.9071875 123.91796875 35.859375 C137.26506828 35.52116446 149.39538854 35.85924863 160.00390625 45.02734375 C169.63352881 54.54389833 173.47904234 64.5332446 174 78 C166.96991184 83.06820309 161.56941491 83.14375645 153.1875 83.0625 C152.30384766 83.05798828 151.42019531 83.05347656 150.50976562 83.04882812 C148.33981441 83.03709866 146.16989828 83.01916495 144 83 C144.23904053 84.28124756 144.23904053 84.28124756 144.48291016 85.58837891 C147.69024949 106.74954975 146.05869416 128.13678812 133.453125 145.87109375 C125.69979347 155.76029527 115.62705232 162.45028387 104 167 C104.52207031 167.3403125 105.04414063 167.680625 105.58203125 168.03125 C108.0680711 169.668292 110.53590938 171.3300911 113 173 C113.94746094 173.63808594 114.89492188 174.27617187 115.87109375 174.93359375 C122.39311439 179.47334488 128.41593278 183.75669873 130 192 C130.71165234 198.8598619 130.18631876 204.38062873 126 210 C121.67770599 214.80646137 117.93134439 217.9141941 111.625 219.5 C109.02782662 220.24100469 109.02782662 220.24100469 107 222 C105.43523322 226.61500473 104.88616943 231.20180129 104.29199219 236.02148438 C102.49651251 248.18751055 94.58999319 259.52333126 86 268 C83.22899606 269.38550197 81.0665294 269.1877467 78 269 C77.01 268.34 76.02 267.68 75 267 C72.64844344 266.94598619 72.64844344 266.94598619 70.125 267.1875 C66.43612077 267.23575569 65.30744723 267.20050906 62.125 265.125 C56.97906133 257.55744313 54.85365658 249.8050895 54.9375 240.75 C54.94652344 239.48671875 54.95554687 238.2234375 54.96484375 236.921875 C54.97644531 235.95765625 54.98804688 234.9934375 55 234 C52.36 234 49.72 234 47 234 C47.04125 235.2375 47.0825 236.475 47.125 237.75 C47.09286885 247.95163915 45.6140541 257.57170106 38.875 265.5 C35.18528711 267.4250676 32.39728076 267.23142084 28.3046875 266.9453125 C25.71893651 266.80112682 25.71893651 266.80112682 23 269 C18.96101714 269.62828622 17.44805004 269.32218652 14.09375 266.91015625 C10.78324436 264.02135147 8.57505667 260.73501418 6.3125 257 C5.93544922 256.39671875 5.55839844 255.7934375 5.16992188 255.171875 C3.07329956 251.80557041 1.03181941 248.40571634 -1 245 C-1.43570313 245.39832031 -1.87140625 245.79664063 -2.3203125 246.20703125 C-11.08029197 254 -11.08029197 254 -17 254 C-17.185625 255.175625 -17.185625 255.175625 -17.375 256.375 C-18 259 -18 259 -20 261 C-21.91796875 261.45703125 -21.91796875 261.45703125 -24.1875 261.8125 C-29.15466951 262.80111141 -32.08876079 264.83772149 -36 268 C-36.50775218 262.0339119 -35.39899822 257.02545295 -32 252 C-28.21321394 249.04096235 -25.71567845 248.75207645 -21 249.125 C-16.22883597 249.2713457 -16.22883597 249.2713457 -12.0625 247.0625 C-11.381875 246.051875 -10.70125 245.04125 -10 244 C-9.53851563 243.34515625 -9.07703125 242.6903125 -8.6015625 242.015625 C-4.99190111 236.39173267 -4.16489067 231.60929384 -5 225 C-5.6422486 221.92876227 -5.6422486 221.92876227 -7.78515625 221.04296875 C-8.53667969 220.76066406 -9.28820312 220.47835937 -10.0625 220.1875 C-17.44483692 217.09585253 -23.08403573 213.04873569 -27 206 C-29.10880381 199.67358856 -29.17503385 191.75877512 -26.5625 185.625 C-20.05018439 178.95384742 -13.63651441 173.91376413 -5.40625 169.4453125 C-2.8897405 168.22654161 -2.8897405 168.22654161 -2 166 C-3.07701172 165.82984375 -3.07701172 165.82984375 -4.17578125 165.65625 C-16.05153109 162.89673966 -27.13357447 152.81507073 -34 143 C-41.41164659 130.56756056 -44.1792444 117.9614387 -44.1875 103.6875 C-44.19974609 102.58470703 -44.21199219 101.48191406 -44.22460938 100.34570312 C-44.2356203 94.19793653 -43.81274756 88.88247332 -42 83 C-42.55872803 83.01571045 -43.11745605 83.0314209 -43.69311523 83.04760742 C-46.2744699 83.11074924 -48.8556613 83.14923704 -51.4375 83.1875 C-52.31599609 83.21263672 -53.19449219 83.23777344 -54.09960938 83.26367188 C-60.2194152 83.3314188 -65.37364914 82.48052139 -71 80 C-72.57549033 78.42450967 -72.24617765 76.87613745 -72.3125 74.6875 C-72.16197307 64.1355623 -67.88858501 54.87266858 -61 47 C-50.99267672 37.52367754 -39.76728262 35.79704831 -26.5 35.9375 C-25.67757812 35.94201172 -24.85515625 35.94652344 -24.0078125 35.95117188 C-22.00517604 35.96281511 -20.00257773 35.98074444 -18 36 C-18.04640625 35.319375 -18.0928125 34.63875 -18.140625 33.9375 C-18.56224914 22.61388035 -16.91520861 10.18243502 -9.3671875 1.28515625 C-6.24167764 -1.65282302 -3.96889135 -1.22119734 0 0 Z " fill="#FDFDFD" transform="translate(157,74)"/>
                    </svg>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">CoinGlass</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">专业期货数据分析平台</div>
                    </div>
                    <div className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full font-medium">
                      优惠
                    </div>
                  </Link>
                </div>
              </div>

              {/* About Muse */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900 dark:text-white text-center">
                  关于缪斯
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  欢迎来到亲爱的缪斯！我是一名 AI 算法与开发工程师，长期专注于人工智能的研发与应用。
                  自 2021 年起，因为兴趣进入 Web3 与加密领域，探索 AI 与区块链结合带来的新可能。
                </p>
                <br />
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  在我的社群中，我会从 技术与实践者的角度，分享关于 AI、Web3 与 Crypto 的趋势、分析与思考，
                  并尽量用清晰易懂的语言，把复杂的技术与行业动向讲明白。
                </p>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                  <p className="text-blue-800 dark:text-blue-200 text-xs font-medium">
                    💡 技术在更新、市场在变革、流动性在涌动穿梭，唯有持续学习，才能立于不败之地。
                  </p>
                </div>
              </div>

              {/* Channel Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900 dark:text-white text-center">
                  文章数据
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-400">文章总数</span>
                    <span className="font-medium text-gray-900 dark:text-white">100+</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-400">更新频率</span>
                    <span className="font-medium text-gray-900 dark:text-white">不定时更新</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 dark:text-gray-400">内容领域</span>
                    <span className="font-medium text-gray-900 dark:text-white">AI · Web3 · Crypto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Section */}
              <div className="bg-gradient-to-br from-slate-900 via-emerald-900/80 to-black rounded-lg p-4 md:p-8 text-white shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">亲爱的缪斯</h1>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('亲爱的缪斯')
                      alert('公众号 亲爱的缪斯 已复制到剪贴板！')
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                    >
                      <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"></path>
                    </svg>
                    复制公众号
                  </button>
                </div>
                <p className="text-lg sm:text-xl mb-6">探索 AI × Web3 × Crypto，发现长期价值</p>

                <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">🌟 推荐文章</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium mb-2">如何构建 AI Agent 的上下文工程？</h3>
                      <p className="text-white/80 mb-4 text-sm sm:text-base">
                        总结在构建 AI 智能体过程中的 6 项核心实践，从 KV-Cache 到外部记忆系统，为开发者提供实战经验与避坑指南。
                      </p>
                      <Link
                        className="inline-flex items-center px-3 sm:px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm sm:text-base"
                        href="https://mp.weixin.qq.com/s/aqU0kxvNyHlVwKdEvMEIig"
                      >
                        阅读文章 →
                      </Link>
                    </div>
                    <div className="relative">
                      <Link href="https://mp.weixin.qq.com/s/aqU0kxvNyHlVwKdEvMEIig">
                        <Image
                          src="https://i.meee.com.tw/hbrChGh.png"
                          alt="如何构建 AI Agent 的上下文工程？"
                          width={480}
                          height={270}
                          className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer w-full h-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Videos Section */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  📖 精选文章
                </h2>
                <div className="space-y-3">
                  {videos.map((video, index) => (
                    <VideoCard key={index} {...video} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </>
  )
}
