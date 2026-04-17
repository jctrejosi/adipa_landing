/* eslint-disable @next/next/no-img-element */
"use client";

import { Search, ShoppingCart, Menu, User, UserPlus, X } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* logo */}

      <div className={styles.logoContainer}>
        <button className={styles.btnMenu} onClick={onMenu}>
          <Menu size={24} />
        </button>

        <a href={logoHref}>
          <img src={logoSrc} alt="logo" className={styles.logo} />
        </a>
      </div>

      {/* buscador */}
      <div
        className={`${styles.searchContainer} ${
          isSearchOpen ? styles.searchOpen : ""
        }`}
      >
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
          onClick={() => {
            if (!isSearchOpen) {
              setIsSearchOpen(true);
              return;
            }
          }}
        >
          <Search size={18} />
        </button>

        {/* botón cerrar */}
        {isSearchOpen && (
          <button
            className={styles.closeButton}
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* acciones */}
      {!isSearchOpen && (
        <div className={styles.actions}>
          {/* login */}
          <button className={styles.login} onClick={onLogin}>
            <span className={styles.textDesktop}>Iniciar sesión</span>
            <User className={styles.iconMobile} />
          </button>

          {/* register */}
          <button className={styles.register} onClick={onRegister}>
            <span className={styles.textDesktop}>Regístrate</span>
            <UserPlus className={styles.iconMobile} />
          </button>

          {/* carrito */}
          <button className={styles.cart} onClick={onCartClick}>
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>
        </div>
      )}
    </header>
  );
};
