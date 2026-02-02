"use client";

import { useState } from "react";

const faqs = [
  {
    question: "TutorBot Pro 跟傳統補習班系統有什麼不同？",
    answer:
      "最大的不同是操作方式。傳統系統需要登入網頁、找功能、點擊多步才能完成操作。TutorBot Pro 讓你在 Telegram 用自然語言對話就能完成，例如說「林小明明天事假」就自動完成請假、通知老師、更新報表。此外，我們還有 AI 功能協助處理重複性工作，如考卷自動輸入、智慧催繳等。",
  },
  {
    question: "需要安裝什麼軟體嗎？",
    answer:
      "管理端只需要 Telegram（手機或電腦都可以），家長端用 LINE 就可以收通知。Web 管理介面可以用任何瀏覽器開啟，不需要安裝額外軟體。",
  },
  {
    question: "可以從現有系統匯入資料嗎？",
    answer:
      "可以！我們支援從 Excel、CSV 匯入學生資料，也可以協助您從其他補習班系統（如 BST4Kids、CARE 等）遷移資料。遷移過程我們會全程協助。",
  },
  {
    question: "資料安全嗎？",
    answer:
      "非常重視資料安全。所有資料傳輸使用 TLS 加密，資料庫有多重備份機制，伺服器部署在台灣。我們也定期進行安全檢測，確保學生和家長資料的安全。",
  },
  {
    question: "有試用期嗎？可以隨時取消嗎？",
    answer:
      "提供 14 天免費試用，試用期間可使用完整功能。正式訂閱後採月繳制，沒有綁約，可以隨時取消。取消後資料保留 30 天，方便您有需要時重新啟用。",
  },
  {
    question: "如果遇到問題怎麼辦？",
    answer:
      "我們提供多種支援方式：Telegram 客服群、Email 支援、線上說明文件。Pro 方案以上還有優先客服和專人協助。一般問題我們會在 24 小時內回覆。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
