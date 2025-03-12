import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const Health = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Health Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-3xl font-bold leading-tight">
                Receive tailored health tips and alerts based on your individual data trends
              </h2>
              <p className="text-lg text-gray-600">
                Helping you make proactive adjustments to your lifestyle and health routine
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src="https://i.pinimg.com/236x/88/39/29/88392923f55b012e80db9799db8b2b0a.jpg?height=400&width=600"
                alt="Health Dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your health journey?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health with Healix
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-md">
              Get Started Now
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-5 py-2 rounded-md">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Health;
