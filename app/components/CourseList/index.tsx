"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  Circle,
  Calendar,
  ShoppingCart,
  User,
} from "lucide-react";
import { Props } from "./types";

export const CourseList = ({ courses, sortOptions }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState<string>(() => {
    return sortOptions[0]?.value ?? "";
  });

  const selectedSort = sortOptions.find((o) => o.value === selectedValue) ??
    sortOptions[0] ?? { label: "Ordenar", value: "" };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 font-sans">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-[28px] max-md:text-[22px] font-semibold text-[#13013f] leading-tight">
          Cursos que te permitirán potenciar tu carrera.
        </h2>

        {/* dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg bg-white text-[#13013f] hover:border-[#704efd] hover:bg-[#f8f9ff] transition"
          >
            {selectedSort.label}
            {isDropdownOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[180px] bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSelectedValue(opt.value);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm transition ${
                    selectedSort.value === opt.value
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

      {/* label */}
      <div className="inline-block mb-6 text-base font-medium text-[#13013f] border-b-2 border-[#704efd] pb-3">
        Todos
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        {courses.map((course) => (
          <div key={course.id} className="group">
            <article className="bg-[var(--color-bg)] rounded-xl overflow-hidden shadow-sm border border-[var(--color-border)] flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-primary)]/20">
              {/* image */}
              <div className="relative w-full h-44 overflow-hidden cursor-pointer">
                {course.imageUrl && (
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* live badge */}
                {course.isLive && (
                  <div className="absolute bottom-3 right-3">
                    <div className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[11px] font-medium bg-gray-800/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      En vivo
                      <Circle size={10} className="ml-1 text-white/60" />
                    </div>
                  </div>
                )}

                {/* rating */}
                {course.rating != null && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-gray-800/70 px-2 py-1 rounded-full text-white text-[11px]">
                    <Star
                      size={10}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {course.rating}
                  </div>
                )}
              </div>

              {/* body */}
              <div className="p-4 flex flex-col flex-1">
                <h3
                  className="font-semibold text-[#13013f] text-[14px] leading-snug mb-2 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    minHeight: "3.9em", // 3 líneas (ajusta si cambias line-height)
                  }}
                >
                  {course.title}
                </h3>

                {/* teacher */}
                {course.teacher && (
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-500 mb-3">
                    <User size={20} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">{course.teacher}</span>
                  </div>
                )}

                {/* date */}
                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-1">
                  <Calendar size={12} />
                  Inicio : {course.startDate}
                  {course.isInProgress && (
                    <span className="ml-auto text-green-500 font-medium">
                      • En progreso
                    </span>
                  )}
                </div>

                {/* price */}
                <div className="flex items-center gap-2">
                  {/* badge descuento */}
                  {course.discount && (
                    <div className="text-[11px] px-2 py-[2px] rounded bg-[#704efd] text-white font-semibold">
                      -{course.discount}%
                    </div>
                  )}

                  {/* precio final */}
                  <div className="text-[14px] font-semibold text-[#13013f]">
                    $
                    {course.discountedPrice?.toLocaleString?.() ?? course.price}
                  </div>
                </div>

                {/* precio original */}
                {course.originalPrice && (
                  <div className="text-[12px] text-gray-400 line-through mt-1">
                    ${course.originalPrice.toLocaleString()}
                  </div>
                )}

                {/* actions */}
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2 rounded-lg text-[13px] font-semibold border border-[#704efd] text-[#13013f] hover:bg-[#704efd] hover:text-white transition">
                    Ver detalle +
                  </button>

                  <button className="w-12 flex items-center justify-center py-2 rounded-lg bg-[#704efd] text-white hover:bg-[#5a3dd4] transition">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};
