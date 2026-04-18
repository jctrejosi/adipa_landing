import { Course } from "../components/CourseList/types";
import { FiltersState } from "../components/Filters/types";

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const parsePrice = (priceValue: string | number): number => {
  if (typeof priceValue === "number") return priceValue;
  const match = priceValue.match(/(\d+(?:\.\d+)?)/);
  return match ? parseInt(match[1].replace(/\./g, ""), 10) : 0;
};

const parseDate = (dateStr: string): number => {
  const parts = dateStr.split("/");
  if (parts.length !== 3) return 0;
  const [day, month, year] = parts.map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const applyFilters = (
  courses: Course[],
  state: FiltersState
): Course[] => {
  const { ranking, filters } = state;

  let result = courses.filter((course) =>
    Object.entries(filters).every(([groupTitle, selected]) => {
      if (!selected.length) return true;

      switch (groupTitle) {
        case "Área Temática":
          return selected.includes(course.areaTematica ?? "");

        case "Tipo de programa":
          return selected.includes(
            normalizeText(course.category ?? "").replace(/\s+/g, "-")
          );

        case "Modalidad":
          return selected.includes(
            normalizeText(course.modality ?? "").replace(/\s+/g, "-")
          );

        case "Rango de Precio": {
          const price = parsePrice(course.discountedPrice ?? course.price);

          return selected.some((r) => {
            if (r === "0-25000") return price < 25000;
            if (r === "25000-50000") return price >= 25000 && price <= 50000;
            if (r === "50000-100000") return price > 50000 && price <= 100000;
            if (r === "100000+") return price > 100000;
            return false;
          });
        }

        case "Rango de Horas": {
          const h = course.hours ?? 0;

          return selected.some((r) => {
            if (r === "0-4") return h >= 0 && h <= 4;
            if (r === "5-8") return h >= 5 && h <= 8;
            if (r === "9-16") return h >= 9 && h <= 16;
            if (r === "16+") return h > 16;
            return false;
          });
        }

        case "Rango de Descuento": {
          const d = course.discount ?? 0;

          return selected.some((r) => {
            if (r === "0-10") return d >= 0 && d <= 10;
            if (r === "11-20") return d >= 11 && d <= 20;
            if (r === "21-30") return d >= 21 && d <= 30;
            if (r === "30+") return d > 30;
            return false;
          });
        }

        default:
          return true;
      }
    })
  );

  switch (ranking) {
    case "recommended":
      result = [...result].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;

    case "newreleases":
      result = [...result].sort(
        (a, b) => parseDate(b.startDate) - parseDate(a.startDate)
      );
      break;

    case "flash_deals":
      result = result.filter((c) => (c.discount ?? 0) >= 30);
      break;

    case "topten":
      result = result.slice(0, 10);
      break;
  }

  return result;
};
