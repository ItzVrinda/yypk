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
      name: "Sophia Rodriguez",
      role: "Full Stack Developer @ Stripe",
      text: "From imposter syndrome to tech lead in six months. Arkham Labs didn't just prepare me for interviews—it transformed my entire approach to problem-solving.",
      company: "Stripe",
    },
    {
      name: "Raj Patel",
      role: "Infrastructure Engineer @ Cloudflare",
      text: "The personalized challenge sequence pushed my limits in exactly the right ways. I'm solving problems now that I couldn't even understand before.",
      company: "Cloudflare",
    },
    {
      name: "Emma Johnson",
      role: "Algorithm Specialist @ Trading Firm",
      text: "For high-frequency trading interviews, you need precision and speed. Arkham Labs honed both until my solutions were practically muscle memory.",
      company: "Top Trading Firm",
    },
    {
      name: "Marcus Williams",
      role: "Security Engineer @ Apple",
      text: "The bat-signal went up, and Arkham Labs answered. I went from rejected by Apple twice to accepting an offer with a 40% higher salary than expected.",
      company: "Apple",
    },
    {
      name: "Leila Nguyen",
      role: "ML Engineer @ Anthropic",
      text: "Even for AI specialists, the fundamentals matter. Arkham Labs helped me shore up my core skills while letting me focus on my machine learning expertise.",
      company: "Anthropic",
    },
  ];

  return (
    <div id="testimonials" className="min-h-[95vh] p-4" ref={sectionRef}>
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
