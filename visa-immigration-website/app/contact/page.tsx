"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Get in touch with us for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+91 98798 94530"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="student-visa">Student Visa</option>
                    <option value="work-visa">Work Visa</option>
                    <option value="tourist-visa">Tourist Visa</option>
                    <option value="business-visa">Business Visa</option>
                    <option value="pr-services">PR Services</option>
                    <option value="exam-preparation">Exam Preparation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  Submit Inquiry
                </button>

                {submitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We will contact you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Office Address */}
                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary-500 transition">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-700">
                        A-502 ABC Business Hub<br />
                        Nikol, Ringroad<br />
                        382350, Ahmedabad<br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary-500 transition">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Number</h3>
                      <a
                        href="tel:+919879894530"
                        className="text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        +91 98798 94530
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary-500 transition">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🕒</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-primary-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-4">Call us now for urgent queries</p>
                  <a
                    href="tel:+919879894530"
                    className="inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                  >
                    Call Now: +91 98798 94530
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us Here</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-700 font-semibold">A-502 ABC Business Hub</p>
                  <p className="text-gray-600">Nikol, Ringroad, Ahmedabad, Gujarat 382350</p>
                  <a
                    href="https://maps.google.com/?q=A-502+ABC+Business+Hub+Nikol+Ringroad+Ahmedabad+Gujarat+382350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How long does the visa process take?",
                  a: "Processing time varies by country and visa type, typically ranging from 2-8 weeks. We provide regular updates throughout the process.",
                },
                {
                  q: "What documents do I need?",
                  a: "Required documents vary by visa type. We provide a comprehensive checklist after your initial consultation.",
                },
                {
                  q: "Do you offer refunds if visa is rejected?",
                  a: "Our service fees are non-refundable, but we have a 98% success rate and provide complete support throughout the process.",
                },
                {
                  q: "Can you help with visa extensions?",
                  a: "Yes, we assist with visa extensions, renewals, and status changes for various countries.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
