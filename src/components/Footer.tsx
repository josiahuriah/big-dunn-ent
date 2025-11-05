import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-x-2">
              <div className="rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/logo-long.png"
                    alt="Big Dunn Entertainment"
                    width={1200}
                    height={600}
                    className="h-10 w-auto"
                />
              </div>
          </Link>
            <h3 className="text-2xl font-bold text-secondary-green">BIG DUNN</h3>
            <p className="text-sm text-primary-purple uppercase tracking-wider">
              Entertainment
            </p>
            <p className="text-gray-400 text-sm">
              Ideas for Life
            </p>
            <p className="text-gray-400 text-sm">
              Premium audio visual and event equipment rentals in the Bahamas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-purple">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/wedding-packages" className="text-gray-400 hover:text-secondary-green transition-colors">
                  Wedding Packages
                </Link>
              </li>
              <li>
                <Link href="/services/event-packages" className="text-gray-400 hover:text-secondary-green transition-colors">
                  Event Packages
                </Link>
              </li>
              <li>
                <Link href="/services/equipment" className="text-gray-400 hover:text-secondary-green transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-purple">
              Services
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>DJ Services</li>
              <li>Sound Systems</li>
              <li>Lighting & Effects</li>
              <li>Staging & Truss</li>
              <li>LED Screens</li>
              <li>Event Furniture</li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-purple">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary-green flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">
                  Carew Street, Nassau, Bahamas
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary-green flex-shrink-0" size={18} />
                <a
                  href="tel:1-242-449-3010"
                  className="text-gray-400 hover:text-secondary-green transition-colors text-sm"
                >
                  1-242-449-3010
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary-green flex-shrink-0" size={18} />
                <a
                  href="mailto:info@bigdunnentertainment.com"
                  className="text-gray-400 hover:text-secondary-green transition-colors text-sm"
                >
                  info@bigdunnentertainment.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/bigdunnentertainment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary-green transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bigdunnentertainment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com/bigdunnent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary-green transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Big Dunn Entertainment. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-secondary-green transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-secondary-green transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}