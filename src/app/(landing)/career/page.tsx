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
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <Rocket className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200 group-hover:scale-105`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <Briefcase className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
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
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-red-200"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-8">
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
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${job.color} text-white rounded-full text-sm font-bold uppercase tracking-wide mt-4 lg:mt-0`}
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Life at AKDK
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              At{" "}
              <span className="font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                AKDK Digital
              </span>
              , we believe in creativity, collaboration, and celebrating every
              achievement—big or small.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="/career.jpg"
              alt="Our Team"
              className="relative mx-auto rounded-3xl shadow-2xl w-full max-w-4xl group-hover:scale-105 transition-transform duration-500"
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

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-2 border-gray-200 focus:border-red-400 p-4 rounded-xl transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-2 border-gray-200 focus:border-red-400 p-4 rounded-xl transition-colors duration-300"
                />
                <input
                  type="url"
                  placeholder="Google Drive Resume URL"
                  className="w-full border-2 border-gray-200 focus:border-red-400 p-4 rounded-xl transition-colors duration-300"
                />
              </div>
              <textarea
                placeholder="Tell us about yourself and what role interests you..."
                className="w-full border-2 border-gray-200 focus:border-red-400 p-4 rounded-xl h-32 transition-colors duration-300"
              ></textarea>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl"
              >
                Submit Application
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
              <Target className="w-8 h-8 text-red-600 mx-2" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-pink-500 ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
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
