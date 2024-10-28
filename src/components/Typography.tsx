import { KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

type TextType = "h1" | "h2" | "h3" | "h4" | "p";

type PrismicTextProps = {
  type: TextType;
  field: RichTextField | KeyTextField | string;
  className?: string;
};

const Typography = ({ type, field, className }: PrismicTextProps) => {
  const baseStyles = "text-gray-800";
  const typeStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    p: "text-base",
  };

  const combinedStyles = `${baseStyles} ${typeStyles[type]} ${className ?? ""}`;

  if (Array.isArray(field)) {
    return (
      <PrismicRichText
        field={field}
        components={{
          [type]: ({ children }: { children: React.ReactNode }) =>
            React.createElement(type, { className: combinedStyles }, children),
        }}
      />
    );
  } else {
    return React.createElement(type, { className: combinedStyles }, field);
  }
};

export default Typography;
