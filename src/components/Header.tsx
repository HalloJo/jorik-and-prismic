import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import ButtonLink from "./ButtonLink";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

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
