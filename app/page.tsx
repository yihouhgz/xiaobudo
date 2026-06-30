"use client"
import { useState } from "react"
import Image from "next/image"
import logo from "./assets/images/xiaobudo.png"
import subject_icon from "./assets/images/subject_icon.jpg"
import camera_icon from "./assets/images/camera_icon.jpg"
import message_icon from "./assets/images/message_icon.jpg"
import service_icon from "./assets/images/service_icon.jpg"
import pk_icon from "./assets/images/pk_icon.jpg"
import shop_icon from "./assets/images/shop_icon.jpg"

// 快捷提问数据源
const quickQuestions = [
  {
    id: 1,
    isIcon: false,
    text: "若商品出现故障，是否影响订单履约"
  },
  {
    id: 2,
    isIcon: false,
    text: "拍出雪场大片感的装备怎么选?"
  },
  {
    id: 3,
    isIcon: false,
    text: "便携式运动相机租赁需求暴涨"
  },
  {
    id: 4,
    isIcon: true,
    text: "主题乐园出片相机推荐",
    subText: "为你推荐热门租赁商品"
  }
]

// 底部tab数据源
const bottomTabs = [
  { id: 1, text: "客服消息", active: false, icon: message_icon },
  { id: 2, text: "商品对比", active: true, icon: pk_icon },
  { id: 3, text: "猜我喜欢", active: false, icon: shop_icon },
  { id: 4, text: "订单咨询", active: false, icon: service_icon }
]

export default function AssistantChatPage() {
  const [inputValue, setInputValue] = useState("")

  const handleQuickClick = (item) => {
    setInputValue(item.text)
  }

  return (
    <div className="w-full max-w-md mx-auto h-screen flex flex-col overflow-hidden font-sans bg-gradient-to-[120deg] from-white to-[#edf6ff]">
      {/* 顶部导航栏 */}
      <header className="h-16 flex items-center px-4 bg-white border-b border-slate-100 shrink-0">
        {/* 返回箭头占位 */}
        <div className="w-4 h-4 border-l-2 border-b-2 border-slate-800 rotate-45 cursor-pointer"></div>
        <span className="ml-2 text-2xl font-medium text-slate-900">小不懂</span>
      </header>

      {/* 主体滚动区域 */}
      <main className="flex-1 overflow-y-auto px-5 py-6">
        <p className="text-center text-slate-400 text-sm mb-3">
          下拉查询历史消息
        </p>

        {/* 头像+介绍区域 */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-[#e6f2ff] mb-4">
            {/* 头像占位，自行填入图片src */}
            <Image
              src={logo}
              alt="租赁助理小不懂"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-[24px] font-semibold text-slate-900">
            Hi, 我是租赁助理小不懂
          </h2>
          <p className="mt-1 text-slate-500 text-sm">
            订单顺利吗？需要帮忙不
          </p>
        </div>

        {/* 快捷提问卡片 */}
        <div className="rounded-3xl p-5 bg-gradient-to-b from-[#e8f2ff] to-white">
          <h3 className="text-xl font-medium text-slate-800 mb-4">
            你可以这样问
          </h3>
          <div className="flex flex-col gap-3">
            {quickQuestions.map((item) => (
              <div
                key={item.id}
                onClick={() => handleQuickClick(item)}
                className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 border border-slate-100 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {item.isIcon ? (
                    <Image
                      src={camera_icon}
                      alt="camera_icon"
                      className="w-10 h-10"
                    ></Image>
                  ) : (
                    <Image
                      src={subject_icon}
                      alt="subject_icon"
                      className="w-6 h-6"
                    ></Image>
                  )}
                  <div className="flex flex-col">
                    <span className="text-slate-800 text-base">
                      {item.text}
                    </span>
                    {item.subText && (
                      <span className="text-xs text-slate-400 mt-0.5">
                        {item.subText}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-[8px] h-[8px] border-r-2 border-b-2 border-slate-300 -rotate-45"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

        {/* tab */}
      <div className="px-4 py-4 bg-gradient-to-t from-[#e8f2ff] to-[#e8f2ff]">
        <div className="flex gap-2.5">
          {bottomTabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex px-3 py-2 shrink-0 items-center bg-white rounded-lg ${
                tab.active ? "bg-[#f0f6ff] text-blue-600" : "text-slate-600"
              }`}
            >
              {/* Tab图标占位 */}
              <div className="w-[18px] h-[18px]">
                <Image src={tab.icon} alt={tab.text} />
              </div>
              <span className={`text-xs ml-1 ${tab.active ? "font-medium" : ""}`}>
                {tab.text}
              </span>
            </div>
          ))}
        </div>

        {/* 底部输入框区域 */}
        <div className="py-4 shrink-0">
          <div className="flex items-center gap-3 bg-white rounded-lg pr-4">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="有什么问题尽管问我哦~"
              className="flex-1 h-[46px] rounded-full px-6 outline-none text-slate-800 placeholder:text-slate-400"
            />
            {/* 麦克风图标占位 */}
            <div className="w-8 h-8 rounded-full bg-black"></div>
            {/* 加号图标占位 */}
            <div className="w-8 h-8 rounded-full bg-black"></div>
          </div>
          <p className="text-center text-slate-300 text-xs mt-3">
            内容由AI生成，仅供参考
          </p>
        </div>
      </div>
    </div>
  )
}
