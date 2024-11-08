import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { asText } from "@prismicio/client";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("case_page", params.uid)
    .catch(() => notFound());

  return (
    <div>
      <PrismicText field={page.data.company} />
      <PrismicText field={page.data.description} />
      <PrismicNextImage field={page.data.company_image} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("case_page", params.uid)
    .catch(() => notFound());

  return {
    title: `${page.data.meta_title || asText(page.data.company) + " Case study"}`,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("case_page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
