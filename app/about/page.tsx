import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "關於我們 - TutorBot Pro",
  description: "TutorBot Pro 由補習班從業者與 AI 專家共同打造，深刻理解補習班營運的痛點。",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            讓補習班管理<br />
            <span className="gradient-text">簡單又智慧</span>
          </h1>
          <p className="text-xl text-gray-600">
            我們是一群熱愛教育、擅長科技的團隊，<br />
            致力於用 AI 解放補習班的行政負擔。
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我們的故事</h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                TutorBot Pro 的誕生，源於一個簡單的觀察：
              </p>
              <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 mb-4">
                「為什麼管理一間補習班，要花這麼多時間在系統操作上？」
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-4">
                傳統的補習班管理系統，功能很完整，但操作很繁瑣。登入系統、找功能、填表單、按確認...
                每完成一個簡單的操作，都要點擊好幾步。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                我們問自己：在 AI 時代，難道不能用更簡單的方式嗎？
              </p>
              <p className="text-gray-700 leading-relaxed">
                於是，TutorBot Pro 誕生了。一個讓你用 Telegram 對話就能管理補習班的 AI 助理。
                說「林小明明天事假」，系統就自動完成請假、通知老師、更新報表。
                就這麼簡單。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            我們的理念
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "對話優先",
                desc: "操作系統應該像跟人對話一樣自然。說人話，系統就懂。不用學習複雜的介面。",
              },
              {
                icon: "🤖",
                title: "AI 賦能",
                desc: "讓 AI 處理重複性工作，人專注在更有價值的事。教學、關懷學生、經營規劃。",
              },
              {
                icon: "💰",
                title: "價值定價",
                desc: "好的工具不應該昂貴。我們用 AI 降低開發成本，讓更多補習班負擔得起。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            核心團隊
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ron</h3>
              <p className="text-indigo-600 mb-4">創辦人 / 產品</p>
              <p className="text-gray-600 text-sm">
                具備保險、媒體、餐飲跨領域經驗。深耕補習班產業，
                深刻理解行政管理的痛點。致力於用科技改善教育產業效率。
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl">
                🤖
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Abby</h3>
              <p className="text-indigo-600 mb-4">AI 技術長</p>
              <p className="text-gray-600 text-sm">
                基於 Claude Opus 4.5 的 AI 助理，具備深度思考、
                多角度分析、快速執行能力。負責產品設計、技術架構、開發實作。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            發展歷程
          </h2>

          <div className="space-y-8">
            {[
              { date: "2026 Q1", title: "市場研究", desc: "深度研究台灣補習班管理系統市場，分析競品優缺點" },
              { date: "2026 Q1", title: "產品設計", desc: "完成產品定位、功能規劃、技術架構設計" },
              { date: "2026 Q2", title: "MVP 開發", desc: "開發核心功能：學生管理、繳費管理、Telegram 操作" },
              { date: "2026 Q2", title: "Beta 測試", desc: "邀請種子客戶試用，收集反饋持續優化" },
              { date: "2026 Q3", title: "正式上線", desc: "開放公開註冊，啟動市場推廣" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-24 flex-shrink-0">
                  <div className="text-indigo-600 font-bold text-sm">{item.date}</div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
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
