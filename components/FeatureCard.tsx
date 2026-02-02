interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: "indigo" | "purple" | "green" | "blue" | "orange";
}

const colorClasses = {
  indigo: "bg-indigo-50 text-indigo-600",
  purple: "bg-purple-50 text-purple-600",
  green: "bg-green-50 text-green-600",
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
};

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 card-hover shadow-lg border border-gray-100">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
