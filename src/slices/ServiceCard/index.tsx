import Typography from "@/components/Typography";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceCard`.
 */
export type ServiceCardProps = SliceComponentProps<Content.ServiceCardSlice>;

/**
 * Component for "ServiceCard" Slices.
 */
const ServiceCard = ({ slice }: ServiceCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.icon} />
      <Typography type={"h3"} field={slice.primary.title} />
      <Typography type={"p"} field={slice.primary.description} />
    </section>
  );
};

export default ServiceCard;
