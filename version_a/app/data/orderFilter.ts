import { SortOption } from "../components/CourseList/types";

export const orderFilter: SortOption[] = [
  { label: "Todos", value: "*" },
  { label: "Mayor Precio", value: "price-desc" },
  { label: "Menor Precio", value: "price-asc" },
  { label: "Más próximo", value: "prox-asc" },
  { label: "Menos próximo", value: "prox-desc" },
];
