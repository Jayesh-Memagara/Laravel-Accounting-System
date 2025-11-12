import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                VI
              </div>
              <div>
                <h3 className="text-white font-bold">Visa Immigration</h3>
                <p className="text-xs">Consultant Services</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for visa immigration and consultant exam services in Ahmedabad, Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/visa-types" className="hover:text-primary-400 transition">
                  Visa Types
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Student Visa</li>
              <li>Work Visa</li>
              <li>Tourist Visa</li>
              <li>Business Visa</li>
              <li>PR Services</li>
              <li>Consultant Exams</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>A-502 ABC Business Hub, Nikol, Ringroad, 382350, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+919879894530" className="hover:text-primary-400 transition">
                  +91 98798 94530
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕒</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Visa Immigration & Consultant Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
