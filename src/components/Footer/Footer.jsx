import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-700 dark:bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            <Logo width="100px" />
          </div>
          <p className="text-sm">&copy; 2025 DevUI. All Rights Reserved.</p>
        </div>

        {/* Navigation Sections */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-gray-400 transition">Features</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Pricing</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-gray-400 transition">Account</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Help</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Legals</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-gray-400 transition">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-gray-400 transition">Licensing</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-500 pt-4 text-center text-sm">
          Made with ❤️ by Shivansh Pandey
        </div>
      </div>
    </footer>
  );
}

export default Footer;
