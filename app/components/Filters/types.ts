export type RankingOption = {
  label: string;
  value: string;
  icon?: string;
};

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterGroup = {
  title: string;
  options: FilterOption[];
};

export type FiltersProps = {
  rankings: RankingOption[];
  groups: FilterGroup[];
  onChange?: (data: {
    ranking: string;
    filters: Record<string, string[]>;
  }) => void;
};
