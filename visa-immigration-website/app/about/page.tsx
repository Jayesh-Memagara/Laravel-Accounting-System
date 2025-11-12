export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Your trusted partner for visa immigration and consultant services
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a leading visa immigration and consultant service provider based in Ahmedabad, Gujarat. 
                With over 10 years of experience, we have helped thousands of clients achieve their dreams of 
                studying, working, and settling abroad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of experienced consultants provides personalized guidance and support throughout 
                the entire visa application process, ensuring the highest success rate for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, reliable, and efficient visa immigration services that help 
                individuals and families achieve their international aspirations. We are committed to 
                delivering personalized solutions with integrity, transparency, and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred visa immigration consultant in Gujarat, recognized 
                for our exceptional service quality, high success rates, and commitment to client 
                satisfaction. We aim to make global mobility accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes us the preferred choice for visa immigration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🏆",
                title: "Proven Track Record",
                desc: "Over 5000+ successful visa applications with a 98% success rate",
              },
              {
                icon: "👨‍💼",
                title: "Expert Team",
                desc: "Experienced consultants with in-depth knowledge of immigration laws",
              },
              {
                icon: "🤝",
                title: "Personalized Service",
                desc: "Tailored solutions based on individual needs and circumstances",
              },
              {
                icon: "⚡",
                title: "Fast Processing",
                desc: "Quick turnaround time with regular updates on application status",
              },
              {
                icon: "💯",
                title: "Transparent Pricing",
                desc: "No hidden charges, clear and upfront pricing for all services",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                desc: "Dedicated support team available to answer your queries anytime",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary-500 hover:shadow-lg transition text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🎯", title: "Integrity", desc: "Honest and ethical practices" },
              { icon: "⭐", title: "Excellence", desc: "Commitment to quality service" },
              { icon: "🤝", title: "Trust", desc: "Building lasting relationships" },
              { icon: "💡", title: "Innovation", desc: "Continuous improvement" },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-700 text-white rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-primary-100">Numbers that speak for themselves</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
                <div className="text-primary-100">Successful Visas</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Countries</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Visit Our Office
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Location</h3>
              <p className="text-gray-700 mb-4">
                A-502 ABC Business Hub, Nikol, Ringroad<br />
                382350, Ahmedabad, Gujarat, India
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <a
                  href="tel:+919879894530"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                >
                  📞 Call: +91 98798 94530
                </a>
                <a
                  href="/contact"
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let us help you achieve your international dreams
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
