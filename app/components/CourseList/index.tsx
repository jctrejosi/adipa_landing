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
      <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-[#704efd]/20">
        <div className="relative w-full h-44 overflow-hidden cursor-pointer">
          {course.imageUrl && (
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {course.isLive && (
            <div className="absolute bottom-3 right-3">
              <div className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[11px] font-medium bg-gray-800/70">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {liveLabel}
              </div>
            </div>
          )}

          {course.rating != null && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-gray-800/70 px-2 py-1 rounded-full text-white text-[11px]">
              <Star size={10} className="fill-yellow-400 text-yellow-400" />
              {course.rating}
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3
            className="font-semibold text-[#13013f] text-[14px] leading-snug mb-2 overflow-hidden"
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
            <div className="flex items-center gap-1.5 text-[12px] text-gray-500 mb-3">
              <User size={20} className="text-gray-500 flex-shrink-0" />
              <span className="truncate">{course.teacher}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-1">
            <Calendar size={12} />
            {startLabel} {course.startDate}
            {course.isInProgress && (
              <span className="ml-auto text-green-500 font-medium">
                {inProgressLabel}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {course.discount != null && (
              <div className="text-[11px] px-2 py-[2px] rounded bg-[#704efd] text-white font-semibold">
                -{course.discount}%
              </div>
            )}

            <div className="text-[14px] font-semibold text-[#13013f]">
              {formatPrice(course.discountedPrice ?? course.price)}
            </div>
          </div>

          {course.originalPrice != null && (
            <div className="text-[12px] text-gray-400 line-through mt-1">
              {formatPrice(course.originalPrice)}
            </div>
          )}

          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 rounded-lg text-[13px] font-semibold border border-[#704efd] text-[#13013f] hover:bg-[#704efd] hover:text-white transition">
              {detailButtonLabel}
            </button>

            <button className="w-12 flex items-center justify-center py-2 rounded-lg bg-[#704efd] text-white hover:bg-[#5a3dd4] transition">
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
          parsePrice((a.discountedPrice ?? a.price) as string | number) -
          parsePrice((b.discountedPrice ?? b.price) as string | number)
      );
    }

    if (sortValue === "price-desc") {
      items.sort(
        (a, b) =>
          parsePrice((b.discountedPrice ?? b.price) as string | number) -
          parsePrice((a.discountedPrice ?? a.price) as string | number)
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
    <div className="w-full max-w-[1200px] mx-auto p-4 font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h2 className="text-[28px] max-md:text-[22px] font-semibold text-[#13013f] leading-tight">
          {title}
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg bg-white text-[#13013f] hover:border-[#704efd] hover:bg-[#f8f9ff] transition"
          >
            {selectedSort?.label ?? "Todos"}
            {isDropdownOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
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
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 focus-within:border-[#704efd] transition">
          <Search size={16} className="text-gray-400 shrink-0" />
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
              className="flex items-center justify-center text-gray-400 hover:text-[#13013f] transition"
              aria-label="Limpiar búsqueda"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-h-[100vh] overflow-y-auto pr-2">
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
