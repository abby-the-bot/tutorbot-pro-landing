export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "操作方式",
      traditional: "網頁登入、多步點擊",
      tutorbot: "Telegram 對話、一句話完成",
    },
    {
      feature: "學習時間",
      traditional: "3-5 天培訓",
      tutorbot: "5 分鐘上手",
    },
    {
      feature: "學生請假",
      traditional: "登入 → 找學生 → 編輯 → 請假 → 儲存 → 通知",
      tutorbot: "「林小明明天事假」→ 完成",
    },
    {
      feature: "查詢繳費",
      traditional: "登入 → 繳費管理 → 搜尋 → 查看",
      tutorbot: "「查陳禹霏繳費」→ 顯示",
    },
    {
      feature: "成績輸入",
      traditional: "手動逐筆輸入",
      tutorbot: "拍照 → AI 自動辨識",
    },
    {
      feature: "催繳",
      traditional: "手動篩選 → 手動發送",
      tutorbot: "AI 自動催繳",
    },
    {
      feature: "家長 APP",
      traditional: "需另外安裝",
      tutorbot: "直接用 LINE",
    },
    {
      feature: "價格",
      traditional: "NT$2,000+/月",
      tutorbot: "NT$500/月起",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-gray-500 font-medium">比較項目</th>
            <th className="px-6 py-4 text-center text-gray-500 font-medium">
              <span className="flex items-center justify-center gap-2">
                <span className="text-red-500">😔</span>
                傳統系統
              </span>
            </th>
            <th className="px-6 py-4 text-center font-medium">
              <span className="flex items-center justify-center gap-2">
                <span className="text-green-500">😊</span>
                <span className="gradient-text font-bold">TutorBot Pro</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
              <td className="px-6 py-4 text-center text-gray-500 text-sm">{row.traditional}</td>
              <td className="px-6 py-4 text-center text-indigo-600 font-medium text-sm">
                {row.tutorbot}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
