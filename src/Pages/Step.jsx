import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Step = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-4">
            Simple steps to start your health journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Download the app and connect your devices",
              description:
                "Get started syncing health with your health wearables for updates",
            },
            {
              step: "02",
              title: "Set your health goals and start monitoring",
              description:
                "Define your wellness targets for a personalized experience",
            },
            {
              step: "03",
              title: "Track & optimize your progress",
              description:
                "Start monitoring your health data and get insights based on your goals",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-teal-600">
                  Step {step.step}
                </span>
                <button className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm">
                  Explore
                </button>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Step;
