import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div data-aos="fade-up">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm">
            We are committed to providing the best healthcare services and wellness tips to improve your lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Health Blog</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        <p>© {new Date().getFullYear()} HealthCare Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
