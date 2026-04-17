"use client";

import { Search, ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
import styles from "./styles.module.css";

type HeaderProps = {
  logoSrc: string;
  logoHref?: string;

  searchPlaceholder?: string;
  onSearch?: (value: string) => void;

  onLogin?: () => void;
  onMenu?: () => void;
  onRegister?: () => void;
  onCartClick?: () => void;

  cartCount?: number;
};

export const Header = ({
  logoSrc,
  logoHref = "/",
  searchPlaceholder = "¿Qué quieres aprender?",
  onSearch,
  onMenu,
  onLogin,
  onRegister,
  onCartClick,
  cartCount = 0,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      {/* logo */}

      <div className={styles.logoContainer}>
        <button className={styles.btnMenu} onClick={onMenu}>
          <Menu size={24} />
        </button>

        <a href={logoHref}>
          <Image
            src={logoSrc}
            alt="logo"
            width={120}
            height={36}
            style={{ height: "36px", width: "auto" }}
          />
        </a>
      </div>

      {/* buscador */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={styles.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.((e.target as HTMLInputElement).value);
            }
          }}
        />
        <button
          className={styles.searchButton}
          onClick={(e) => {
            const input = e.currentTarget.previousSibling as HTMLInputElement;
            onSearch?.(input.value);
          }}
        >
          <Search size={18} />
        </button>
      </div>

      {/* acciones */}
      <div className={styles.actions}>
        <button className={styles.login} onClick={onLogin}>
          Iniciar sesión
        </button>

        <button className={styles.register} onClick={onRegister}>
          Regístrate
        </button>

        <button className={styles.cart} onClick={onCartClick}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </button>
      </div>
    </header>
  );
};
