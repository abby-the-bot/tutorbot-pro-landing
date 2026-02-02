"use client";

import { useState, useEffect } from "react";

const messages = [
  { type: "user", text: "林小明明天事假" },
  { type: "bot", text: "✅ 已為林小明請假\n📅 日期：2026/02/04\n📝 假別：事假\n\n是否通知家長？", buttons: ["是", "否"] },
  { type: "user", text: "是" },
  { type: "bot", text: "📱 已發送 LINE 通知給林小明家長", buttons: [] },
  { type: "user", text: "查陳禹霏的繳費" },
  { type: "bot", text: "📊 陳禹霏繳費狀況\n\n✅ 已繳：NT$12,000（2026/01/15）\n⚠️ 欠費：NT$8,000（2月學費）\n📅 到期：2026/02/28", buttons: ["催繳", "查明細", "延期"] },
];

export default function TelegramDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Reset after showing all messages
      const timer = setTimeout(() => {
        setVisibleMessages(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto float-animation">
      {/* Phone header */}
      <div className="bg-indigo-600 rounded-t-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl">
          🤖
        </div>
        <div>
          <div className="text-white font-semibold">TutorBot Pro</div>
          <div className="text-white/60 text-sm">在線</div>
        </div>
      </div>

      {/* Chat area */}
      <div className="bg-[#0e1621] min-h-[400px] p-4 space-y-4">
        {messages.slice(0, visibleMessages).map((msg, i) => (
          <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                msg.type === "user"
                  ? "bg-indigo-600 text-white rounded-br-sm"
                  : "bg-gray-700 text-white rounded-bl-sm"
              }`}
            >
              {msg.text}
              {msg.buttons && msg.buttons.length > 0 && (
                <div className="flex gap-2 mt-3">
                  {msg.buttons.map((btn, j) => (
                    <button
                      key={j}
                      className="px-3 py-1 bg-indigo-500 rounded-lg text-xs hover:bg-indigo-400 transition"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {visibleMessages < messages.length && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white p-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="bg-gray-700 rounded-b-2xl p-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="輸入訊息..."
          className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-full text-sm focus:outline-none"
          readOnly
        />
        <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
