export type HeroSearchProps = {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  initialValue?: string;
  suggestions?: string[];
  onSearch?: (value: string) => void;
  className?: string;
};
