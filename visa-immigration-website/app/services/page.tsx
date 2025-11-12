import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Student Visa Services",
      icon: "🎓",
      description: "Complete assistance for students planning to study abroad",
      features: [
        "University selection and application",
        "Student visa documentation",
        "Scholarship guidance",
        "Pre-departure orientation",
        "Accommodation assistance",
      ],
    },
    {
      title: "Work Visa Services",
      icon: "💼",
      description: "Professional work visa and employment permit services",
      features: [
        "Work permit applications",
        "Job search assistance",
        "Employer sponsorship guidance",
        "Skilled worker visa",
        "Intra-company transfers",
      ],
    },
    {
      title: "Tourist Visa Services",
      icon: "✈️",
      description: "Hassle-free tourist and visitor visa processing",
      features: [
        "Tourist visa applications",
        "Travel itinerary planning",
        "Travel insurance guidance",
        "Multiple entry visas",
        "Visa extension services",
      ],
    },
    {
      title: "Business Visa Services",
      icon: "🏢",
      description: "Business visa and investor immigration solutions",
      features: [
        "Business visa applications",
        "Investor visa programs",
        "Entrepreneur visa guidance",
        "Business setup assistance",
        "Trade mission support",
      ],
    },
    {
      title: "Permanent Residency",
      icon: "🏠",
      description: "PR and citizenship application services",
      features: [
        "PR application processing",
        "Points assessment",
        "Citizenship applications",
        "Family sponsorship",
        "Settlement services",
      ],
    },
    {
      title: "Exam Preparation",
      icon: "📝",
      description: "Comprehensive exam preparation and coaching",
      features: [
        "IELTS coaching",
        "PTE preparation",
        "TOEFL training",
        "Mock tests",
        "Study materials",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Comprehensive visa and immigration services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-500 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent process for your visa application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Free initial consultation to understand your needs" },
              { step: "02", title: "Documentation", desc: "Gather and prepare all required documents" },
              { step: "03", title: "Application", desc: "Submit your visa application with our guidance" },
              { step: "04", title: "Success", desc: "Receive your visa and start your journey" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for personalized assistance
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
