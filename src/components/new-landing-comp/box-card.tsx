import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BoxCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: "default" | "bordered" | "shadow" | "elevated";
}

export const BoxCard = ({ 
  children, 
  className, 
  hover = true,
  delay = 0,
  variant = "default"
}: BoxCardProps) => {
  const variantClasses = {
    default: "bg-white border border-gray-200",
    bordered: "bg-white border-2 border-gray-300",
    shadow: "bg-white shadow-lg border border-gray-100",
    elevated: "bg-white shadow-xl border border-gray-100"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        "p-8 transition-all duration-300",
        variantClasses[variant],
        hover && "hover:shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
