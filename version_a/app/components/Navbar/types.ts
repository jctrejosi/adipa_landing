export type SectionItem = {
  label: string;
  href: string;
  bold?: boolean;
};

export type SectionGroup = {
  title?: string;
  items: SectionItem[];
};

export type NavbarProps = {
  iconWhatsapp: string;
  mobileOpen?: boolean;
  onClose?: () => void;
  discoverSections: SectionGroup[];
  resourcesSections: SectionGroup[];
};
