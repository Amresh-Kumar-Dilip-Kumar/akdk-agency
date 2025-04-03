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
        <h2 className="mb-8 font-heading font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-black text-center ">
          Our
          <span className="text-red-600 ml-2">Services</span>
        </h2>
        <p className="max-w-5xl mx-auto mb-8 text-lg sm:text-lg md:text-xl leading-relaxed text-gray-600  text-center">
          At AKDK Digital, we offer a range of web app services designed to meet
          your business needs. Our team of expert developers is dedicated to
          delivering custom solutions, seamless upgrades, and ongoing support to
          ensure your web applications are always performing at their best.
          Discover how we can help you achieve your digital goals.
        </p>
      </section>
      <div className="p-5"></div>
      <Container className="mt-16">
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
            <ListItem title="Web development">
              We specializes in crafting beautiful, high quality marketing
              pages. The rest of the website will be a shell that uses lorem
              ipsum everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce & CMS">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="SEO">
              At Studio we understand the importance of having a robust and
              customized CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customized CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </div>
  );
}
