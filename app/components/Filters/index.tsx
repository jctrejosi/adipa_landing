"use client";

import { useState } from "react";
import { FiltersProps } from "./types";

export const Filters = ({ rankings, groups, onChange }: FiltersProps) => {
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
    <div className="w-full text-[13px] md:text-[14px]">
      {/* rankings (radio) */}
      <div className="mb-5 flex flex-col gap-2">
        {rankings.map((item) => (
          <label
            key={item.value}
            className="flex cursor-pointer items-center gap-2 text-[var(--text-color,#13013f)]"
          >
            <input
              type="radio"
              name="rankings"
              value={item.value}
              checked={selectedRanking === item.value}
              onChange={() => handleRankingChange(item.value)}
              className="hidden"
            />

            <span
              className={`cursor-pointer transition-colors duration-200 ${
                selectedRanking === item.value
                  ? "font-semibold text-[var(--primary-color,#704efd)]"
                  : "text-[var(--text-color,#13013f)]"
              }`}
            >
              {item.label}
            </span>

            {item.icon && (
              <img src={item.icon} className="h-[18px] w-[18px]" alt="" />
            )}
          </label>
        ))}
      </div>

      {/* header filtros */}
      <div className="mb-3 flex items-center justify-between">
        <h4 className="m-0 font-semibold text-[var(--text-color,#13013f)]">
          Filtros
        </h4>

        <button
          onClick={clearAll}
          className="appearance-none border-0 bg-[#f3f4ff] px-0 py-0 text-[12px] text-[#704efd] cursor-pointer"
        >
          Borrar filtros
        </button>
      </div>

      {/* seleccionados */}
      <div className="mb-4 flex flex-wrap gap-2">
        {Object.entries(selectedFilters).map(([group, values]) =>
          values.map((val) => (
            <div
              key={`${group}-${val}`}
              className="flex items-center gap-1.5 rounded-[6px] bg-[var(--text-color,#13013f)] px-[10px] py-[6px] text-[11px] md:text-[12px] text-white"
            >
              <span>{val}</span>
              <span
                onClick={() => removeFilter(group, val)}
                className="cursor-pointer select-none"
              >
                ×
              </span>
            </div>
          ))
        )}
      </div>

      {/* groups */}
      {groups.map((group) => (
        <div key={group.title} className="mb-4">
          <div
            className="mb-2 flex cursor-pointer items-center justify-between font-semibold text-[var(--text-color,#13013f)]"
            onClick={() => toggleGroup(group.title)}
          >
            <span>{group.title}</span>
            <span>{openGroups[group.title] ? "▲" : "▼"}</span>
          </div>

          {openGroups[group.title] && (
            <div className="flex flex-col gap-1.5">
              {group.options.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-1.5 text-[var(--text-muted,#13013f)]"
                >
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[group.title]?.includes(opt.value) || false
                    }
                    onChange={() => handleCheckbox(group.title, opt.value)}
                    className="accent-[var(--primary-color,#6f4ef6)]"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
