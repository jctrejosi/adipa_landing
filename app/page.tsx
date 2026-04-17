"use client";

import { Header } from "./components/Header";
import LogoAdipa from "./assets/logo-adipa.svg";

export default function Home() {
  return (
    <Header
      logoSrc={LogoAdipa}
      onSearch={(value) => console.log("search:", value)}
      onLogin={() => console.log("login")}
      onRegister={() => console.log("register")}
      onCartClick={() => console.log("cart")}
      cartCount={2}
    />
  );
}
