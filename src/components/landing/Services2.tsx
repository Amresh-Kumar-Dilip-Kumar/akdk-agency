import React from "react";
import { SectionIntro } from "@/components/landing/services2components/SectionIntro";
import { Container } from "@/components/landing/services2components/Container";
import { FadeIn } from "@/components/landing/services2components/FadeIn";
import { List, ListItem } from "@/components/landing/services2components/List";
import { StylizedImage } from "@/components/landing/services2components/StylizedImage";

export default function Services2() {
  return (
    <div className="mb-14">
      <section className="max-w-[1440px] mx-auto pt-8">
        <h2 className="mb-8 font-heading font-bold text-4xl md:text-4xl lg:text-5xl text-black text-center ">
          Our
          <span className="text-red-600 ml-2">Services</span>
        </h2>
        <p className="max-w-5xl mx-auto mb-8 text-lg  md:text-xl leading-relaxed text-gray-700  text-center">
          At <strong>AKDK Digital</strong> , we offer a range of web app
          services designed to meet your business needs. Our team of expert
          developers is dedicated to delivering custom solutions, seamless
          upgrades, and ongoing support to ensure your web applications are
          always performing at their best. Discover how we can help you achieve
          your digital goals.
        </p>
      </section>
      <div className="p-5"></div>
      <Container className="mt-12">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="/service.webp"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website development">
              We craft bespoke digital experiences that captivate audiences and
              drive results through user-friendly websites and seamless web
              solutions. Our expertise blends creativity, technology, and
              strategy to elevate your brand online.
            </ListItem>
            <ListItem title="Mobile development">
              We create captivating digital experiences with user-friendly
              websites and seamless web solutions. Our blend of creativity,
              technology, and strategy ensures a strong online presence for your
              brand.
            </ListItem>
            <ListItem title="E-commerce & CMS">
              At AKDK digital delivers exceptional E-commerce and CMS solutions,
              making content management and online selling effortless. Our
              secure, scalable platforms enhance performance, boost engagement,
              and drive growth.
            </ListItem>
            <ListItem title="SEO">
              Our SEO services enhance visibility, attract more visitors, and
              boost search rankings with proven strategies like keyword
              optimization and technical SEO. We help businesses reach the right
              audience and grow online effectively.
            </ListItem>
            <ListItem title="Package Resources">
              We optimize your website or app with expert analysis, ensuring
              seamless user experience, faster load times, and better
              engagement. Our data-driven strategies boost visibility,
              conversions, and keep you ahead of the competition.
            </ListItem>
          </List>
        </div>
      </Container>
    </div>
  );
}
