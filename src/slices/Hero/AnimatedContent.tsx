"use client";

import ButtonLink from "@/components/ButtonLink";
import Typography from "@/components/Typography";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const AnimatedContent = ({ slice }: { slice: Content.HeroSlice }) => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__description, .hero__button, .hero__image",
          { opacity: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(".hero__heading", { y: 20 }, { y: 0, opacity: 1, duration: 1 });
      tl.fromTo(
        ".hero__description",
        { y: 20 },
        { y: 0, opacity: 1, duration: 0.75 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        { y: 20 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3",
      );
      tl.fromTo(".hero__image", { y: 20 }, { y: 0, opacity: 1, duration: 0.5 });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div
        className={`flex ${slice.variation === "reverse" ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="flex-1">
          <Typography
            type="h1"
            field={slice.primary.primary_heading}
            className="hero__heading text-orange-500 opacity-0"
          />
          {isFilled.richText(slice.primary.description) && (
            <div className="hero__description opacity-0">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </div>
        <div className="hero__button flex-1 opacity-0">
          <ButtonLink field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        </div>
      </div>
      <div className="hero__image opacity-0">
        <PrismicNextImage field={slice.primary.image} />
        <p className="font-bold text-red-600">{slice.primary.text_field}</p>
      </div>
    </div>
  );
};

export default AnimatedContent;
