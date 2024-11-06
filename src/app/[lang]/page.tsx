import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { getLocales } from "@/utilities/getLocales";
import Header from "@/components/Header";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

type Params = {
  lang: string;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = params;
  const client = createClient();
  const home = await client.getByUID("page", "home", { lang });

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index({ params }: { params: Params }) {
  // The client queries content from the Prismic API
  const { lang } = params;
  const client = createClient();
  const home = await client.getByUID("page", "home", { lang });

  const locales = await getLocales(home, client);

  console.log(locales);

  return (
    <>
      <LanguageSwitcher locales={locales} />
      <Header lang={lang} locales={locales} />
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
