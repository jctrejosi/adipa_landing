"use client";

import { ChevronDown, X } from "lucide-react";
import { Dropdown } from "../Dropdown";
import { discoverSections, resourcesSections } from "./data";

type Props = {
  iconWhatsapp: string;
  mobileOpen?: boolean;
  onClose?: () => void;
};

export const Navbar = ({
  iconWhatsapp,
  mobileOpen = false,
  onClose,
}: Props) => {
  return (
    <>
      {/* desktop */}
      <div className="hidden w-full items-center justify-start bg-[var(--navbar-bg,#fff)] px-[var(--navbar-padding-x,40px)] py-[var(--navbar-padding-y,15px)] text-[var(--navbar-font-size,14px)] font-[var(--font-family,inherit)] dark:bg-gray-900 lg:flex">
        <div className="mr-[100px] flex items-center">
          <button type="button" className="text-[#25d366] dark:text-[#25d366]">
            <img src={iconWhatsapp} alt="WhatsApp Icon" className="h-5 w-5" />
          </button>

          <span className="mx-[10px] h-5 w-px bg-black dark:bg-gray-600" />

          <Dropdown
            variant="mega"
            trigger={
              <button className="flex items-center gap-[6px] text-[14px] font-medium text-[#3a3a3a] dark:text-gray-300">
                Descubre ADIPA
                <ChevronDown size={14} />
              </button>
            }
            sections={discoverSections}
          />
        </div>

        <nav className="flex items-center gap-[22px]">
          <Dropdown
            trigger={
              <span className="flex cursor-pointer items-center text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
                Recursos <ChevronDown size={12} />
              </span>
            }
            sections={resourcesSections}
          />

          <div className="relative flex items-center">
            <span className="absolute -top-3 right-0 rounded bg-[#704efd] px-[7px] py-[2px] text-[10px] font-semibold leading-none text-white">
              Gratis
            </span>
            <span className="flex cursor-pointer items-center text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
              Seminarios
            </span>
          </div>

          <div className="relative flex items-center">
            <span className="absolute -top-3 right-0 rounded bg-[#FF017C] px-[7px] py-[2px] text-[10px] font-semibold leading-none text-white">
              Nuevo
            </span>
            <span className="flex cursor-pointer items-center text-[14px] font-semibold text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
              Congreso
            </span>
          </div>

          <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
            Especializaciones
          </span>
          <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
            Acreditaciones
          </span>
          <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
            Sesiones Magistrales
          </span>
          <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
            Diplomados
          </span>
          <span className="cursor-pointer text-[14px] font-semibold text-[var(--link-color,#3a3a3a)] hover:text-black dark:text-gray-300 dark:hover:text-white">
            Cursos
          </span>
        </nav>
      </div>

      {/* mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-label="Cerrar menú"
          />

          <div className="absolute left-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-5 shadow-2xl dark:bg-gray-900">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#13013f] dark:text-gray-100">
                Menú
              </span>

              <button
                type="button"
                onClick={onClose}
                className="text-[#13013f] dark:text-gray-100"
                aria-label="Cerrar"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" className="text-[#25d366]">
                <img
                  src={iconWhatsapp}
                  alt="WhatsApp Icon"
                  className="h-5 w-5"
                />
              </button>
              <span className="text-sm text-[#13013f] dark:text-gray-300">
                WhatsApp
              </span>
            </div>

            <div className="my-5 h-px bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Descubre ADIPA
                </p>
                <div className="space-y-2">
                  {discoverSections.flatMap((section) =>
                    section.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block text-sm text-[#13013f] hover:text-[#704efd] dark:text-gray-200 dark:hover:text-white"
                        onClick={onClose}
                      >
                        {item.label}
                      </a>
                    ))
                  )}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Recursos
                </p>
                <div className="space-y-2">
                  {resourcesSections.flatMap((section) =>
                    section.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block text-sm text-[#13013f] hover:text-[#704efd] dark:text-gray-200 dark:hover:text-white"
                        onClick={onClose}
                      >
                        {item.label}
                      </a>
                    ))
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Seminarios
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Congreso
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Especializaciones
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Acreditaciones
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Sesiones Magistrales
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Diplomados
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold text-[#13013f] dark:bg-gray-800 dark:text-gray-100"
                  onClick={onClose}
                >
                  Cursos
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
