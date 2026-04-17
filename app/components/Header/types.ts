export type HeaderProps = {
  logoSrc: string;
  logoHref?: string;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  onLogin?: () => void;
  onMenu?: () => void;
  onRegister?: () => void;
  onCartClick?: () => void;
  cartCount?: number;
};
