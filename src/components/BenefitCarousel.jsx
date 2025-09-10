import React from "react";
import Slider from "react-slick";
import BenefitCard from "./BenefitCard";
import caraousel1 from "../assets/caraousel1.png";
import caraousel2 from "../assets/caraousel2.png";
import caraousel3 from "../assets/caraousel3.png";
import caraousel4 from "../assets/caraousel4.png";
import caraousel5 from "../assets/caraousel5.png";
import caraousel6 from "../assets/caraousel6.png";
import caraousel7 from "../assets/caraousel7.png";

const benefitCards = [
  {
    image: caraousel3,
    title: "Sharpen Focus & Clarity",
    description:
      "Improve concentration and decision-making with mindful practices.",
  },

  {
    image: caraousel1,
    title: "Reduce Stress & Find Calm",
    description:
      "Learn manageable ways to ease daily pressures for a more focused, relaxed workplace.",
  },

  {
    image: caraousel7,
    title: "Strengthen Team Bonds",
    description: "Enhance communication, empathy, and collaboration.",
  },

  {
    image: caraousel2,
    title: "Grow Emotional Intelligence",
    description: " Foster self-awareness and stronger workplace relationships.",
  },

  {
    image: caraousel5,
    title: "Ignite Creativity & Innovation",
    description:
      "A calm mind paves the way for new ideas and better problem-solving.",
  },

  {
    image: caraousel6,
    title: "Enhance Well-being & Morale",
    description: "Boost happiness and spirit to create a thriving environment.",
  },

  {
    image: caraousel4,
    title: "Support Physical Health",
    description:
      "Gentle movement helps ease tension, boost energy, and promote better posture.",
  },
];

export default function BenefitCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {benefitCards.map((card, idx) => (
        <BenefitCard
          key={idx}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </Slider>
  );
}
