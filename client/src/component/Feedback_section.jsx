import React from "react";
import { Feedback_card } from "./Feedback_card";
import "./Feedback_card.css";

export const Feedback_section = () => {
  const feedbacks = [
    {
      image: "/images/Pic1.jpg",
      name: "Swarali Sonavane",
      feedback:
        "uggested make-upstyle, Henna Mehendi, pearl nails everything about this look was my personal favoraite. Thank you!",
      images: "/images/feedback1.png",
    },
    {
      image: "/images/pic2.jpg",
      name: "Ishita Deshpande",
      feedback:
        "I'm maharashtrian, it's not easy to blend colours together so well. Also, My make-up stayed for 9 hours that's all because of the good Skin-prep provided by hydra-facial. Definitely recommend!",
      images: "/images/feedback2.png",
    },
    {
      image: "/images/pic3.jpg",
      name: "Kavita",
      feedback:
        "As a bride I had lots of tasks, Believe Me She finish it up in only 2 hours. Saved My day !",
      images: "/images/feedback3.png",
    },
  ];

  return (
    <div className="feedback-section">
      {feedbacks.map((item, index) => (
        <Feedback_card key={index} {...item} />
      ))}
    </div>
  );
};


