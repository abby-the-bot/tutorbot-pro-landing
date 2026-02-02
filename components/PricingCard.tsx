import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 ${
        popular
          ? "bg-gradient-to-b from-indigo-600 to-purple-600 text-white scale-105 shadow-2xl"
          : "bg-white border border-gray-200 shadow-lg"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
            最受歡迎
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className={`text-xl font-bold mb-2 ${popular ? "text-white" : "text-gray-900"}`}>
          {name}
        </h3>
        <p className={`text-sm mb-4 ${popular ? "text-white/80" : "text-gray-500"}`}>
          {description}
        </p>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-sm ${popular ? "text-white/80" : "text-gray-500"}`}>NT$</span>
          <span className={`text-5xl font-bold ${popular ? "text-white" : "text-gray-900"}`}>
            {price}
          </span>
          <span className={`text-sm ${popular ? "text-white/80" : "text-gray-500"}`}>/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 ${popular ? "text-yellow-300" : "text-green-500"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className={popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={cta === "聯絡我們" ? "/contact" : "/demo"}
        className={`block w-full py-4 rounded-full font-bold text-center transition ${
          popular
            ? "bg-white text-indigo-600 hover:bg-gray-100"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
