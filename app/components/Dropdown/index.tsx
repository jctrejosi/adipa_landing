"use client";

import { useState } from "react";
import type { DropdownProps } from "./types";

export const Dropdown = ({
  trigger,
  sections,
  variant = "simple",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* trigger */}
      <div className="cursor-pointer">{trigger}</div>

      {open && (
        <div
          className={
            variant === "mega"
              ? "absolute top-full left-0 flex gap-10 bg-white px-[30px] py-5 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-[50]"
              : "absolute top-full left-0 min-w-[220px] py-5 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] z-20"
          }
        >
          {sections.map((section, i) => (
            <div key={i} className="flex flex-col min-w-[160px]">
              {section.title && (
                <span className="text-[13px] font-semibold text-[#6c6c6c]">
                  {section.title}
                </span>
              )}

              {section.items.map((item, j) => (
                <a
                  key={j}
                  href={item.href}
                  className={`block px-5 py-[10px] text-[14px] leading-[22px] no-underline text-[var(--text-item-color,#828282)] font-normal hover:text-black ${
                    item.bold ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
