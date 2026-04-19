"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
import { formatPrice, normalizeText, parsePrice, parseDate } from "./helpers";
import { defaultProps } from "./defaultProps";

/* subcomponent */

const CourseCard = ({
  course,
  detailButtonLabel,
  liveLabel,
  inProgressLabel,
  startLabel,
}: CourseCardProps) => {
  const titleId = `course-title-${course.id}`;
  const cardId = `course-card-${course.id}`;
  const infoId = `course-info-${course.id}`;

  return (
    <li className="group">
      <article
        id={cardId}
        aria-labelledby={titleId}
        aria-describedby={infoId}
        className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#704efd]/20 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
      >
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
                <span
                  className="h-1.5 w-1.5 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                <span>{liveLabel}</span>
              </div>
            </div>
          )}

          {course.rating != null && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-gray-800/70 px-2 py-1 text-[11px] text-white">
              <Star
                size={10}
                className="fill-yellow-400 text-yellow-400"
                aria-hidden="true"
              />
              <span aria-label={`Valoración ${course.rating} sobre 5`}>
                {course.rating}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3
            id={titleId}
            className="mb-2 overflow-hidden text-[14px] font-semibold leading-snug text-[#13013f] dark:text-gray-100"
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
            <div className="mb-3 flex items-center gap-1.5 text-[12px] text-gray-500 dark:text-gray-400">
              <User
                size={20}
                className="flex-shrink-0 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              />
              <span className="truncate">{course.teacher}</span>
            </div>
          )}

          <p
            id={infoId}
            className="mb-1 flex items-center gap-2 text-[12px] text-gray-500 dark:text-gray-400"
          >
            <Calendar size={12} aria-hidden="true" />
            <span>
              {startLabel} {course.startDate}
            </span>
            {course.isInProgress && (
              <span className="ml-auto font-medium text-green-500">
                {inProgressLabel}
              </span>
            )}
          </p>

          <div className="flex items-center gap-2">
            {course.discount != null && (
              <div
                className="rounded bg-[#704efd] px-2 py-[2px] text-[11px] font-semibold text-white"
                aria-label={`Descuento del ${course.discount} por ciento`}
              >
                -{course.discount}%
              </div>
            )}

            <div className="text-[14px] font-semibold text-[#13013f] dark:text-gray-100">
              {formatPrice(course.discountedPrice ?? course.price)}
            </div>
          </div>

          {course.originalPrice != null && (
            <div className="mt-1 text-[12px] text-gray-400 line-through dark:text-gray-500">
              {formatPrice(course.originalPrice)}
            </div>
          )}

          <div className="mt-3 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-lg border border-[#704efd] py-2 text-[13px] font-semibold text-[#13013f] transition hover:bg-[#704efd] hover:text-white dark:text-gray-100"
              aria-label={`${detailButtonLabel} de ${course.title}`}
            >
              {detailButtonLabel}
            </button>

            <button
              type="button"
              className="flex w-12 items-center justify-center rounded-lg bg-[#704efd] py-2 text-white transition hover:bg-[#5a3dd4]"
              aria-label={`Agregar ${course.title} al carrito`}
            >
              <ShoppingCart size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>
    </li>
  );
};

/* component */

export const CourseList = ({
  courses,
  sortOptions,
  onSearchChange,
  ...props
}: CourseListProps) => {
  const {
    title,
    searchPlaceholder,
    noResultsText,
    detailButtonLabel,
    liveLabel,
    inProgressLabel,
    startLabel,
    allLabel,
    externalSearch,
  } = {
    ...defaultProps,
    ...props,
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortValue, setSortValue] = useState<SortValue>("*");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedSort =
    sortOptions.find((o) => o.value === sortValue) ?? sortOptions[0];

  const filteredCourses = useMemo(() => {
    const query = normalizeText(externalSearch.trim());
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
  }, [courses, externalSearch]);

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

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  const focusOption = (index: number) => {
    const el = optionRefs.current[index];
    el?.focus();
  };

  const getCurrentOptionIndex = () =>
    Math.max(
      0,
      sortOptions.findIndex((opt) => opt.value === sortValue)
    );

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openDropdown();
      requestAnimationFrame(() => {
        focusOption(getCurrentOptionIndex());
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      openDropdown();
      requestAnimationFrame(() => {
        focusOption(getCurrentOptionIndex());
      });
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsDropdownOpen((v) => {
        const next = !v;
        if (next) {
          requestAnimationFrame(() => {
            focusOption(getCurrentOptionIndex());
          });
        }
        return next;
      });
    }

    if (e.key === "Escape") {
      closeDropdown();
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const lastIndex = sortOptions.length - 1;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index === lastIndex ? 0 : index + 1;
      focusOption(nextIndex);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index === 0 ? lastIndex : index - 1;
      focusOption(prevIndex);
    }

    if (e.key === "Home") {
      e.preventDefault();
      focusOption(0);
    }

    if (e.key === "End") {
      e.preventDefault();
      focusOption(lastIndex);
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeDropdown();
      triggerRef.current?.focus();
    }

    if (e.key === "Tab") {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      requestAnimationFrame(() => {
        focusOption(getCurrentOptionIndex());
      });
    }
  }, [isDropdownOpen, sortValue]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const root = triggerRef.current?.closest("[data-sort-root]");
      if (root && !root.contains(target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <section
      data-sort-root
      className="w-full max-w-[1200px] p-4 font-sans mx-auto"
      aria-labelledby="course-list-title"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h2
          id="course-list-title"
          className="text-[28px] font-semibold leading-tight text-[#13013f] max-md:text-[22px] dark:text-gray-100"
        >
          {title}
        </h2>

        <div className="relative">
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsDropdownOpen((v) => !v)}
            onKeyDown={handleTriggerKeyDown}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-[#13013f] transition hover:border-[#704efd] hover:bg-[#f8f9ff] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            aria-controls="course-sort-options"
          >
            {sortValue === "*" ? allLabel : selectedSort?.label ?? allLabel}
            {isDropdownOpen ? (
              <ChevronUp size={16} aria-hidden="true" />
            ) : (
              <ChevronDown size={16} aria-hidden="true" />
            )}
          </button>

          {isDropdownOpen && (
            <div
              id="course-sort-options"
              role="listbox"
              aria-label="Opciones de ordenamiento"
              className="absolute right-0 z-20 mt-2 min-w-[160px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800"
            >
              {sortOptions.map((opt, index) => (
                <button
                  key={opt.value}
                  ref={(el) => {
                    optionRefs.current[index] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={sortValue === opt.value}
                  onClick={() => {
                    setSortValue(opt.value);
                    setIsDropdownOpen(false);
                    triggerRef.current?.focus();
                  }}
                  onKeyDown={(e) => handleOptionKeyDown(e, index)}
                  className={`w-full px-4 py-2 text-left text-sm transition ${
                    sortValue === opt.value
                      ? "bg-[#704efd] text-white"
                      : "text-[#13013f] hover:bg-[#f3f4ff] dark:text-gray-300 dark:hover:bg-gray-700"
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
        <label htmlFor="course-search" className="sr-only">
          Buscar cursos
        </label>

        <div
          role="search"
          className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 transition focus-within:border-[#704efd] dark:border-gray-600 dark:bg-gray-800 dark:focus-within:border-[#704efd]"
        >
          <Search
            size={16}
            className="shrink-0 text-gray-400 dark:text-gray-500"
            aria-hidden="true"
          />
          <input
            id="course-search"
            type="text"
            value={externalSearch}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm text-[#13013f] outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
          {externalSearch && (
            <button
              type="button"
              onClick={() => onSearchChange?.("")}
              className="flex items-center justify-center text-gray-400 transition hover:text-[#13013f] dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Limpiar búsqueda"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <div
        className="grid h-[70vh] md:h-[100vh] grid-cols-1 gap-5 overflow-y-auto pr-2 md:grid-cols-2 xl:grid-cols-3"
        aria-live="polite"
        aria-busy={false}
      >
        {sortedCourses.length > 0 ? (
          <ul className="contents">
            {sortedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                detailButtonLabel={detailButtonLabel}
                liveLabel={liveLabel}
                inProgressLabel={inProgressLabel}
                startLabel={startLabel}
              />
            ))}
          </ul>
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
            {noResultsText}
          </div>
        )}
      </div>
    </section>
  );
};
