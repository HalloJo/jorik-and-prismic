import { createClient } from "@/prismicio";
import { SliceContext } from "@/types/SliceContext";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<
  Content.CaseStudiesSlice,
  SliceContext
>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = async ({
  slice,
  context,
}: CaseStudiesProps): Promise<JSX.Element> => {
  const client = createClient();
  const caseStudies = await Promise.all(
    slice.primary.case.map(async (item) => {
      if (isFilled.contentRelationship(item.case_study)) {
        return await client.getByID<Content.CasePageDocument>(
          item.case_study.id,
          { lang: context.lang },
        );
      }
    }),
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicRichText field={slice.primary.heading} />
        <PrismicRichText field={slice.primary.body} />
      </div>
      <ul>
        {caseStudies.map(
          (caseStudy, index) =>
            caseStudy && (
              <li key={caseStudy.id}>
                <PrismicNextImage field={caseStudy.data.company_image} />
                <h3>
                  <PrismicText field={caseStudy.data.company} />
                </h3>
                <PrismicText field={caseStudy.data.description} />
                <PrismicNextLink document={caseStudy}>
                  Show case
                </PrismicNextLink>
              </li>
            ),
        )}
      </ul>
    </section>
  );
};

export default CaseStudies;
