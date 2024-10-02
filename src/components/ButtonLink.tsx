import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import React from "react";

const ButtonLink = ({ className, ...restProps }: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      className={`${className}, rounded-md bg-red-500 px-4 py-2 transition hover:bg-red-700`}
      {...restProps}
    />
  );
};

export default ButtonLink;
