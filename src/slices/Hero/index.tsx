import ButtonLink from "@/components/ButtonLink";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container bg-white"
    >
      <h1 className="text-3xl font-extrabold">
        {slice.primary.primary_heading}
      </h1>
      <PrismicRichText field={slice.primary.description} />
      <ButtonLink field={slice.primary.button_link}>
        {slice.primary.button_label}
      </ButtonLink>
      <PrismicNextImage field={slice.primary.image} />
      <p className="font-bold text-red-600">{slice.primary.text_field}</p>
    </section>
  );
};

export default Hero;
