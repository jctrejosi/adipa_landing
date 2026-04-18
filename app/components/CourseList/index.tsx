"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  ShoppingCart,
  User,
  Search,
  X,
} from "lucide-react";
import { CourseCardProps, CourseListProps, SortValue } from "./types";

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
  if (!day || !month || !year) return 0;

  return new Date(year, month - 1, day).getTime();
};

const formatPrice = (value: string | number): string => {
  if (typeof value === "number") {
    return `$${value.toLocaleString("es-CL")} CLP`;
  }

  return value;
};

const CourseCard = ({
  course,
  detailButtonLabel,
  liveLabel,
  inProgressLabel,
  startLabel,
}: CourseCardProps) => {
  return (
    <div className="group">
      <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#704efd]/20 hover:shadow-xl">
        <div className="relative h-44 w-full overflow-hidden cursor-pointer">
          {course.imageUrl && (
            <img
              src={course.imageUrl}
              alt={course.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {course.isLive && (
            <div className="absolute bottom-3 right-3">
              <div className="relative flex items-center gap-1.5 rounded-full bg-gray-800/70 px-2.5 py-1 text-[11px] font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                {liveLabel}
              </div>
            </div>
          )}

          {course.rating != null && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-gray-800/70 px-2 py-1 text-[11px] text-white">
              <Star size={10} className="fill-yellow-400 text-yellow-400" />
              {course.rating}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3
            className="mb-2 overflow-hidden text-[14px] font-semibold leading-snug text-[#13013f]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              minHeight: "3.9em",
            }}
          >
            {course.title}
          </h3>

          {course.teacher && (
            <div className="mb-3 flex items-center gap-1.5 text-[12px] text-gray-500">
              <User size={20} className="flex-shrink-0 text-gray-500" />
              <span className="truncate">{course.teacher}</span>
            </div>
          )}

          <div className="mb-1 flex items-center gap-2 text-[12px] text-gray-500">
            <Calendar size={12} />
            {startLabel} {course.startDate}
            {course.isInProgress && (
              <span className="ml-auto font-medium text-green-500">
                {inProgressLabel}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {course.discount != null && (
              <div className="rounded bg-[#704efd] px-2 py-[2px] text-[11px] font-semibold text-white">
                -{course.discount}%
              </div>
            )}

            <div className="text-[14px] font-semibold text-[#13013f]">
              {formatPrice(course.discountedPrice ?? course.price)}
            </div>
          </div>

          {course.originalPrice != null && (
            <div className="mt-1 text-[12px] text-gray-400 line-through">
              {formatPrice(course.originalPrice)}
            </div>
          )}

          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-lg border border-[#704efd] py-2 text-[13px] font-semibold text-[#13013f] transition hover:bg-[#704efd] hover:text-white">
              {detailButtonLabel}
            </button>

            <button className="flex w-12 items-center justify-center rounded-lg bg-[#704efd] py-2 text-white transition hover:bg-[#5a3dd4]">
              <ShoppingCart size={14} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export const CourseList = ({
  courses,
  sortOptions,
  title = "Cursos que te permitirán potenciar tu carrera.",
  searchPlaceholder = "Buscar curso, docente, categoría...",
  noResultsText = "No se encontraron cursos para la búsqueda actual.",
  detailButtonLabel = "Ver detalle +",
  liveLabel = "En vivo",
  inProgressLabel = "• En progreso",
  startLabel = "Inicio :",
  allLabel = "Todos",
}: CourseListProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState<SortValue>("*");

  const selectedSort =
    sortOptions.find((o) => o.value === sortValue) ?? sortOptions[0];

  const filteredCourses = useMemo(() => {
    const query = normalizeText(searchTerm.trim());
    if (!query) return courses;

    return courses.filter((course) => {
      const searchableText = normalizeText(
        [
          course.title,
          course.description,
          course.teacher,
          course.category,
          course.modality,
        ]
          .filter(Boolean)
          .join(" ")
      );

      return searchableText.includes(query);
    });
  }, [courses, searchTerm]);

  const sortedCourses = useMemo(() => {
    const items = [...filteredCourses];

    if (sortValue === "*") return items;

    if (sortValue === "price-asc") {
      items.sort(
        (a, b) =>
          parsePrice(a.discountedPrice ?? a.price) -
          parsePrice(b.discountedPrice ?? b.price)
      );
    }

    if (sortValue === "price-desc") {
      items.sort(
        (a, b) =>
          parsePrice(b.discountedPrice ?? b.price) -
          parsePrice(a.discountedPrice ?? a.price)
      );
    }

    if (sortValue === "prox-asc") {
      items.sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));
    }

    if (sortValue === "prox-desc") {
      items.sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));
    }

    return items;
  }, [filteredCourses, sortValue]);

  return (
    <div className="w-full max-w-[1200px] p-4 font-sans mx-auto">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[28px] font-semibold leading-tight text-[#13013f] max-md:text-[22px]">
          {title}
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-[#13013f] transition hover:border-[#704efd] hover:bg-[#f8f9ff]"
          >
            {sortValue === "*" ? allLabel : selectedSort?.label ?? allLabel}
            {isDropdownOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 z-20 mt-2 min-w-[160px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setSortValue(opt.value);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm transition ${
                    sortValue === opt.value
                      ? "bg-[#704efd] text-white"
                      : "text-[#13013f] hover:bg-[#f3f4ff]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 transition focus-within:border-[#704efd]">
          <Search size={16} className="shrink-0 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm text-[#13013f] outline-none placeholder:text-gray-400"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="flex items-center justify-center text-gray-400 transition hover:text-[#13013f]"
              aria-label="Limpiar búsqueda"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="grid h-[70vh] md:h-[100vh] grid-cols-1 gap-5 overflow-y-auto pr-2 md:grid-cols-2 xl:grid-cols-3">
        {sortedCourses.length > 0 ? (
          sortedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              detailButtonLabel={detailButtonLabel}
              liveLabel={liveLabel}
              inProgressLabel={inProgressLabel}
              startLabel={startLabel}
            />
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">
            {noResultsText}
          </div>
        )}
      </div>
    </div>
  );
};
