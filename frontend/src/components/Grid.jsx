import { HoverEffect } from "./HoverCard";

export function CardHoverEffectDemo() {
  return (
    (<div className="w-full mx-auto">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Efficiency:",
    description:
      "Simplify your healthcare with streamlined appointment scheduling that adapts to your busy life. Book trusted doctors effortlessly, save time, and enjoy a hassle-free experience, whether at home or on the go.",
   
  },
  {
    title: "Convenience:",
    description:
      "Gain access to a comprehensive network of trusted healthcare professionals in your area. Find qualified doctors, specialists, and experts nearby, ensuring quality care is always within your reach.",
    
  },
  {
    title: "Personalization:",
    description:
      "Receive tailored recommendations and timely reminders to keep your health on track. Stay informed, organized, and proactive with personalized updates designed to support your wellness journey.",
  
  },

];
