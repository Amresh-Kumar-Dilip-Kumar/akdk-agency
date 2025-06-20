"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Briefcase, Users, Rocket, Smile } from "lucide-react";
import { PageHeader } from "@/components/landing/page-header2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CareerPage() {
  return (
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

      <div className="px-6 py-40 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-6">
            {[
              {
                title: "Frontend Developer",
                location: "Remote",
                type: "Full-time",
                description:
                  "Design and build engaging, user-friendly UI components using React, Tailwind, or any other modern technology of your choice—bring your creativity and preferred tools to craft impressive digital experiences.",
              },
              {
                title: "UI/UX Designer",
                location: "Raipur / Remote",
                type: "Internship",
                description:
                  "Create intuitive, visually appealing experiences tailored to client needs—whether you're skilled in UI/UX design tools, front-end frameworks, or prefer bringing your own creative process, your design thinking is what makes the difference.",
              },
              {
                title: "Backend Developer",
                location: "Remote",
                type: "Full-time",
                description:
                  "Build and maintain scalable, efficient backend systems using technologies like Node.js, databases, or any stack you're comfortable with—what matters most is writing clean, secure code that powers great user experiences.",
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
        </div>

        {/* Culture Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Life at AKDK</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            At AKDK, we believe in creativity, collaboration, and celebrating
            every achievement—big or small.
          </p>
          <img
            src="/team.webp"
            alt="Our Team"
            className="mx-auto rounded-xl shadow-md w-full max-w-3xl"
          />
        </div>

        <div className="max-w-3xl mx-auto mb-20">
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
        </div>

        <div className="max-w-3xl mx-auto ">
          <h2 className="text-3xl font-bold mb-4">FAQ's</h2>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Can I apply as a fresher or intern?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Absolutely! We welcome freshers, interns, and students with a
                  passion for learning and building.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                What does the hiring process look like?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our process typically involves an application review, a short
                  interview or task round, and a final discussion with our core
                  team.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                What should I include in my application?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Share your resume, portfolio or GitHub (if available), and a
                  short note about why you want to join AKDK.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                What technologies do you use at AKDK?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We primarily work with React, Tailwind CSS, Astro, Node.js,
                  Prisma, and modern design tools like Figma.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                What’s the culture like at AKDK?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We're a small, passionate, and fast-moving team. We value
                  transparency, creativity, and mutual respect.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                How long do internships last?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Most internships last 6 to 8 months, with the option to extend
                  based on performance and interest.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                Are there growth or mentorship opportunities?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Yes! We actively mentor junior team members, offer learning
                  resources, and encourage upskilling across roles.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
