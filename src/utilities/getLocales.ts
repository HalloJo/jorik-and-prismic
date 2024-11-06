// ./src/utils/getLocales.ts

import { Client, Content } from "@prismicio/client";

export async function getLocales(
  doc: Content.AllDocumentTypes,
  client: Client<Content.AllDocumentTypes>,
) {
  const [repository, altDocs] = await Promise.all([
    client.getRepository(),
    doc.alternate_languages.length > 0
      ? client.getAllByIDs(
          doc.alternate_languages.map((altLang) => altLang.id),
          {
            lang: "*",
            // Exclude all fields to speed up the query.
            fetch: `${doc.type}.__nonexistent-field__`,
          },
        )
      : Promise.resolve([]),
  ]);

  const altDocsMap = altDocs.reduce(
    (acc, altDoc) => {
      acc[altDoc.lang] = altDoc;
      return acc;
    },
    {} as Record<string, Content.AllDocumentTypes>,
  );

  return repository.languages.map((lang) => {
    const page = lang.id === doc.lang ? doc : altDocsMap[lang.id];

    return {
      lang: lang.id,
      url: page?.url || `/${lang.id}`, // Use the URL if page exists, or a default path
      lang_name: lang.name,
    };
  });
}
