"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { HeroSearchProps } from "./types";
import { defaultProps } from "./defaultProps";

export const HeroSearch = ({ onSearch, ...props }: HeroSearchProps) => {
  const { title, subtitle, placeholder, initialValue, suggestions, className } =
    {
      ...defaultProps,
      ...props,
    };
  const [value, setValue] = useState(initialValue);

  const canSearch = useMemo(() => value.trim().length > 0, [value]);

  const handleSearch = (nextValue?: string) => {
    const searchValue = (nextValue ?? value).trim();
    if (!searchValue) return;
    onSearch?.(searchValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    onSearch?.(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <section
      aria-labelledby="hero-title"
      className={`w-full bg-[var(--hero-bg,#6f4ef6)] text-white py-[clamp(40px,6vw,90px)] px-[clamp(16px,4vw,32px)] ${className}`}
    >
      <div className="max-w-[var(--inner-max-width,1200px)] mx-auto flex flex-col items-center text-center">
        {/* title */}
        <h1
          id="hero-title"
          className="m-0 text-[36px] leading-[1.1] font-bold tracking-[-0.02em] max-md:text-[1.7rem]"
        >
          {title}
        </h1>

        {/* subtitle */}
        <p className="mt-[18px] max-w-[920px] text-[var(--subtitle-size,15px)] leading-[1.6] text-[rgba(255,255,255,0.92)] max-md:text-[0.95rem] max-md:mt-[14px] max-md:leading-[1.5] max-md:max-w-[760px]">
          {subtitle}
        </p>

        {/* search box */}
        <form
          role="search"
          onSubmit={handleSubmit}
          className="relative w-[min(100%,600px)] mt-[50px] flex items-center gap-[10px] border-b border-[rgba(255,255,255,0.55)] max-md:mt-[30px] max-md:w-[min(100%,560px)] max-sm:w-full max-sm:gap-[10px]"
        >
          {/* caret */}
          <span
            aria-hidden="true"
            className={`absolute left-[10px] bottom-[18px] w-[2px] h-[26px] bg-white/95 pointer-events-none
              ${value ? "opacity-0" : "animate-[blink_1s_step-end_infinite]"}
            `}
          />
          <input
            id="hero-search-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            aria-label="Buscar cursos"
            className="flex-1 min-w-0 bg-transparent outline-none border-none text-white text-[18px] font-bold px-[10px] max-md:text-[16px] max-sm:text-[15px] max-sm:pl-[24px]"
          />

          <button
            type="submit"
            disabled={!canSearch}
            aria-label="Buscar"
            className="w-[40px] h-[40px] flex items-center justify-center text-white transition-transform duration-200 hover:-translate-y-[1px] disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none max-md:w-[50px] max-md:h-[50px] max-sm:w-[44px] max-sm:h-[44px]"
          >
            <Search size={22} />
          </button>
        </form>

        {/* chips */}
        <div
          className="mt-[34px] flex flex-wrap justify-center gap-[10px] w-full max-md:mt-[28px] max-sm:gap-[8px] max-sm:mt-[24px]"
          role="list"
          aria-label="Sugerencias de búsqueda"
        >
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSuggestionClick(s)}
              className="bg-white/30 border border-white/75 text-white text-[14px] max-sm:text-[13px] px-[12px] py-[6px] max-sm:px-[10px] rounded-[8px] leading-none cursor-pointer transition-all hover:bg-white/10 hover:-translate-y-[1px]"
              role="listitem"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* keyframes blink */}
      <style jsx>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
