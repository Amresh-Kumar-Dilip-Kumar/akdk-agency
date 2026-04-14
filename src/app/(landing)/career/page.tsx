"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Briefcase,
  Users,
  Rocket,
  Smile,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Target,
  Send,
} from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";
import { ApplyNowModal } from "@/components/careers/apply-now-modal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CareerPage() {
  return (
    <section>
      <PageHeader
        heading={<>Career At AKDK Digital</>}
        description={
          <>
            Join our passionate team in shaping the future of web development
            and digital innovation. Be part of something{" "}
            <span className="font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              extraordinary
            </span>
            .
          </>
        }
      />

      {/* Why Work With Us Section */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
              <Rocket className="w-4 h-4" />
              Careers
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-950">
              Why Join AKDK?
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Experience a workplace that values creativity, growth, and
              innovation while building the future of digital experiences.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Innovative Projects",
                desc: "Work on cutting-edge digital solutions across industries with the latest technologies.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Creative Culture",
                desc: "Collaborate in a friendly, open, and learning-oriented environment that celebrates creativity.",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Growth Opportunities",
                desc: "Advance your career with mentorship, training, and real-world challenges.",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                icon: <Smile className="w-8 h-8" />,
                title: "Flexible Work",
                desc: "Enjoy remote options, flexible timings, and perfect work-life balance.",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Supportive Team",
                desc: "Be part of a team that supports, respects, and celebrates every achievement.",
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50 to-blue-50",
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="bg-white border border-gray-200 p-8 h-full">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white mb-6"
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
              <Briefcase className="w-4 h-4" />
              Openings
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-950">
              Open Positions
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to make an impact? Explore our current openings and find
              your perfect role.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Frontend Developer",
                location: "Raipur / Remote",
                type: "Full-time",
                description:
                  "Design and build engaging, user-friendly UI components using React, Tailwind, or any other modern technology of your choice—bring your creativity and preferred tools to craft impressive digital experiences.",
                color: "from-blue-500 to-cyan-500",
                position: "Close",
              },
              {
                title: "UI/UX Designer",
                location: "Raipur / Remote",
                type: "Internship",
                description:
                  "Create intuitive, visually appealing experiences tailored to client needs—whether you're skilled in UI/UX design tools, front-end frameworks, or prefer bringing your own creative process, your design thinking is what makes the difference.",
                color: "from-green-500 to-emerald-500",
                position: "Open",
              },
              {
                title: "Backend Developer",
                location: "Raipur / Remote",
                type: "Full-time",
                description:
                  "Build and maintain scalable, efficient backend systems using technologies like Node.js, databases, or any stack you're comfortable with—what matters most is writing clean, secure code that powers great user experiences.",
                color: "from-purple-500 to-pink-500",
                position: "Open",
              },
            ].map((job, i) => (
              <div key={i} className="group relative">
                <div className="bg-white border border-gray-200 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`inline-flex items-center px-3 py-1 text-white text-xs font-bold uppercase tracking-wider mt-4 lg:mt-0 ${job.position === "Open" ? "bg-red-600" : "bg-gray-500"}`}
                    >
                      {job.position}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                    {job.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <ApplyNowModal role={job.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at AKDK Section */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-950">
              Life at AKDK
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              At{" "}
              <span className="font-bold text-red-600">
                AKDK Digital
              </span>
              , we believe in creativity, collaboration, and celebrating every
              achievement—big or small.
            </p>
          </div>

          <div className="relative group">
            <img
              src="/career.jpg"
              alt="Our Team"
              className="relative mx-auto border border-gray-200 w-full max-w-4xl"
            />
          </div>
        </div>
      </section>

      {/* General Application Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 text-gray-900">
              Didn't Find Your Role?
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Send us your resume and we'll reach out when a suitable position
              opens up.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 focus:border-red-600 p-4 rounded transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 focus:border-red-600 p-4 rounded transition-colors"
                />
                <input
                  type="url"
                  placeholder="Google Drive Resume URL"
                  className="w-full border border-gray-300 focus:border-red-600 p-4 rounded transition-colors"
                />
              </div>
              <textarea
                placeholder="Tell us about yourself and what role interests you..."
                className="w-full border border-gray-300 focus:border-red-600 p-4 rounded h-32 transition-colors"
              ></textarea>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 text-white font-bold py-4 hover:bg-red-700 transition-colors"
              >
                Submit Application
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-6">
              <Target className="w-4 h-4" />
              FAQ
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white border border-gray-200 p-8">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {[
                {
                  question: "Can I apply as a fresher or intern?",
                  answer:
                    "Absolutely! We welcome freshers, interns, and students with a passion for learning and building.",
                },
                {
                  question: "What does the hiring process look like?",
                  answer:
                    "Our process typically involves an application review, a short interview or task round, and a final discussion with our core team.",
                },
                {
                  question: "What should I include in my application?",
                  answer:
                    "Share your resume, portfolio or GitHub (if available), and a short note about why you want to join AKDK.",
                },
                {
                  question: "What technologies do you use at AKDK?",
                  answer:
                    "We primarily work with React, Tailwind CSS, Astro, Node.js, Prisma, and modern design tools like Figma.",
                },
                {
                  question: "What's the culture like at AKDK?",
                  answer:
                    "We're a small, passionate, and fast-moving team. We value transparency, creativity, and mutual respect.",
                },
                {
                  question: "How long do internships last?",
                  answer:
                    "Most internships last 6 to 8 months, with the option to extend based on performance and interest.",
                },
                {
                  question: "Are there growth or mentorship opportunities?",
                  answer:
                    "Yes! We actively mentor junior team members, offer learning resources, and encourage upskilling across roles.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-gray-200"
                >
                  <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-red-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-light text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </section>
  );
}
