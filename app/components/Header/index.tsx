"use client";

import { Search, ShoppingCart, Menu, User, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { HeaderProps } from "./types";

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
    <header className="flex items-center justify-between h-[var(--header-height,70px)] px-[var(--header-padding-x,40px)] py-[var(--header-padding-y,10px)] bg-[var(--header-bg,#fff)] max-md:px-[15px] max-md:justify-start relative">
      {/* logo */}
      <div className="flex items-center gap-[20px]">
        <button
          onClick={onMenu}
          className="hidden max-md:block text-[var(--primary-color,#704efd)]"
        >
          <Menu size={24} />
        </button>

        <a href={logoHref}>
          <img
            src={logoSrc}
            alt="logo"
            className="block object-contain h-[var(--logo-height,36px)] max-md:h-[var(--logo-height-tablet,30px)] max-sm:h-[var(--logo-height-mobile,26px)]"
          />
        </a>
      </div>

      {/* search */}
      <div
        className={`
          flex items-center overflow-hidden border-2 border-[var(--border-color,#2cb7ff)] rounded-[var(--border-radius,5px)]
          w-[var(--width-search,546px)] h-[var(--width-search,36px)]
          max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-full max-md:p-[10px] max-md:bg-white max-md:z-10 max-md:border-0 max-md:items-center
          ${isSearchOpen ? "max-md:flex" : "max-md:flex"}
        `}
      >
        <input
          type="text"
          placeholder={searchPlaceholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.((e.target as HTMLInputElement).value);
            }
          }}
          className="
            flex-1 border-0 outline-none px-[20px] text-black text-[14px]
            max-md:hidden
            max-md:w-full max-md:border-2 max-md:border-[var(--border-color,#2cb7ff)] max-md:h-[34px] max-md:block
          "
        />

        <button
          onClick={() => {
            if (!isSearchOpen) setIsSearchOpen(true);
          }}
          className="flex items-center justify-center bg-[var(--primary-color,#2cb7ff)] px-[12px] py-[8px]"
        >
          <Search size={18} />
        </button>

        {isSearchOpen && (
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-2 flex items-center justify-center text-black"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* actions */}
      {!isSearchOpen && (
        <div className="flex items-center gap-[20px] max-md:gap-[10px]">
          <button
            onClick={onLogin}
            className="text-[var(--text-color,#1d1d1d)] font-bold flex items-center"
          >
            <span className="md:inline hidden">Inicia sesión</span>
            <User size={18} className="md:hidden" />
          </button>

          <button
            onClick={onRegister}
            className="text-[var(--text-color,#1d1d1d)] flex items-center"
          >
            <span className="md:inline hidden">Regístrate</span>
            <UserPlus size={18} className="md:hidden" />
          </button>

          <button
            onClick={onCartClick}
            className="relative text-[var(--cart-color,#704efd)]"
          >
            <ShoppingCart size={20} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-white text-[var(--badge-color,#704efd)] text-[12px]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
};
