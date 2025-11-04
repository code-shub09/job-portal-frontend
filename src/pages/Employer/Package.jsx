import React from "react";

const plans = [
  {
    name: "Starter",
    price: 49,
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      "Post up to 5 jobs",
      "100 applicant views",
      "Basic analytics",
      "Email support",
      "7-day job visibility",
    ],
    buttonColor: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  },
  {
    name: "Professional",
    price: 99,
    period: "/month",
    description: "For growing companies",
    features: [
      "Post up to 20 jobs",
      "Unlimited applicant views",
      "Advanced analytics",
      "Priority email support",
      "30-day job visibility",
      "Messaging system",
      "Interview scheduling",
    ],
    badge: "Most Popular",
    buttonColor: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    name: "Enterprise",
    price: 199,
    period: "/month",
    description: "For large organizations",
    features: [
      "Unlimited job postings",
      "Unlimited applicant views",
      "Custom analytics & reports",
      "24/7 phone & email support",
      "90-day job visibility",
      "Interview scheduling",
      "Dedicated account manager",
      "API access",
    ],
    buttonColor: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  },
];





export default function Package() {
  return (
    <div className="min-h-screen bg-gray-50 py-2 px-4">
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Pricing Plans</h1>
        <p className="text-gray-500 mt-2">
          Choose the perfect plan for your hiring needs
        </p>
      </div>

      {/* Flex container instead of grid */}
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-md border ${
              plan.badge ? "border-blue-500" : "border-gray-200"
            } w-full sm:w-[85%] md:w-[30%] px-5 py-6 flex flex-col justify-between`}
          >
            <div>
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-800">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{plan.description}</p>

              <div className="mt-4">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="mt-4 space-y-2 text-left text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                className={`mt-4 w-full py-3 rounded-xl font-semibold transition ${plan.buttonColor}`}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
