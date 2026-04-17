export type Course = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  progress?: string;
  rating?: number;
  price: string;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
  isLive: boolean;
  isInProgress: boolean;
  hours: number;
  teacher: string;
  imageUrl: string;
  url: string;
  category: string;
  modality: string;
};

export type SortOption = {
  label: string;
  value: string;
};

export type Props = {
  courses: Course[];
  sortOptions: SortOption[];
  onViewDetails?: (courseId: string) => void;
  onAddToCart?: (courseId: string) => void;
};
