
import React from "react";
import { InfiniteMovingCards } from "./InfiniteCard";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[15rem] w-auto rounded-md flex flex-col antialiased bg-white dark:gradient-to-tl dark:from-white dark:to-sky-800 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "DocOnTime has completely changed the way I manage my healthcare. Booking an appointment with a specialist is so simple and hassle-free now. I found a great doctor near me in minutes! Highly recommend it to everyone.",
    name: "Ramesh Gupta, New Delhi",
    
  },
  {
    quote:
      "I love the convenience of DocOnTime! It lets me browse through doctors, check their credentials, and book appointments without endless phone calls. The reminder notifications are a lifesaver too",
    name: "Priya Sharma, Mumbai"
  
  },
  {
    quote: "Finding a trusted doctor used to be a daunting task, but thanks to DocOnTime, I can now book appointments with reliable professionals in just a few clicks. It’s efficient, fast, and super user-friendly",
    name: "Anil Kumar, Bengaluru",
   
  },
  {
    quote:
      "DocOnTime made it so easy for me to find a pediatrician for my son. The reviews and ratings helped me make an informed choice, and the online booking process was seamless. Thank you for simplifying healthcare!",
    name: "Sneha Verma, Pune",
    
  },
  {
    quote:
      "This platform is a game-changer! I’ve booked appointments for myself and my parents, and the experience has been nothing short of excellent. The support team is also very responsive. Great work, DocOnTime team!",
    name: "Rajesh Iyer, Chennai",
   
  },
];
