"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Briefcase, Users, Rocket, Smile } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";

export default function CareerPage() {
  return (
    <>
      <section className="text-gray-900">
        <PageHeader
          heading={<>Careers at AKDK Digital</>}
          description={
            <>
              Join our passionate team in shaping the future of web development
              and digital innovation.
            </>
          }
        />

        {/* <Button
          size="lg"
          className="bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all mt-6"
          variant="default"
          onClick={() => (window.location.href = "/service")}
        >
          View Open Positions
        </Button> */}
      </section>

      <div className="px-6 py-40 max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Rocket className="text-red-600 w-6 h-6" />,
              title: "Innovative Projects",
              desc: "Work on cutting-edge digital solutions across industries.",
            },
            {
              icon: <Users className="text-red-600 w-6 h-6" />,
              title: "Creative Culture",
              desc: "Collaborate in a friendly, open, and learning-oriented environment.",
            },
            {
              icon: <Briefcase className="text-red-600 w-6 h-6" />,
              title: "Growth Opportunities",
              desc: "Advance your career with mentorship, training, and real-world challenges.",
            },
            {
              icon: <Smile className="text-red-600 w-6 h-6" />,
              title: "Flexible Work",
              desc: "Enjoy remote options, flexible timings, and work-life balance.",
            },
            {
              icon: <CheckCircle className="text-red-600 w-6 h-6" />,
              title: "Supportive Team",
              desc: "Be part of a team that supports, respects, and celebrates every win.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-6">
            {[
              {
                title: "Frontend Developer",
                location: "Remote",
                type: "Full-time",
                description:
                  "Build engaging UI components using React & Tailwind.",
              },
              {
                title: "UI/UX Designer",
                location: "Raipur / Remote",
                type: "Internship",
                description:
                  "Design intuitive experiences and visuals for our clients.",
              },
              {
                title: "Backend Developer",
                location: "Remote",
                type: "Full-time",
                description:
                  "Develop and maintain robust backend systems using Node.js and databases.",
              },
            ].map((job, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {job.location} • {job.type}
                  </p>
                  <p className="mb-4 text-gray-700">{job.description}</p>
                  <Button variant="third">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Life at AKDK</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            At AKDK, we believe in creativity, collaboration, and celebrating
            every achievement—big or small.
          </p>
          <img
            src="/team.webp"
            alt="Our Team"
            className="mx-auto rounded-xl shadow-md w-full max-w-3xl"
          />
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Didn’t find your role?</h2>
          <p className="text-gray-600 mb-6">
            Send us your resume and we’ll reach out when a suitable position
            opens up.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-md"
            />
            <textarea
              placeholder="Tell us about yourself..."
              className="w-full border p-3 rounded-md h-32"
            ></textarea>
            <Button variant="third" type="submit">
              Submit Application
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}
