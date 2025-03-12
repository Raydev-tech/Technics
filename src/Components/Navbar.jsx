import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, Menu } from "lucide-react";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b" data-aos="fade-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-teal-600" />
            <a href="">
            <span className="font-bold text-xl">Healix</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>

          {/* Navigation Links */}
          <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 flex flex-col md:flex-row gap-4 md:gap-8 items-center transition-all ${isOpen ? "block" : "hidden"}`}>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Reviews
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              About Us
            </a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200">
              Get started
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
