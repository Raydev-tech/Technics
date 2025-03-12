import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Why from "./Why";
import Step from "./Step";
import Health from "./Health";
import Testimonial from "./Testimonial";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-blue-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Where care meets innovation
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                From daily wellness to advanced health insights, our platform is designed to support you.
              </p>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 h-12 rounded-lg">
              Book A Free Demo
            </button>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 max-w-xs mt-10 mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm text-gray-600">+more</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">200K+</span>
            <span className="text-sm text-gray-600">active monthly patients</span>
          </div>
          <img
            src="https://i.pinimg.com/236x/87/80/d1/8780d1a1499acb38bfa2df2a4837beab.jpg"
            alt="Healthcare"
            className="mt-4 w-full h-auto rounded-lg"
          />
        </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="https://i.pinimg.com/236x/44/7c/d8/447cd882dfe23028265e324150988859.jpg"
              alt="Healthcare Professional"
              width={600}
              height={400}
              className="rounded-xl"
            />

            {/* Floating Stats Card */}
            <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 max-w-xs" data-aos="fade-up">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Personalized care and demand</h3>
                <span className="text-sm text-teal-600">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: "78%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Why />
      <Step />
      <Health />
      <Testimonial />
    </section>
  );
};

export default Homepage;