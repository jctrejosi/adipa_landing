"use client";

import { Search, ShoppingCart, Menu, User, UserPlus, X } from "lucide-react";
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

  const handleSearch = (value: string) => {
    onSearch?.(value);
  };

  return (
    <header
      className="relative flex items-center justify-between h-[70px] px-4 lg:px-10 bg-white"
      style={
        {
          "--primary-color": "#704efd",
          "--border-color": "#2cb7ff",
        } as React.CSSProperties
      }
    >
      {/* Logo + menú hamburguesa (solo móvil) */}
      <div className="flex items-center gap-5">
        <button
          onClick={onMenu}
          className="block lg:hidden text-[#704efd]"
          aria-label="Menú"
        >
          <Menu size={24} />
        </button>
        <a href={logoHref}>
          <img
            src={logoSrc}
            alt="logo"
            className="h-[30px] lg:h-[36px] w-auto object-contain"
          />
        </a>
      </div>

      {/* Buscador: en escritorio es estático; en móvil se transforma */}
      <div
        className={`
          flex items-center
          lg:border-2 lg:border-[#2cb7ff] lg:rounded-md lg:w-[546px] lg:h-[36px]
          ${
            isSearchOpen
              ? "absolute left-0 top-0 w-full h-full z-20 bg-white px-4 flex items-center gap-2"
              : "ml-auto mr-4 lg:mx-0"
          }
        `}
      >
        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={`
            flex-1 border-none outline-none text-black text-sm
            ${
              isSearchOpen
                ? "block w-full border-2 border-[#2cb7ff] rounded-md h-[34px] px-3"
                : "hidden lg:block lg:px-5"
            }
          `}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch((e.target as HTMLInputElement).value);
            }
          }}
        />

        {/* Botón lupa (siempre visible) */}
        <button
          className="bg-[#2cb7ff] text-white p-2 rounded-md flex items-center justify-center lg:rounded-none lg:rounded-r-md"
          onClick={() => {
            if (!isSearchOpen) {
              setIsSearchOpen(true);
              // Opcional: focus automático al input
              setTimeout(() => {
                const input = document.querySelector(
                  'input[type="text"]'
                ) as HTMLInputElement;
                input?.focus();
              }, 0);
            } else {
              // Si ya está abierto y se hace clic, se puede buscar el valor actual
              const input = document.querySelector(
                'input[type="text"]'
              ) as HTMLInputElement;
              if (input) handleSearch(input.value);
            }
          }}
          aria-label="Buscar"
        >
          <Search size={18} />
        </button>

        {/* Botón cerrar (solo cuando el buscador está expandido en móvil) */}
        {isSearchOpen && (
          <button
            className="bg-transparent border-none cursor-pointer flex items-center justify-center text-black"
            onClick={() => setIsSearchOpen(false)}
            aria-label="Cerrar búsqueda"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Acciones: login, register, carrito */}
      {!isSearchOpen && (
        <div className="flex items-center gap-4 lg:gap-5">
          <button
            onClick={onLogin}
            className="bg-transparent border-none cursor-pointer text-[#1d1d1d] font-bold"
          >
            <span className="hidden lg:inline">Inicia sesión</span>
            <User className="inline lg:hidden" size={20} />
          </button>

          <button
            onClick={onRegister}
            className="bg-transparent border-none cursor-pointer text-[#1d1d1d]"
          >
            <span className="hidden lg:inline">Regístrate</span>
            <UserPlus className="inline lg:hidden" size={20} />
          </button>

          <button
            onClick={onCartClick}
            className="relative bg-transparent border-none cursor-pointer text-[#704efd]"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-[#704efd] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
};
