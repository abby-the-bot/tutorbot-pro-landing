import Link from "next/link";

export const metadata = {
  title: "發展藍圖 - TutorBot Pro",
  description: "TutorBot Pro 產品發展計畫：從 MVP 到完整系統的開發進程。",
};

export default function RoadmapPage() {
  const phases = [
    {
      phase: "Phase 0",
      title: "架構設計",
      status: "completed",
      time: "2026 Q1",
      items: [
        { name: "市場研究與競品分析", done: true },
        { name: "產品定位與規劃", done: true },
        { name: "技術架構設計", done: true },
        { name: "資料庫設計", done: true },
        { name: "UI/UX 設計", done: true },
      ],
    },
    {
      phase: "Phase 1",
      title: "MVP 開發",
      status: "in-progress",
      time: "2026 Q1",
      items: [
        { name: "學生管理 CRUD", done: false },
        { name: "繳費管理", done: false },
        { name: "Telegram Bot 整合", done: false },
        { name: "自然語言指令解析", done: false },
        { name: "基礎 Web 介面", done: false },
      ],
    },
    {
      phase: "Phase 2",
      title: "完整功能",
      status: "upcoming",
      time: "2026 Q2",
      items: [
        { name: "課程管理", done: false },
        { name: "出勤點名", done: false },
        { name: "人事薪資", done: false },
        { name: "LINE 家長整合", done: false },
        { name: "報表系統", done: false },
      ],
    },
    {
      phase: "Phase 3",
      title: "AI 進階",
      status: "upcoming",
      time: "2026 Q2",
      items: [
        { name: "考卷 OCR 辨識", done: false },
        { name: "智慧催繳", done: false },
        { name: "流失預測", done: false },
        { name: "語音輸入", done: false },
        { name: "經營建議", done: false },
      ],
    },
    {
      phase: "Phase 4",
      title: "產品化",
      status: "upcoming",
      time: "2026 Q3",
      items: [
        { name: "多租戶架構", done: false },
        { name: "訂閱計費系統", done: false },
        { name: "管理後台", done: false },
        { name: "文件與教學", done: false },
        { name: "正式上線", done: false },
      ],
    },
  ];

  const statusColors: Record<string, string> = {
    completed: "bg-green-100 text-green-700",
    "in-progress": "bg-yellow-100 text-yellow-700",
    upcoming: "bg-gray-100 text-gray-600",
  };

  const statusLabels: Record<string, string> = {
    completed: "已完成",
    "in-progress": "進行中",
    upcoming: "規劃中",
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            發展藍圖
          </h1>
          <p className="text-xl text-gray-600">
            透明公開的產品發展計畫<br />
            讓您知道我們正在打造什麼
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className="relative">
                {i < phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                <div className="flex gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    phase.status === "completed" ? "bg-green-500" :
                    phase.status === "in-progress" ? "bg-yellow-500" : "bg-gray-300"
                  }`}>
                    {phase.status === "completed" ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : phase.status === "in-progress" ? (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    ) : (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-bold text-indigo-600">{phase.phase}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[phase.status]}`}>
                        {statusLabels[phase.status]}
                      </span>
                      <span className="text-sm text-gray-500">{phase.time}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <ul className="space-y-3">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-3">
                            {item.done ? (
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                            )}
                            <span className={item.done ? "text-gray-500 line-through" : "text-gray-700"}>
                              {item.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            未來願景
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🌏", title: "多語言支援", desc: "支援英文、簡體中文等語言，服務更廣泛的市場" },
              { icon: "📱", title: "Mobile App", desc: "原生 iOS/Android App，離線操作支援" },
              { icon: "🔗", title: "第三方整合", desc: "與會計系統、金流系統、CRM 整合" },
              { icon: "🧠", title: "AI 教學助理", desc: "AI 協助批改作業、生成題目、學習建議" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            想要提供建議？
          </h2>
          <p className="text-gray-600 mb-8">
            我們非常重視用戶反饋，您的建議會影響產品方向
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition inline-block"
          >
            提供反饋
          </Link>
        </div>
      </section>
    </div>
  );
}
