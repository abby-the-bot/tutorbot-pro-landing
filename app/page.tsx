import Link from "next/link";
import TelegramDemo from "@/components/TelegramDemo";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-300">✨</span>
                <span className="text-sm">全新 AI 補習班管理系統</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                用 Telegram<br />
                <span className="text-yellow-300">一句話</span><br />
                管理整間補習班
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                不用開電腦、不用學操作。AI 幫你處理學生管理、繳費催收、親師溝通。
                讓你專注教學，把行政交給 TutorBot。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-gray-100 transition text-center pulse-glow"
                >
                  🚀 免費試用 14 天
                </Link>
                <Link
                  href="/features"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition text-center"
                >
                  了解更多
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  免費試用
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  無需綁約
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  5 分鐘上手
                </span>
              </div>
            </div>

            {/* Right: Telegram Demo */}
            <div className="hidden lg:block">
              <TelegramDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              補習班管理的 <span className="text-red-500">痛點</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              傳統補習班系統讓你花太多時間在行政，而不是教學
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "😫", title: "操作繁瑣", desc: "登入系統、找功能、點 5-10 步才能完成一個操作" },
              { emoji: "📚", title: "學習曲線陡", desc: "新員工要花好幾天學系統，離職又要重新教" },
              { emoji: "📱", title: "家長不愛裝 APP", desc: "獨立 APP 安裝率低，訊息常常漏接" },
              { emoji: "💸", title: "催繳效率低", desc: "手動篩選欠費、手動發訊息，費時費力" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TutorBot Pro 的 <span className="gradient-text">解決方案</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              用對話取代操作，用 AI 取代重複工作
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="💬"
              title="Telegram 對話式操作"
              description="打開 Telegram，說一句話就搞定。「林小明明天事假」→ 完成請假、通知老師、更新報表。"
              color="indigo"
            />
            <FeatureCard
              icon="🤖"
              title="AI 自動化"
              description="考卷照相自動輸入成績、智慧催繳、流失預測。AI 處理 80% 的行政瑣事。"
              color="purple"
            />
            <FeatureCard
              icon="📱"
              title="LINE 整合"
              description="家長用 LINE 就能收通知、查成績、繳費。不用再裝額外 APP。"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              怎麼運作？
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              三步驟，從此告別繁瑣的系統操作
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "連接 Telegram",
                desc: "掃碼加入 TutorBot，2 分鐘完成設定",
                icon: "📲"
              },
              {
                step: "02",
                title: "匯入資料",
                desc: "上傳現有學生名單，系統自動建檔",
                icon: "📊"
              },
              {
                step: "03",
                title: "開始對話",
                desc: "用自然語言操作，系統自動執行",
                icon: "🗣️"
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-indigo-50 rounded-2xl p-8 text-center card-hover">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="text-indigo-600 font-bold text-sm mb-2">STEP {item.step}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-indigo-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              完整功能
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              涵蓋補習班日常營運所需的所有功能
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👨‍🎓", title: "學生管理", desc: "資料建檔、狀態追蹤、搜尋查詢" },
              { icon: "📚", title: "課程管理", desc: "課程設定、班級管理、課表編排" },
              { icon: "✅", title: "出勤管理", desc: "QR 點名、請假處理、出勤報表" },
              { icon: "💰", title: "繳費管理", desc: "報名繳費、催繳、欠費報表" },
              { icon: "👨‍🏫", title: "人事管理", desc: "員工資料、排班、薪資計算" },
              { icon: "📱", title: "親師溝通", desc: "聯絡簿、公告、即時通知" },
              { icon: "📊", title: "報表分析", desc: "經營儀表板、財務報表" },
              { icon: "🔐", title: "權限管理", desc: "角色設定、選單控制" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition"
            >
              查看完整功能列表
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
                <span>🤖</span>
                <span className="text-sm font-medium">AI 功能</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                讓 AI 處理<br />重複性工作
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "📸 考卷自動輸入",
                    desc: "拍照上傳考卷，AI 自動辨識姓名、分數，建立成績紀錄"
                  },
                  {
                    title: "💬 智慧催繳",
                    desc: "AI 分析最佳催繳時機，個人化訊息提高回收率"
                  },
                  {
                    title: "⚠️ 流失預測",
                    desc: "預測高風險學生，提前介入降低流失率"
                  },
                  {
                    title: "🎙️ 語音輸入",
                    desc: "語音轉文字，開車、忙碌時也能操作系統"
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl">{item.title.split(' ')[0]}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title.split(' ').slice(1).join(' ')}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">📸</div>
                  <h3 className="text-xl font-bold">考卷辨識 Demo</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm opacity-80">老師上傳考卷照片...</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm">✅ 辨識完成</p>
                    <p className="text-sm mt-2">
                      學生：林小明<br />
                      科目：數學<br />
                      分數：95 分
                    </p>
                  </div>
                  <div className="bg-green-500/30 rounded-lg p-4 text-center">
                    <p className="text-sm">已自動建立成績紀錄</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              傳統系統 vs TutorBot Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              不只是功能升級，是操作方式的革命
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              簡單透明的價格
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              比傳統系統便宜 50% 以上，功能卻更強大
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price="500"
              period="月"
              description="適合小型補習班"
              features={[
                "50 學生以內",
                "1 分校",
                "基礎功能",
                "Telegram 操作",
                "Email 支援",
              ]}
              cta="開始試用"
              popular={false}
            />
            <PricingCard
              name="Pro"
              price="1,500"
              period="月"
              description="適合中型補習班"
              features={[
                "200 學生以內",
                "3 分校",
                "全部功能",
                "AI 進階功能",
                "LINE 整合",
                "優先支援",
              ]}
              cta="開始試用"
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="3,000"
              period="月起"
              description="適合大型/連鎖補習班"
              features={[
                "無限學生",
                "無限分校",
                "API 存取",
                "專屬客服",
                "客製化開發",
                "SLA 保證",
              ]}
              cta="聯絡我們"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常見問題
            </h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
