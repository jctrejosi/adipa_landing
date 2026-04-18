export type SortValue =
  | "*"
  | "price-desc"
  | "price-asc"
  | "prox-asc"
  | "prox-desc";

export type SortOption = {
  label: string;
  value: SortValue;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  progress?: string;
  rating?: number;
  price: string | number;
  originalPrice?: string | number;
  discountedPrice?: string | number;
  discount?: number;
  isLive?: boolean;
  isInProgress?: boolean;
  hours?: number;
  teacher?: string;
  imageUrl?: string;
  url?: string;
  category?: string;
  modality?: string;
  areaTematica?: string;
  isPresale?: boolean;
};

export type CourseListProps = {
  courses: Course[];
  sortOptions: SortOption[];
  title?: string;
  searchPlaceholder?: string;
  allLabel?: string;
  noResultsText?: string;
  detailButtonLabel?: string;
  liveLabel?: string;
  inProgressLabel?: string;
  startLabel?: string;
  externalSearch?: string;
  onSearchChange?: (value: string) => void;
};

export type CourseCardProps = {
  course: Course;
  detailButtonLabel: string;
  liveLabel: string;
  inProgressLabel: string;
  startLabel: string;
};
