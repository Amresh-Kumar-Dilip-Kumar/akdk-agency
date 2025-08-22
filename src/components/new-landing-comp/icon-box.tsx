import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IconBoxProps {
  icon: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "red" | "gradient";
  hover?: boolean;
}

export const IconBox = ({ 
  icon, 
  className,
  size = "md",
  variant = "default",
  hover = true
}: IconBoxProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16", 
    lg: "w-20 h-20"
  };

  const variantClasses = {
    default: "bg-gray-100 text-gray-700 border-2 border-gray-200",
    red: "bg-red-50 text-red-600 border-2 border-red-200",
    gradient: "bg-gradient-to-br from-red-50 to-pink-50 text-red-600 border-2 border-red-200"
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.1, rotate: 5 } : {}}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 flex-shrink-0",
        sizeClasses[size],
        variantClasses[variant],
        hover && "hover:shadow-lg",
        className
      )}
    >
      {icon}
    </motion.div>
  );
};
