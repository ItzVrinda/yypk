import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import bg from "../assets/images/arkham4.png";
import "./Testimonials.css";

export const Testimonials = () => {
  const sectionRef = useRef(null);
  //   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });



  // Duplicate testimonials for second row (we'll use a different subset)
  const Testimonials = [
    {
      name: "Rohit Shukla",
      role: "Graphic Designer",
      text: "Attending sessions here has transformed not just my body but also my mind. I feel calmer, healthier, and more focused in my daily life.",
      company: "Stripe",
    },
    {
      name: "Raj Patel",
      role: "Civil Engineer",
      text: "The instructors are so patient and motivating. I had never tried yoga before, but now it has become a part of my lifestyle.",
      company: "Cloudflare",
    },
    {
      name: "Neha Bhati",
      role: "HR at Tech Startup",
      text: "After joining, my back pain has reduced drastically, and I sleep so much better at night. This place truly cares for your well-being.",
      company: "Top Trading Firm",
    },
    {
      name: "Sandhya Iyer",
      role: "Teacher",
      text: "The environment is peaceful, and the classes are perfectly balanced between physical postures and mindfulness practices. Highly recommend!",
      company: "Apple",
    },
    {
      name: "Arjun Mehta",
      role: "Student",
      text: "I love the friendly atmosphere and personalized attention. Even as a beginner, I never felt out of place.",
      company: "Anthropic",
    },
  ];

  return (
    <div id="testimonials" className="cover" ref={sectionRef}>
      <div className="relative min-h-[95vh] rounded-4xl overflow-hidden">
        {/* Content Layer */}
        <div className="relative z-10 h-full w-full flex flex-col items-center">
          <h1 className="heading">
            Testimonials{" "}
          </h1>
          {/* <p className="sm:text-lg text-base text-center mt-2 neue-montreal text-transparent bg-gradient-to-r from-white to-[#949494] bg-clip-text neue-med">
            Trained in Silence. Praised in Interviews.
          </p> */}
        </div>

        <div className="mb-8 w-full overflow-hidden">
          <div className="testimonial-track-reverse">
            {[...Testimonials, ...Testimonials].map(
              (testimonial, index) => (
                <div className="testimonial-card" key={`row2-${index}`}>
                  {/* <div className="quote-icon">❝</div> */}
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
