import { ReactNode } from "react";
import { SettingsDocument } from "../../prismicio-types";
import Header from "./Header";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Locale = {
  lang: string;
  lang_name: string;
  url: string;
};

type LayoutProps = {
  locales: Locale[];
  settings: SettingsDocument;
  children: ReactNode;
};

export function Layout({ locales, settings, children }: LayoutProps) {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 bg-slate-300">
        <Header settings={settings} />
        <LanguageSwitcher locales={locales} />
      </div>
      <div>{children}</div>
    </div>
  );
}
