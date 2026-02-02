import Link from "next/link";
import TelegramDemo from "@/components/TelegramDemo";

export const metadata = {
  title: "線上體驗 - TutorBot Pro",
  description: "立即體驗 TutorBot Pro 的 Telegram 對話式操作，感受 AI 補習班管理的便利。",
};

export default function DemoPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                立即體驗<br />
                <span className="text-yellow-300">對話式操作</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                看看用 Telegram 一句話管理補習班是什麼感覺。<br />
                無需註冊，馬上感受。
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>查看右側 Telegram 對話演示</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>填寫下方表單申請試用</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>收到 Telegram Bot 連結，開始使用</span>
                </div>
              </div>
            </div>

            <div>
              <TelegramDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Commands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              試試這些指令
            </h2>
            <p className="text-xl text-gray-600">
              看看 TutorBot Pro 可以做什麼
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "學生管理",
                commands: [
                  "查林小明",
                  "林小明的電話",
                  "今天誰生日",
                  "流失學生名單",
                ],
              },
              {
                category: "請假點名",
                commands: [
                  "林小明明天事假",
                  "陳美玲這週病假",
                  "今天誰沒來",
                  "這週出勤報表",
                ],
              },
              {
                category: "繳費查詢",
                commands: [
                  "查陳禹霏繳費",
                  "這個月欠費清單",
                  "催繳王大明",
                  "今日收款統計",
                ],
              },
              {
                category: "課程排班",
                commands: [
                  "今天有什麼課",
                  "陳老師這週課表",
                  "A教室明天課程",
                  "週六的課",
                ],
              },
              {
                category: "親師溝通",
                commands: [
                  "通知林小明家長 明天停課",
                  "全班公告 下週考試",
                  "發聯絡簿給三年級",
                  "林小明的聯絡簿",
                ],
              },
              {
                category: "報表統計",
                commands: [
                  "這個月營收",
                  "學生數統計",
                  "續班到期名單",
                  "今日報表",
                ],
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">{item.category}</h3>
                <div className="space-y-2">
                  {item.commands.map((cmd, j) => (
                    <div
                      key={j}
                      className="bg-white px-4 py-2 rounded-lg text-gray-700 text-sm font-mono"
                    >
                      {cmd}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                申請免費試用
              </h2>
              <p className="text-gray-600">
                14 天免費試用，無需信用卡，5 分鐘設定完成
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  補習班名稱 *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="例：學宏文理補習班"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    聯絡人姓名 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    聯絡電話 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0912-345-678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  學生人數
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>50 人以下</option>
                  <option>50-100 人</option>
                  <option>100-200 人</option>
                  <option>200 人以上</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  目前使用的系統
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>沒有使用系統</option>
                  <option>Excel / 紙本</option>
                  <option>BST4Kids</option>
                  <option>CARE 教育管理雲</option>
                  <option>SchoolTracs</option>
                  <option>其他</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition"
              >
                🚀 開始免費試用
              </button>

              <p className="text-center text-sm text-gray-500">
                提交後，我們會在 24 小時內聯繫您完成設定
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
