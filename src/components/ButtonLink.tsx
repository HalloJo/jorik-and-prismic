import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import React from "react";

const ButtonLink = ({
  className,
  prefetch,
  ...restProps
}: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      prefetch={prefetch ?? undefined}
      className={`${className} rounded-md bg-red-500 px-4 py-2 text-xl transition hover:bg-red-700`}
      {...restProps}
    />
  );
};

export default ButtonLink;
