"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Sparkles } from "lucide-react";
import { QuestionnaireModal } from "@/components/new-landing-comp/questionnaire-modal";

export const FloatingQuestionnaireCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show the CTA after user has been on the site for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Hide on certain pages if needed
  useEffect(() => {
    const currentPath = window.location.pathname;
    const hiddenPaths = ['/admin', '/login', '/_dashboard'];
    
    if (hiddenPaths.some(path => currentPath.startsWith(path))) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;
  return (
    <>
      <AnimatePresence>
        {!isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 z-40"
          >
            {isMinimized ? (
              // Minimized state - just the icon
              <div className="relative z-50">

              <motion.button
                onClick={() => setIsMinimized(false)}
                className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 border-2 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <MessageSquare className="w-6 h-6" />
              </motion.button>
                </div>
            ) : (
              // Expanded state - full CTA
              <motion.div
                initial={{ width: 60, height: 60 }}
                animate={{ width: "auto", height: "auto" }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 border-2 border-white max-w-sm"
              >
                <div className="p-6 relative z-50">
                  {/* Close button */}
                  <button
                    onClick={() => {setIsMinimized(true);console.log("Minimized")}}
                    className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Minimize"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Content */}
                  <div className="pr-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-bold text-sm uppercase tracking-wide">Free Proposal</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 leading-tight">
                      Get Your Custom Quote in 24 Hours!
                    </h3>
                    
                    <p className="text-red-100 text-sm mb-4 leading-relaxed">
                      Answer a few quick questions and receive a detailed proposal tailored to your needs.
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-50 transition-colors text-sm"
                      >
                        Start Questionnaire →
                      </button>
                      
                      <div className="flex items-center text-xs text-red-200">
                        <span>✓ Takes only 2 minutes</span>
                        <span className="mx-2">•</span>
                        <span>✓ No spam guaranteed</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating animation elements */}
                  <div className="absolute -top-1 -right-1">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="w-3 h-3 bg-yellow-400 rounded-full"
                    />
                  </div>
                  
                  <div className="absolute -bottom-1 -left-1">
                    <motion.div
                      animate={{ 
                        y: [-2, 2, -2],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping opacity-20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Questionnaire Modal */}
      <QuestionnaireModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
