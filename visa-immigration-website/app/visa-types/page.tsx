export default function VisaTypes() {
  const visaTypes = [
    {
      country: "USA",
      flag: "🇺🇸",
      visas: [
        { type: "F-1 Student Visa", desc: "For academic studies" },
        { type: "H-1B Work Visa", desc: "For skilled workers" },
        { type: "B-1/B-2 Tourist Visa", desc: "For tourism and business" },
        { type: "L-1 Transfer Visa", desc: "For intra-company transfers" },
      ],
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      visas: [
        { type: "Study Permit", desc: "For international students" },
        { type: "Work Permit", desc: "For temporary workers" },
        { type: "Express Entry", desc: "For permanent residency" },
        { type: "Visitor Visa", desc: "For tourists and visitors" },
      ],
    },
    {
      country: "UK",
      flag: "🇬🇧",
      visas: [
        { type: "Student Visa (Tier 4)", desc: "For higher education" },
        { type: "Skilled Worker Visa", desc: "For skilled professionals" },
        { type: "Standard Visitor Visa", desc: "For tourism" },
        { type: "Innovator Visa", desc: "For entrepreneurs" },
      ],
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      visas: [
        { type: "Student Visa (500)", desc: "For international students" },
        { type: "Skilled Independent (189)", desc: "For skilled workers" },
        { type: "Visitor Visa (600)", desc: "For tourists" },
        { type: "Business Innovation (188)", desc: "For business owners" },
      ],
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      visas: [
        { type: "Student Visa", desc: "For university studies" },
        { type: "EU Blue Card", desc: "For highly skilled workers" },
        { type: "Schengen Visa", desc: "For short stays" },
        { type: "Job Seeker Visa", desc: "For job hunting" },
      ],
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      visas: [
        { type: "Student Visa", desc: "For international students" },
        { type: "Skilled Migrant", desc: "For skilled workers" },
        { type: "Visitor Visa", desc: "For tourism" },
        { type: "Work to Residence", desc: "For long-term work" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visa Types</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Explore different visa categories for popular destinations worldwide
          </p>
        </div>
      </section>

      {/* Visa Types by Country */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We assist with visa applications for all major countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((country, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-3">{country.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{country.country}</h3>
                </div>
                <div className="space-y-4">
                  {country.visas.map((visa, idx) => (
                    <div key={idx} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{visa.type}</h4>
                      <p className="text-sm text-gray-600">{visa.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Visa Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visa Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding different types of visas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎓",
                title: "Student Visas",
                desc: "For pursuing education abroad in universities and colleges",
              },
              {
                icon: "💼",
                title: "Work Visas",
                desc: "For employment opportunities and professional work abroad",
              },
              {
                icon: "✈️",
                title: "Tourist Visas",
                desc: "For leisure travel, sightseeing, and visiting friends/family",
              },
              {
                icon: "🏢",
                title: "Business Visas",
                desc: "For business meetings, conferences, and trade activities",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Family Visas",
                desc: "For family reunification and spouse sponsorship",
              },
              {
                icon: "🏠",
                title: "PR Visas",
                desc: "For permanent residency and long-term settlement",
              },
              {
                icon: "🚀",
                title: "Investor Visas",
                desc: "For business investment and entrepreneurship",
              },
              {
                icon: "⚕️",
                title: "Medical Visas",
                desc: "For medical treatment and healthcare services",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Common Visa Requirements
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-700">Documents Required</h3>
                  <ul className="space-y-2">
                    {[
                      "Valid passport",
                      "Visa application form",
                      "Passport-size photographs",
                      "Financial documents",
                      "Travel itinerary",
                      "Accommodation proof",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-700">Additional Requirements</h3>
                  <ul className="space-y-2">
                    {[
                      "Letter of invitation (if applicable)",
                      "Educational certificates",
                      "Employment letter",
                      "Medical insurance",
                      "Police clearance certificate",
                      "Biometric data",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing the Right Visa?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our experts will guide you through the entire process
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Get Expert Advice
          </a>
        </div>
      </section>
    </div>
  );
}
