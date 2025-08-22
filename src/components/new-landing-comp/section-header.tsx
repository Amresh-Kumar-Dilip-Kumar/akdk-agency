import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ 
  badge, 
  title, 
  description, 
  className,
  align = "center"
}: SectionHeaderProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(alignClasses[align], className)}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-200 text-red-700 text-sm font-semibold mb-6 uppercase tracking-wide",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
