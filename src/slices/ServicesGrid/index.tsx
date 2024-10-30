import ButtonLink from "@/components/ButtonLink";
import Typography from "@/components/Typography";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesGrid`.
 */
export type ServicesGridProps = SliceComponentProps<Content.ServicesGridSlice>;

/**
 * Component for "ServicesGrid" Slices.
 */
const ServicesGrid = ({ slice }: ServicesGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <h1>{slice.primary.title}</h1>
        <p>{slice.primary.description}</p>
      </div>
      <ul>
        {slice.primary.service_card.map((item) => (
          <li key={item.service_title}>
            <PrismicNextImage field={item.icon} />
            <Typography type={"h3"} field={item.service_title} />
            <Typography type={"p"} field={item.service_description} />
          </li>
        ))}
      </ul>
      <ButtonLink field={slice.primary.cta_link}>
        {slice.primary.cta_label}
      </ButtonLink>
    </section>
  );
};

export default ServicesGrid;
