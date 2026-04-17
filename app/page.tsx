"use client";

import { Header } from "./components/Header";

export default function Home() {
  return (
    <Header
      logoSrc="/assets/logo-adipa.svg"
      onSearch={(value) => console.log("search:", value)}
      onLogin={() => console.log("login")}
      onRegister={() => console.log("register")}
      onCartClick={() => console.log("cart")}
      cartCount={2}
    />
  );
}
