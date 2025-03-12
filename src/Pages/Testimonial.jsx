import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Nutritionist",
      feedback:
        "Healix helped me track my diet and fitness goals effortlessly. The insights are truly life-changing!",
      image: "https://i.pinimg.com/236x/ca/d2/89/cad289e49f11ff1d416b83c69d4575be.jpg",
    },
    {
      name: "Michael Lee",
      role: "Fitness Enthusiast",
      feedback:
        "I've never felt more in control of my health. The personalized recommendations keep me on track!",
      image: "https://i.pinimg.com/236x/0e/1c/7a/0e1c7af46dd1770afe1f2d122067aee5.jpg",
    },
    {
      name: "Emma Brown",
      role: "Yoga Instructor",
      feedback:
        "The health alerts are a game-changer! I can now stay ahead of my wellness journey with ease.",
      image: "https://i.pinimg.com/236x/dd/86/b6/dd86b635382fd8047919b6c32188b096.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="text-lg text-gray-600 mt-2">
            Real stories from our happy and healthy users!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h3 className="font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
