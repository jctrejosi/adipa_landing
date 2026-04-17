"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import styles from "./styles.module.css";

type HeroSearchProps = {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  initialValue?: string;
  suggestions?: string[];
  onSearch?: (value: string) => void;
  className?: string;
};

export const HeroSearch = ({
  title = "Cursos de Psicología con Certificado en 2026",
  subtitle = "Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a través de nuestros cursos y diplomados.",
  placeholder = "",
  initialValue = "",
  suggestions = ["Autismo", "Wisc", "Ados", "Trauma", "ADI-R", "WAIS", "Peers"],
  onSearch,
  className = "",
}: HeroSearchProps) => {
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

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.searchBox}>
          <span className={styles.caret} aria-hidden="true" />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className={styles.input}
            placeholder={placeholder}
            aria-label="Buscar cursos"
          />

          <button
            type="button"
            className={styles.searchButton}
            onClick={() => handleSearch()}
            aria-label="Buscar"
            disabled={!canSearch}
          >
            <Search size={22} />
          </button>
        </div>

        <div className={styles.chips} aria-label="Sugerencias de búsqueda">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className={styles.chip}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
