import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "功能介紹 - TutorBot Pro",
  description: "完整的補習班管理功能：學生管理、課程排班、繳費催收、親師溝通、人事薪資、AI 自動化",
};

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: "💬",
      title: "Telegram 對話式操作",
      description:
        "告別繁瑣的網頁操作。在 Telegram 用自然語言對話，一句話完成學生請假、查詢繳費、發送通知。說「林小明明天事假」就自動完成所有流程。",
      highlights: ["自然語言理解", "一句話完成操作", "自動記錄、通知", "支援語音輸入"],
    },
    {
      icon: "🤖",
      title: "AI 自動化",
      description:
        "讓 AI 處理重複性工作。考卷拍照自動辨識成績、智慧分析催繳時機、預測學生流失風險、自動生成報表。解放 80% 的行政時間。",
      highlights: ["考卷 OCR 辨識", "智慧催繳", "流失風險預測", "自動報表"],
    },
    {
      icon: "📱",
      title: "LINE 家長整合",
      description:
        "家長不用再安裝獨立 APP。透過 LINE 官方帳號即可接收通知、查看成績、確認繳費。老師在 Telegram 發訊息，家長在 LINE 收到。",
      highlights: ["LINE 即時通知", "成績查詢", "繳費提醒", "聯絡簿同步"],
    },
  ];

  const allFeatures = [
    {
      category: "學生管理",
      icon: "👨‍🎓",
      items: [
        { name: "學生資料建檔", desc: "完整學生檔案：基本資料、聯絡人、就讀學校、課程" },
        { name: "狀態追蹤", desc: "在班、流失、畢業、潛在、試聽、追蹤多種狀態" },
        { name: "智慧搜尋", desc: "姓名、電話、課程、狀態多條件快速搜尋" },
        { name: "批次匯入", desc: "Excel/CSV 批次匯入，快速建立資料" },
      ],
    },
    {
      category: "課程管理",
      icon: "📚",
      items: [
        { name: "多層課程架構", desc: "大類 → 中類 → 小類 → 班級四層結構" },
        { name: "課表編排", desc: "視覺化課表，拖拉調整，衝堂提醒" },
        { name: "教師排班", desc: "教師可用時段、課程分配、工時統計" },
        { name: "課表總覽", desc: "各分校、各教室課表一覽" },
      ],
    },
    {
      category: "出勤管理",
      icon: "✅",
      items: [
        { name: "多元點名", desc: "QR Code 掃描、人臉辨識、手動點名" },
        { name: "即時請假", desc: "Telegram 一句話請假，自動通知相關人員" },
        { name: "出勤報表", desc: "每日、每週、每月出勤統計" },
        { name: "遲到/早退", desc: "遲到時間記錄、原因備註" },
      ],
    },
    {
      category: "繳費管理",
      icon: "💰",
      items: [
        { name: "報名繳費", desc: "單科/多科/套裝報名，自動計算金額" },
        { name: "繳費查詢", desc: "快速查詢學生繳費狀況" },
        { name: "智慧催繳", desc: "AI 分析最佳時機，個人化訊息催繳" },
        { name: "欠費報表", desc: "欠費清單、呆帳統計、收款預測" },
      ],
    },
    {
      category: "人事管理",
      icon: "👨‍🏫",
      items: [
        { name: "員工資料", desc: "基本資料、職務、薪資設定" },
        { name: "排班管理", desc: "可用時段、課程分配、加班管理" },
        { name: "請假管理", desc: "請假申請、審核、休假餘額" },
        { name: "薪資計算", desc: "基本薪、時薪、課時費自動計算" },
      ],
    },
    {
      category: "親師溝通",
      icon: "📱",
      items: [
        { name: "聯絡簿", desc: "每日學習狀況記錄，自動推送 LINE" },
        { name: "公告發送", desc: "全校/班級/個人公告，多通道發送" },
        { name: "成績通知", desc: "考試成績自動通知家長" },
        { name: "即時通訊", desc: "家長 LINE 回覆，老師 Telegram 收到" },
      ],
    },
    {
      category: "報表分析",
      icon: "📊",
      items: [
        { name: "經營儀表板", desc: "學生數、營收、出勤率即時監控" },
        { name: "財務報表", desc: "收入、支出、應收帳款統計" },
        { name: "續班預測", desc: "預測到期學生、續班率分析" },
        { name: "流失分析", desc: "流失原因統計、風險學生清單" },
      ],
    },
    {
      category: "系統管理",
      icon: "⚙️",
      items: [
        { name: "權限管理", desc: "角色設定、功能權限、資料權限" },
        { name: "多分校支援", desc: "多分校獨立管理、統一報表" },
        { name: "操作日誌", desc: "完整操作記錄，可追溯查詢" },
        { name: "資料備份", desc: "每日自動備份、異地備援" },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            完整功能，<span className="gradient-text">簡單操作</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            涵蓋補習班日常營運所需的所有功能，<br />
            但用 Telegram 對話就能輕鬆操作
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              完整功能列表
            </h2>
            <p className="text-xl text-gray-600">
              點擊展開查看詳細功能
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allFeatures.map((category, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
              <span>🤖</span>
              <span className="font-medium">AI 功能亮點</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              讓 AI 成為你的得力助手
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📸",
                title: "考卷 OCR",
                desc: "拍照上傳考卷，AI 自動辨識學生姓名、題目分數，一鍵建立成績紀錄",
                saving: "節省 90% 輸入時間",
              },
              {
                icon: "💬",
                title: "智慧催繳",
                desc: "分析家長過往行為，選擇最佳時機、最有效話術發送催繳訊息",
                saving: "提高 30% 回收率",
              },
              {
                icon: "⚠️",
                title: "流失預測",
                desc: "綜合出勤、繳費、成績等數據，預測高流失風險學生",
                saving: "提前 2 週預警",
              },
              {
                icon: "🎙️",
                title: "語音輸入",
                desc: "語音轉文字操作系統，開車、忙碌時也能輕鬆管理",
                saving: "解放雙手",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="text-indigo-600 text-sm font-medium">{item.saving}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
