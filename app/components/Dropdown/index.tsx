"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import type { DropdownProps } from "./types";

export const Dropdown = ({
  trigger,
  sections,
  variant = "simple",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={styles.trigger}>{trigger}</div>

      {open && (
        <div className={variant === "mega" ? styles.megaMenu : styles.dropdown}>
          {sections.map((section, i) => (
            <div key={i} className={styles.section}>
              {section.title && (
                <span className={styles.title}>{section.title}</span>
              )}

              {section.items.map((item, j) => (
                <a
                  key={j}
                  href={item.href}
                  className={item.bold ? styles.bold : ""}
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
