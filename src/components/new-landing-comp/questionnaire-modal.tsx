"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendOTP, verifyOTPAndSubmit } from "@/server-functions/questionnaire-handler";

export interface QuestionnaireData {
  // Step 1: Project Type
  projectType: string;
  
  // Step 2: Service Details
services: (
    | "Website Development"
    | "Mobile App Development"
    | "UI/UX Design"
    | "E-commerce Setup"
    | "SEO Optimization"
    | "Digital Marketing"
    | "Maintenance & Support"
    | "Custom Development"
    | (string & {})
)[];
  timeline: string;
  budget: string;
  
  // Step 3: Business Details
  businessName: string;
  industry: string;
  businessSize: string;
  currentWebsite: string;
  
  // Step 4: Requirements
  features: string[];
  additionalInfo: string;
  
  // Step 5: Contact & Verification
  contactName: string;
  email: string;
  phone: string;
  preferredContact: string;
}

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialData: QuestionnaireData = {
  projectType: "",
  services: [],
  timeline: "",
  budget: "",
  businessName: "",
  industry: "",
  businessSize: "",
  currentWebsite: "",
  features: [],
  additionalInfo: "",
  contactName: "",
  email: "",
  phone: "",
  preferredContact: ""
};

export const QuestionnaireModal = ({ isOpen, onClose }: QuestionnaireModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<QuestionnaireData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const totalSteps = 6;

  const updateData = (field: keyof QuestionnaireData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: keyof QuestionnaireData, value: string) => {
    const currentArray = data[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateData(field, newArray);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const sendOTPCode = async () => {
    setIsSubmitting(true);
    try {
      const contactKey = data.preferredContact === 'email' ? data.email : data.phone;
      const result = await sendOTP(data.email, data.phone, data.preferredContact);
      
      if (result.success) {
        setOtpSent(true);
        setShowOTP(true);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOTP = async () => {
    setIsSubmitting(true);
    try {
      const contactKey = data.preferredContact === 'email' ? data.email : data.phone;
      const result = await verifyOTPAndSubmit(otp, contactKey, data);
      
      if (result.success) {
        // Reset and close
        setData(initialData);
        setCurrentStep(1);
        setShowOTP(false);
        setOtpSent(false);
        setOtp("");
        onClose();
        
        // Show success message
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('An error occurred while verifying OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What type of project do you have in mind?</h3>
              <p className="text-gray-600">Select the option that best describes your project</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: "new-website", label: "New Website", desc: "Build a website from scratch" },
                { value: "redesign", label: "Website Redesign", desc: "Improve existing website" },
                { value: "mobile-app", label: "Mobile App", desc: "iOS/Android application" },
                { value: "ecommerce", label: "E-commerce Store", desc: "Online shopping platform" },
                { value: "web-app", label: "Web Application", desc: "Custom web-based tool" },
                { value: "other", label: "Other", desc: "Something else in mind" }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateData("projectType", option.value)}
                  className={`p-4 border-2 rounded-lg text-left transition-all duration-300 ${
                    data.projectType === option.value
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-red-300"
                  }`}
                >
                  <div className="font-semibold text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What services do you need?</h3>
              <p className="text-gray-600">Select all that apply</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Website Development",
                "Mobile App Development", 
                "UI/UX Design",
                "E-commerce Setup",
                "SEO Optimization",
                "Digital Marketing",
                "Maintenance & Support",
                "Custom Development"
              ].map((service) => (
                <button
                  key={service}
                  onClick={() => toggleArrayValue("services", service)}
                  className={`p-3 border-2 rounded-lg text-left transition-all duration-300 ${
                    data.services.includes(service)
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-red-300"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <Label htmlFor="timeline" className="text-base font-semibold">Project Timeline</Label>
                <select
                  id="timeline"
                  value={data.timeline}
                  onChange={(e) => updateData("timeline", e.target.value)}
                  className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:border-red-500"
                  aria-label="Project Timeline"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush project)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div>
                <Label htmlFor="budget" className="text-base font-semibold">Budget Range</Label>
                <select
                  id="budget"
                  value={data.budget}
                  onChange={(e) => updateData("budget", e.target.value)}
                  className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:border-red-500"
                  aria-label="Budget Range"
                >
                  <option value="">Select budget</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                  <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                  <option value="above-5l">Above ₹5,00,000</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your business</h3>
              <p className="text-gray-600">Help us understand your business better</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName" className="text-base font-semibold">Business/Company Name</Label>
                <Input
                  id="businessName"
                  value={data.businessName}
                  onChange={(e) => updateData("businessName", e.target.value)}
                  placeholder="Enter your business name"
                  className="mt-2 p-3 border-2 border-gray-300 focus:border-red-500"
                />
              </div>

              <div>
                <Label htmlFor="industry" className="text-base font-semibold">Industry</Label>
                <select
                  id="industry"
                  value={data.industry}
                  onChange={(e) => updateData("industry", e.target.value)}
                  className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:border-red-500"
                  aria-label="Industry"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail/E-commerce</option>
                  <option value="finance">Finance</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="food">Food & Beverage</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="businessSize" className="text-base font-semibold">Business Size</Label>
                <select
                  id="businessSize"
                  value={data.businessSize}
                  onChange={(e) => updateData("businessSize", e.target.value)}
                  className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:border-red-500"
                  aria-label="Business Size"
                >
                  <option value="">Select size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small Business (11-50 employees)</option>
                  <option value="medium">Medium Business (51-200 employees)</option>
                  <option value="large">Large Enterprise (200+ employees)</option>
                  <option value="individual">Individual/Freelancer</option>
                </select>
              </div>

              <div>
                <Label htmlFor="currentWebsite" className="text-base font-semibold">Current Website (if any)</Label>
                <Input
                  id="currentWebsite"
                  value={data.currentWebsite}
                  onChange={(e) => updateData("currentWebsite", e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="mt-2 p-3 border-2 border-gray-300 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What features do you need?</h3>
              <p className="text-gray-600">Select all features you'd like to include</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Contact Forms",
                "User Registration/Login",
                "Payment Integration",
                "Live Chat",
                "Blog/News Section",
                "Gallery/Portfolio",
                "Social Media Integration",
                "Email Marketing",
                "Analytics Dashboard",
                "Multi-language Support",
                "Mobile App Integration",
                "Third-party API Integration"
              ].map((feature) => (
                <button
                  key={feature}
                  onClick={() => toggleArrayValue("features", feature)}
                  className={`p-3 border-2 rounded-lg text-left transition-all duration-300 ${
                    data.features.includes(feature)
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-red-300"
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="text-base font-semibold">Additional Information</Label>
              <textarea
                id="additionalInfo"
                value={data.additionalInfo}
                onChange={(e) => updateData("additionalInfo", e.target.value)}
                placeholder="Tell us more about your project requirements, goals, or any specific needs..."
                rows={4}
                className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:border-red-500"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">We'll verify your contact details and send you a proposal</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Label htmlFor="contactName" className="text-base font-semibold">Full Name *</Label>
                <Input
                  id="contactName"
                  value={data.contactName}
                  onChange={(e) => updateData("contactName", e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2 p-3 border-2 border-gray-300 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData("email", e.target.value)}
                  placeholder="your@email.com"
                  className="mt-2 p-3 border-2 border-gray-300 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateData("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className="mt-2 p-3 border-2 border-gray-300 focus:border-red-500"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <Label className="text-base font-semibold">Preferred Contact Method</Label>
                <div className="flex gap-4 mt-2">
                  {[
                    { value: "email", label: "Email", icon: Mail },
                    { value: "phone", label: "Phone", icon: Phone },
                    { value: "both", label: "Both", icon: CheckCircle2 }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateData("preferredContact", option.value)}
                      className={`flex items-center gap-2 p-3 border-2 rounded-lg transition-all duration-300 ${
                        data.preferredContact === option.value
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-red-300"
                      }`}
                    >
                      <option.icon className="w-4 h-4" />
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 text-center">
            {!showOTP ? (
              <>
                <div>
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Contact Details</h3>
                  <p className="text-gray-600">
                    We'll send an OTP to <strong>{data.preferredContact === 'email' ? data.email : data.phone}</strong> to verify your details
                  </p>
                </div>
                
                <Button
                  onClick={sendOTPCode}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  {isSubmitting ? "Sending OTP..." : "Send Verification Code"}
                </Button>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Verification Code</h3>
                  <p className="text-gray-600 mb-6">
                    Enter the 6-digit code sent to your {data.preferredContact === 'email' ? 'email' : 'phone'}
                  </p>
                  
                  <Input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    className="w-48 mx-auto text-center text-lg font-mono"
                    maxLength={6}
                  />
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowOTP(false)}
                    className="px-6 py-3"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={verifyOTP}
                    disabled={isSubmitting || otp.length !== 6}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold"
                  >
                    {isSubmitting ? "Verifying..." : "Verify & Submit"}
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500">
                  Didn't receive the code? <button onClick={sendOTPCode} className="text-red-600 hover:underline">Resend</button>
                </p>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.projectType !== "";
      case 2:
        return data.services.length > 0 && data.timeline !== "" && data.budget !== "";
      case 3:
        return data.businessName !== "" && data.industry !== "" && data.businessSize !== "";
      case 4:
        return true; // Optional step
      case 5:
        return data.contactName !== "" && data.email !== "" && data.phone !== "" && data.preferredContact !== "";
      case 6:
        return true;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Get Your Free Proposal</h2>
              <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close questionnaire"
              title="Close questionnaire"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {renderStep()}
          </div>

          {/* Footer */}
          {currentStep < 6 && (
            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                {currentStep === 5 ? "Review & Verify" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
