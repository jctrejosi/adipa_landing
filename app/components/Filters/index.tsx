"use client";

import { useState } from "react";
import { FiltersProps } from "./types";

export const Filters = ({ rankings, groups, onChange }: FiltersProps) => {
  const [selectedRanking, setSelectedRanking] = useState<string>("*");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const [showRankings, setShowRankings] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleRankingChange = (value: string) => {
    setSelectedRanking(value);
    onChange?.({ ranking: value, filters: selectedFilters });
    setShowRankings(false);
  };

  const handleCheckbox = (group: string, value: string) => {
    const current = selectedFilters[group] || [];
    const exists = current.includes(value);

    const updated = exists
      ? current.filter((v) => v !== value)
      : [...current, value];

    const newState = {
      ...selectedFilters,
      [group]: updated,
    };

    setSelectedFilters(newState);

    onChange?.({ ranking: selectedRanking, filters: newState });
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
    <div className="w-full lg:pt-6 text-[13px] md:text-[14px] lg:overflow-y-auto">
      <div className="mb-4 flex flex-col gap-2 lg:hidden">
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowRankings((prev) => !prev);
              setShowFilters(false);
            }}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left font-medium text-[var(--text-color,#13013f)] shadow-sm hover:bg-gray-50"
          >
            <span>Rankings</span>
            <span>{showRankings ? "▲" : "▼"}</span>
          </button>

          {showRankings && (
            <div className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
              <div className="flex flex-col gap-0 p-2">
                {rankings.map((item) => (
                  <label
                    key={item.value}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-[var(--text-color,#13013f)] hover:bg-gray-50"
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
                      <img
                        src={item.icon}
                        className="h-[18px] w-[18px]"
                        alt=""
                      />
                    )}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowFilters((prev) => !prev);
              setShowRankings(false);
            }}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left font-medium text-[var(--text-color,#13013f)] shadow-sm hover:bg-gray-50"
          >
            <span>Filtros</span>
            <span>{showFilters ? "▲" : "▼"}</span>
          </button>

          {showFilters && (
            <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="m-0 font-semibold text-[var(--text-color,#13013f)]">
                    Filtros
                  </h4>

                  <button
                    type="button"
                    onClick={clearAll}
                    className="cursor-pointer border-0 bg-[#f3f4ff] px-0 py-0 text-[12px] text-[#704efd]"
                  >
                    Borrar filtros
                  </button>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {Object.entries(selectedFilters).map(([group, values]) =>
                    values.map((val) => (
                      <div
                        key={`${group}-${val}`}
                        className="flex items-center gap-1.5 rounded-[6px] bg-[var(--text-color,#13013f)] px-[10px] py-[6px] text-[11px] text-white md:text-[12px]"
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
                                selectedFilters[group.title]?.includes(
                                  opt.value
                                ) || false
                              }
                              onChange={() =>
                                handleCheckbox(group.title, opt.value)
                              }
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
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:block">
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

        <div className="mb-3 flex items-center justify-between">
          <h4 className="m-0 font-semibold text-[var(--text-color,#13013f)]">
            Filtros
          </h4>

          <button
            type="button"
            onClick={clearAll}
            className="cursor-pointer border-0 bg-[#f3f4ff] px-0 py-0 text-[12px] text-[#704efd]"
          >
            Borrar filtros
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([group, values]) =>
            values.map((val) => (
              <div
                key={`${group}-${val}`}
                className="flex items-center gap-1.5 rounded-[6px] bg-[var(--text-color,#13013f)] px-[10px] py-[6px] text-[11px] text-white md:text-[12px]"
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

        <div className="max-h-[80vh] overflow-y-auto pr-2">
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
                          selectedFilters[group.title]?.includes(opt.value) ||
                          false
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
      </div>
    </div>
  );
};
