export type DropdownItem = {
  label: string;
  href?: string;
  bold?: boolean;
};

export type DropdownSection = {
  title?: string;
  items: DropdownItem[];
};

export type DropdownProps = {
  trigger: React.ReactNode;
  sections: DropdownSection[];
  variant?: "simple" | "mega";
};
