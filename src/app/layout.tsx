import "./globals.css"
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
