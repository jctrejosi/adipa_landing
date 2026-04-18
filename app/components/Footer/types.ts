export type NewsletterForm = {
  name: string;
  email: string;
  frequency: string;
};

export type FooterProps = {
  logoSrc?: string;
  countries?: Country[];
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
    addressLink?: string;
  };
  bottomLinks?: FooterLink[];
  copyrightText?: string;
};

export type SocialLink = {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
};

export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type Country = {
  code: string;
  name: string;
  flag: string;
  globeIcon?: boolean;
};
