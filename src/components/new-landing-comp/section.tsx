import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Section = ({ 
  children, 
  className, 
  variant = "default",
  size = "lg"
}: SectionProps) => {
  const sizeClasses = {
    sm: "py-12",
    md: "py-16", 
    lg: "py-20",
    xl: "py-24"
  };

  const variantClasses = {
    default: "bg-white",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-br from-gray-50 to-white"
  };

  return (
    <section className={cn(
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
};
