"use client";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { HeroSearch } from "./components/HeroSearch";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header
        logoSrc="/assets/logo-adipa.svg"
        onSearch={(value) => console.log("search:", value)}
        onLogin={() => console.log("login")}
        onRegister={() => console.log("register")}
        onCartClick={() => console.log("cart")}
        cartCount={2}
      />
      <div className="hidden lg:block">
        <Navbar iconWhatsapp="/assets/icons-whatsapp.svg" />
      </div>
      <HeroSearch />
    </div>
  );
}
