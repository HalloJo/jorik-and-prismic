import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import ButtonLink from "./ButtonLink";
import { SettingsDocument } from "../../prismicio-types";

const Header = async ({ settings }: { settings: SettingsDocument }) => {
  return (
    <header>
      Header
      <nav>
        <ul>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              {item.cta ? (
                <ButtonLink field={item.link}>{item.label}</ButtonLink>
              ) : (
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
