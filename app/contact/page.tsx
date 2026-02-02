export const metadata = {
  title: "聯絡我們 - TutorBot Pro",
  description: "有任何問題或想了解更多？歡迎聯絡我們，我們很樂意為您解答。",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            聯絡我們
          </h1>
          <p className="text-xl text-gray-600">
            有任何問題或想了解更多？<br />
            我們很樂意為您解答
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💬",
                title: "Telegram",
                desc: "最快的聯繫方式",
                action: "@TutorBotProSupport",
                link: "https://t.me/TutorBotProSupport",
              },
              {
                icon: "📧",
                title: "Email",
                desc: "商務合作或正式詢問",
                action: "hello@tutorbotpro.com",
                link: "mailto:hello@tutorbotpro.com",
              },
              {
                icon: "📞",
                title: "電話",
                desc: "週一至週五 9:00-18:00",
                action: "(02) 2958-2886",
                link: "tel:+886229582886",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="bg-gray-50 rounded-2xl p-8 text-center card-hover block"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                <span className="text-indigo-600 font-medium">{item.action}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              留言給我們
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="您的姓名"
                  />
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  補習班名稱
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="您的補習班名稱（選填）"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  詢問類型
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>產品諮詢</option>
                  <option>免費試用</option>
                  <option>報價詢問</option>
                  <option>技術支援</option>
                  <option>商務合作</option>
                  <option>其他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  訊息內容 *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="請描述您的問題或需求..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition"
              >
                送出訊息
              </button>

              <p className="text-center text-sm text-gray-500">
                我們會在 1-2 個工作天內回覆您
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">公司資訊</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="text-white font-medium">公司名稱：</span><br />
                    毛幫幫科技有限公司
                  </p>
                  <p>
                    <span className="text-white font-medium">統一編號：</span><br />
                    00215174
                  </p>
                  <p>
                    <span className="text-white font-medium">地址：</span><br />
                    台北市（完整地址詢問時提供）
                  </p>
                  <p>
                    <span className="text-white font-medium">服務時間：</span><br />
                    週一至週五 9:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🤖</div>
                <p className="text-gray-400">
                  TutorBot Pro<br />
                  <span className="text-indigo-400">AI-Powered Education Management</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
