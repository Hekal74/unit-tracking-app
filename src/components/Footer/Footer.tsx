import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex justify-center md:justify-start">
          <img src="/assets/logo.png" alt="madmon logo" className="h-40 w-40" />
        </div>

        <div className="hidden md:block w-px h-40 bg-amber-500"></div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> 42 Farook Awal Ali Amer
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4" /> 01234569810
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" />
              <Link to="mailto:hi@madmon.ai" className="hover:underline">
                hi@madmon.ai
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block w-px h-40 bg-amber-500"></div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Useful Links</h3>
          <div className="space-y-2 text-sm flex flex-col">
            <Link to="/about-us" className="hover:underline cursor-pointer">
              About Us
            </Link>
            <Link to="/privacy-policy" className="hover:underline cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/support" className="hover:underline cursor-pointer">
              Support
            </Link>
            <Link to="/terms-conditions" className="hover:underline cursor-pointer">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-px h-40 bg-amber-500"></div>

        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com">
              <img src="/assets/linked-logo.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com">
              <img src="/assets/insta-logo.png" alt="Instagram" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com">
              <img src="/assets/facebook-logo.png" alt="Facebook" className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
