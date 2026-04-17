"use client";

import { useState } from "react";
import styles from "./styles.module.css";

type RankingOption = {
  label: string;
  value: string;
  icon?: string;
};

type FilterOption = {
  label: string;
  value: string;
};

type FilterGroup = {
  title: string;
  options: FilterOption[];
};

type Props = {
  rankings: RankingOption[];
  groups: FilterGroup[];
  onChange?: (data: {
    ranking: string;
    filters: Record<string, string[]>;
  }) => void;
};

export const Filters = ({ rankings, groups, onChange }: Props) => {
  const [selectedRanking, setSelectedRanking] = useState<string>("*");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleRankingChange = (value: string) => {
    setSelectedRanking(value);
    onChange?.({ ranking: value, filters: selectedFilters });
  };

  const handleCheckbox = (group: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[group] || [];
      const exists = current.includes(value);

      const updated = exists
        ? current.filter((v) => v !== value)
        : [...current, value];

      const newState = { ...prev, [group]: updated };

      onChange?.({ ranking: selectedRanking, filters: newState });

      return newState;
    });
  };

  const removeFilter = (group: string, value: string) => {
    handleCheckbox(group, value);
  };

  const clearAll = () => {
    setSelectedFilters({});
    setSelectedRanking("*");
    onChange?.({ ranking: "*", filters: {} });
  };

  return (
    <div className={styles.container}>
      {/* rankings (radio) */}
      <div className={styles.rankings}>
        {rankings.map((item) => (
          <label key={item.value} className={styles.radio}>
            <input
              type="radio"
              name="rankings"
              value={item.value}
              checked={selectedRanking === item.value}
              onChange={() => handleRankingChange(item.value)}
              className={styles.radioInput}
            />
            <span
              className={
                selectedRanking === item.value ? styles.active : styles.label
              }
            >
              {item.label}
            </span>

            {item.icon && (
              <img src={item.icon} className={styles.icon} alt="" />
            )}
          </label>
        ))}
      </div>

      {/* header filtros */}
      <div className={styles.header}>
        <h4>Filtros</h4>
        <button onClick={clearAll}>Borrar filtros</button>
      </div>

      {/* seleccionados */}
      <div className={styles.selecteds}>
        {Object.entries(selectedFilters).map(([group, values]) =>
          values.map((val) => (
            <div key={val} className={styles.tag}>
              {val}
              <span onClick={() => removeFilter(group, val)}>×</span>
            </div>
          ))
        )}
      </div>

      {/* groups */}
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <div
            className={styles.groupHeader}
            onClick={() => toggleGroup(group.title)}
          >
            {group.title}
            <span>{openGroups[group.title] ? "▲" : "▼"}</span>
          </div>

          {openGroups[group.title] && (
            <div className={styles.options}>
              {group.options.map((opt) => (
                <label key={opt.value} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[group.title]?.includes(opt.value) || false
                    }
                    onChange={() => handleCheckbox(group.title, opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
