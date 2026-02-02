import PricingCard from "@/components/PricingCard";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "方案價格 - TutorBot Pro",
  description: "簡單透明的價格，NT$500/月起。比傳統系統便宜 50%，功能更強大。",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            簡單透明的 <span className="gradient-text">價格</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            比傳統系統便宜 50% 以上，功能卻更強大<br />
            14 天免費試用，無需信用卡
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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
                "Web 管理介面",
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
                "LINE 家長整合",
                "考卷 OCR 辨識",
                "智慧催繳",
                "優先客服支援",
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
                "全部功能",
                "API 存取",
                "專屬客服經理",
                "客製化開發",
                "SLA 保證 99.9%",
                "專屬培訓",
              ]}
              cta="聯絡我們"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            方案功能比較
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-4 text-left text-gray-500 font-medium">功能</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Starter</th>
                  <th className="px-6 py-4 text-center text-indigo-600 font-medium">Pro</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "學生數量", starter: "50", pro: "200", enterprise: "無限" },
                  { feature: "分校數量", starter: "1", pro: "3", enterprise: "無限" },
                  { feature: "Telegram 操作", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "Web 管理介面", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "學生管理", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "課程管理", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "繳費管理", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "出勤管理", starter: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "LINE 家長整合", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "考卷 OCR 辨識", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "智慧催繳", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "流失預測", starter: "—", pro: "✓", enterprise: "✓" },
                  { feature: "API 存取", starter: "—", pro: "—", enterprise: "✓" },
                  { feature: "客製化開發", starter: "—", pro: "—", enterprise: "✓" },
                  { feature: "SLA 保證", starter: "—", pro: "—", enterprise: "99.9%" },
                  { feature: "客服支援", starter: "Email", pro: "優先", enterprise: "專屬經理" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3 text-gray-900">{row.feature}</td>
                    <td className="px-6 py-3 text-center text-gray-500">{row.starter}</td>
                    <td className="px-6 py-3 text-center text-indigo-600 font-medium">{row.pro}</td>
                    <td className="px-6 py-3 text-center text-gray-500">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* vs Competitors */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            與其他系統比較
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-4 text-left text-gray-500 font-medium">系統</th>
                  <th className="pb-4 text-center text-gray-500 font-medium">100 學生月費</th>
                  <th className="pb-4 text-center text-gray-500 font-medium">Telegram 操作</th>
                  <th className="pb-4 text-center text-gray-500 font-medium">AI 功能</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-indigo-50">
                  <td className="py-4 font-bold text-indigo-600">TutorBot Pro</td>
                  <td className="py-4 text-center font-bold text-indigo-600">NT$500</td>
                  <td className="py-4 text-center text-green-600">✓</td>
                  <td className="py-4 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 text-gray-700">SchoolTracs</td>
                  <td className="py-4 text-center text-gray-500">NT$1,700-5,600</td>
                  <td className="py-4 text-center text-red-500">✗</td>
                  <td className="py-4 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 text-gray-700">CARE 教育管理雲</td>
                  <td className="py-4 text-center text-gray-500">NT$2,000+</td>
                  <td className="py-4 text-center text-red-500">✗</td>
                  <td className="py-4 text-center text-yellow-500">部分</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-700">BST4Kids</td>
                  <td className="py-4 text-center text-gray-500">未公開</td>
                  <td className="py-4 text-center text-red-500">✗</td>
                  <td className="py-4 text-center text-red-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            價格常見問題
          </h2>
          <FAQSection />
        </div>
      </section>
    </div>
  );
}
