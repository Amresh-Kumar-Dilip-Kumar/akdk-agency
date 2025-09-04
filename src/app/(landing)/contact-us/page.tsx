"use client";
import { PageHeader } from "@/components/landing/page-header2";
import { useState } from "react";
import { contactformdetail } from "./serveraction";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Zap,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");

    const Formdata = new FormData();
    Formdata.append("name", formData.name);
    Formdata.append("email", formData.email);
    Formdata.append("message", formData.message);
    Formdata.append("terms", formData.terms.toString());

    try {
      await contactformdetail(Formdata);
      setSuccessMessage(
        "✅ Thank you for contacting us! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "", terms: false });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="text-gray-900 ">
      <PageHeader
        heading={<>Get in Touch</>}
        description={
          <>
            Reach out to us for expert web development solutions. Our team is
            ready to assist you with any inquiries or project discussions. Let's
            build something{" "}
            <span className="font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              amazing together
            </span>
            .
          </>
        }
      />

      {/* Contact Information Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Our Office",
                info: "Raipur, Chhattisgarh, India",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                info: "+91 XXX XXX XXXX",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                info: "akdkdigital@gmail.com",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-red-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-red-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <MessageSquare className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Let's Start a Conversation
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to transform your digital presence? We're here to help bring
              your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Section */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                <iframe
                  className="w-full h-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.2198753309365!2d81.6250420411519!3d21.246457543528056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd456d116d29%3A0xde610a4386781852!2sAKDK%20Digital!5e0!3m2!1sen!2sin!4v1739782384777!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    We'd Love to Hear From You!
                  </h3>
                  <p className="text-gray-600 font-light">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                {successMessage && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    {successMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        disabled={submitting}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 border-2 border-gray-200 focus:border-red-400 rounded-xl shadow-sm transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        disabled={submitting}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 border-2 border-gray-200 focus:border-red-400 rounded-xl shadow-sm transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        disabled={submitting}
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 border-2 border-gray-200 focus:border-red-400 rounded-xl shadow-sm h-32 resize-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      disabled={submitting}
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                      required
                    />
                    <label className="text-gray-600 font-medium">
                      I accept the Terms and Conditions
                    </label>
                  </div>

                  <button
                    disabled={submitting || !formData.terms}
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
              Quick Response Guaranteed
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
              We typically respond to all inquiries within 24 hours. For urgent
              matters, feel free to call us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl">
                <Clock className="w-5 h-5 mr-2" />
                24/7 Support Available
              </div>
              <div className="flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl">
                <Zap className="w-5 h-5 mr-2" />
                Fast Project Turnaround
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
