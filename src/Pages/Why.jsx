import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, Heart, Brain, ChevronRight } from "lucide-react";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Why choose Healix for health tracking & monitoring?</h2>
          <p className="text-gray-600">
            Healix is designed to help you track and understand your health in real time. Be better in everything and
            gain activity focus, as health patterns to make informed decisions for a healthier lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Enhanced health awareness",
              description: "Track vital signs and receive personalized insights",
              metric: "250k+",
              icon: <Activity className="h-6 w-6 text-teal-600" />,
            },
            {
              title: "Boost in physical activity levels",
              description: "Smart activity tracking and recommendations",
              metric: "78%",
              icon: <Heart className="h-6 w-6 text-teal-600" />,
            },
            {
              title: "Faster response to health changes",
              description: "Real-time alerts and monitoring",
              metric: "78.99%",
              icon: <Brain className="h-6 w-6 text-teal-600" />,
            },
          ].map((feature, index) => (
            <div key={index} className="relative overflow-hidden group" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <div className="absolute top-0 right-0 p-4">{feature.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">{feature.metric}</span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-teal-600">
                      Explore <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
