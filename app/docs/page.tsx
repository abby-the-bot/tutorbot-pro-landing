import Link from "next/link";

export const metadata = {
  title: "使用文件 - TutorBot Pro",
  description: "TutorBot Pro 完整使用教學與文件：快速開始、功能指南、Telegram 指令。",
};

export default function DocsPage() {
  const sections = [
    {
      title: "🚀 快速開始",
      items: [
        { name: "5 分鐘上手指南", href: "#quickstart" },
        { name: "連接 Telegram Bot", href: "#telegram-setup" },
        { name: "匯入學生資料", href: "#import-data" },
        { name: "設定 LINE 家長通知", href: "#line-setup" },
      ],
    },
    {
      title: "💬 Telegram 指令",
      items: [
        { name: "學生管理指令", href: "#cmd-student" },
        { name: "繳費查詢指令", href: "#cmd-payment" },
        { name: "出勤管理指令", href: "#cmd-attendance" },
        { name: "報表查詢指令", href: "#cmd-report" },
      ],
    },
    {
      title: "📚 功能指南",
      items: [
        { name: "學生管理", href: "#guide-student" },
        { name: "課程管理", href: "#guide-course" },
        { name: "繳費管理", href: "#guide-payment" },
        { name: "出勤管理", href: "#guide-attendance" },
        { name: "人事管理", href: "#guide-hr" },
        { name: "報表分析", href: "#guide-report" },
      ],
    },
    {
      title: "🤖 AI 功能",
      items: [
        { name: "考卷 OCR 辨識", href: "#ai-ocr" },
        { name: "智慧催繳", href: "#ai-reminder" },
        { name: "流失預測", href: "#ai-prediction" },
        { name: "語音輸入", href: "#ai-voice" },
      ],
    },
    {
      title: "⚙️ 系統設定",
      items: [
        { name: "帳號與權限", href: "#settings-account" },
        { name: "分校設定", href: "#settings-branch" },
        { name: "通知設定", href: "#settings-notification" },
        { name: "資料匯出", href: "#settings-export" },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            使用文件
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            從快速上手到進階功能，一切你需要知道的
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="搜尋文件..."
              className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "📲", title: "連接 Telegram", time: "2 分鐘" },
              { icon: "📊", title: "匯入資料", time: "5 分鐘" },
              { icon: "💬", title: "首次對話", time: "1 分鐘" },
              { icon: "✅", title: "完成設定", time: "總共 10 分鐘" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{step.icon}</div>
                <div className="font-medium text-gray-900">{step.title}</div>
                <div className="text-sm text-gray-500">{step.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="sticky top-24 space-y-8">
                {sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-gray-900 mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j}>
                          <a
                            href={item.href}
                            className="text-gray-600 hover:text-indigo-600 transition text-sm"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 prose prose-lg max-w-none">
              <div id="quickstart" className="scroll-mt-24">
                <h2>🚀 5 分鐘上手指南</h2>
                <p>
                  歡迎使用 TutorBot Pro！只需要 5 分鐘，您就能開始用 Telegram 管理補習班。
                </p>

                <div className="bg-indigo-50 rounded-2xl p-6 my-8 not-prose">
                  <h3 className="font-bold text-gray-900 mb-4">快速開始步驟</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                      <div>
                        <div className="font-medium text-gray-900">連接 Telegram</div>
                        <div className="text-gray-600 text-sm">在 Telegram 搜尋 @TutorBotPro，點擊 Start</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                      <div>
                        <div className="font-medium text-gray-900">驗證帳號</div>
                        <div className="text-gray-600 text-sm">輸入註冊時的 Email，完成驗證</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                      <div>
                        <div className="font-medium text-gray-900">匯入學生</div>
                        <div className="text-gray-600 text-sm">上傳 Excel 學生名單，或手動新增</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                      <div>
                        <div className="font-medium text-gray-900">開始使用</div>
                        <div className="text-gray-600 text-sm">試試說「查林小明」、「今天誰沒來」</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div id="cmd-student" className="scroll-mt-24 mt-16">
                <h2>💬 學生管理指令</h2>
                <p>
                  在 Telegram 中，您可以用自然語言管理學生。以下是常用指令：
                </p>

                <div className="bg-gray-900 rounded-2xl p-6 my-8 not-prose">
                  <div className="space-y-4 text-sm font-mono">
                    {[
                      { cmd: "查林小明", desc: "查詢學生資料" },
                      { cmd: "林小明的電話", desc: "查詢聯絡資訊" },
                      { cmd: "新增學生 王大明 0912345678", desc: "快速新增" },
                      { cmd: "流失學生名單", desc: "查看流失學生" },
                      { cmd: "今天誰生日", desc: "生日提醒" },
                      { cmd: "搜尋 三年級", desc: "條件搜尋" },
                    ].map((item, i) => (
                      <div key={i} className="flex">
                        <span className="text-green-400 w-64">{item.cmd}</span>
                        <span className="text-gray-400"># {item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="cmd-payment" className="scroll-mt-24 mt-16">
                <h2>💰 繳費查詢指令</h2>
                
                <div className="bg-gray-900 rounded-2xl p-6 my-8 not-prose">
                  <div className="space-y-4 text-sm font-mono">
                    {[
                      { cmd: "查陳禹霏繳費", desc: "查詢個人繳費狀況" },
                      { cmd: "欠費清單", desc: "查看所有欠費" },
                      { cmd: "這個月欠費", desc: "本月欠費統計" },
                      { cmd: "催繳王大明", desc: "發送催繳通知" },
                      { cmd: "今日收款", desc: "今日收款統計" },
                      { cmd: "本月營收", desc: "月營收報表" },
                    ].map((item, i) => (
                      <div key={i} className="flex">
                        <span className="text-green-400 w-64">{item.cmd}</span>
                        <span className="text-gray-400"># {item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="cmd-attendance" className="scroll-mt-24 mt-16">
                <h2>✅ 出勤管理指令</h2>
                
                <div className="bg-gray-900 rounded-2xl p-6 my-8 not-prose">
                  <div className="space-y-4 text-sm font-mono">
                    {[
                      { cmd: "林小明明天事假", desc: "請假登記" },
                      { cmd: "陳美玲這週病假", desc: "多日請假" },
                      { cmd: "今天誰沒來", desc: "未到名單" },
                      { cmd: "王大明遲到10分鐘", desc: "遲到登記" },
                      { cmd: "這週出勤報表", desc: "出勤統計" },
                      { cmd: "A班今天出勤", desc: "班級出勤" },
                    ].map((item, i) => (
                      <div key={i} className="flex">
                        <span className="text-green-400 w-64">{item.cmd}</span>
                        <span className="text-gray-400"># {item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-indigo-50 rounded-2xl p-8 not-prose">
                <h3 className="font-bold text-gray-900 mb-4">需要更多幫助？</h3>
                <p className="text-gray-600 mb-6">
                  找不到需要的資訊？我們很樂意協助您。
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
                  >
                    聯絡客服
                  </Link>
                  <Link
                    href="/faq"
                    className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium border border-indigo-200 hover:bg-indigo-50 transition"
                  >
                    常見問題
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
