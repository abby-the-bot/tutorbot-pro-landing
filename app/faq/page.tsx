import FAQSection from "@/components/FAQSection";
import Link from "next/link";

export const metadata = {
  title: "常見問題 - TutorBot Pro",
  description: "關於 TutorBot Pro 的常見問題解答：功能、價格、試用、資料安全等。",
};

export default function FAQPage() {
  const categories = [
    {
      name: "基本問題",
      faqs: [
        {
          q: "TutorBot Pro 是什麼？",
          a: "TutorBot Pro 是新一代 AI-Native 補習班管理系統。最大特色是可以用 Telegram 對話操作，例如說「林小明明天事假」就自動完成請假流程。同時具備 AI 功能如考卷自動辨識、智慧催繳等。",
        },
        {
          q: "跟傳統補習班系統有什麼不同？",
          a: "主要差異在操作方式。傳統系統需要登入網頁、找功能、多步操作。TutorBot Pro 讓你在 Telegram 用自然語言就能完成，大幅減少操作時間。另外我們有 AI 功能協助處理重複工作。",
        },
        {
          q: "需要安裝什麼軟體嗎？",
          a: "管理端只需要 Telegram（手機或電腦都可以），家長端用 LINE 就能收通知。Web 管理介面可以用任何瀏覽器開啟，不需安裝。",
        },
      ],
    },
    {
      name: "價格與方案",
      faqs: [
        {
          q: "價格怎麼算？",
          a: "我們提供三種方案：Starter NT$500/月（50學生）、Pro NT$1,500/月（200學生）、Enterprise NT$3,000/月起（無限學生）。所有方案都可以先免費試用 14 天。",
        },
        {
          q: "有試用期嗎？",
          a: "有！提供 14 天免費試用，可使用完整功能，不需要信用卡。試用期間我們會協助您完成設定和資料匯入。",
        },
        {
          q: "可以隨時取消嗎？",
          a: "是的，採月繳制，沒有綁約，可以隨時取消。取消後資料會保留 30 天，方便您需要時重新啟用。",
        },
        {
          q: "學生超過上限怎麼辦？",
          a: "可以隨時升級方案。系統會在接近上限時提醒您，升級後立即生效。",
        },
      ],
    },
    {
      name: "功能問題",
      faqs: [
        {
          q: "可以用 LINE 操作嗎？",
          a: "目前管理端以 Telegram 為主，因為 Telegram Bot API 功能較完整。家長端則是用 LINE 接收通知和查詢，不需要安裝額外 APP。",
        },
        {
          q: "AI 考卷辨識準確嗎？",
          a: "我們使用先進的 Vision AI 模型，對於印刷體的辨識準確率超過 95%。手寫字的辨識也有 85% 以上準確率。系統會讓您確認後再建檔，避免錯誤。",
        },
        {
          q: "可以管理多間分校嗎？",
          a: "可以！Pro 方案支援 3 間分校，Enterprise 方案支援無限分校。每間分校可以獨立管理，也可以看統一報表。",
        },
        {
          q: "有家長 APP 嗎？",
          a: "我們刻意不做獨立 APP，因為家長安裝率通常很低。TutorBot Pro 直接透過 LINE 官方帳號與家長溝通，家長不用安裝任何東西就能收通知、查成績、確認繳費。",
        },
      ],
    },
    {
      name: "資料與安全",
      faqs: [
        {
          q: "資料安全嗎？",
          a: "非常重視資料安全。所有傳輸使用 TLS 加密，資料庫有多重備份。伺服器部署在台灣，符合本地法規。定期進行安全檢測。",
        },
        {
          q: "可以匯入現有資料嗎？",
          a: "可以！支援從 Excel、CSV 匯入學生資料。如果您使用其他補習班系統（BST4Kids、CARE 等），我們也可以協助資料遷移。",
        },
        {
          q: "資料可以匯出嗎？",
          a: "可以。您隨時可以匯出所有資料（學生、繳費、出勤等）為 Excel 或 CSV 格式。這是您的資料，我們不會限制。",
        },
        {
          q: "如果取消訂閱，資料會怎樣？",
          a: "取消後資料保留 30 天，期間您可以匯出資料或重新啟用。30 天後資料會完全刪除。",
        },
      ],
    },
    {
      name: "支援服務",
      faqs: [
        {
          q: "遇到問題怎麼辦？",
          a: "可以透過 Telegram 客服群、Email 聯繫我們。Pro 方案以上有優先客服。一般問題會在 24 小時內回覆。",
        },
        {
          q: "有教學文件嗎？",
          a: "有完整的線上說明文件和影片教學。不過 TutorBot Pro 設計得很直覺，大多數人 5 分鐘就能上手，不太需要看文件。",
        },
        {
          q: "可以客製化功能嗎？",
          a: "Enterprise 方案包含客製化開發服務。如果您有特殊需求，歡迎聯絡我們討論。",
        },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            常見問題
          </h1>
          <p className="text-xl text-gray-600">
            找不到答案？<Link href="/contact" className="text-indigo-600 hover:underline">聯絡我們</Link>
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, i) => (
            <div key={i} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, j) => (
                  <div key={j} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            還有其他問題？
          </h2>
          <p className="text-gray-600 mb-8">
            我們很樂意為您解答
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition"
            >
              聯絡我們
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold border-2 border-indigo-600 hover:bg-indigo-50 transition"
            >
              免費試用
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
