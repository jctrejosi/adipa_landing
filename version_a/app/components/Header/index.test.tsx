import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./index";

describe("Header", () => {
  const defaultProps = {
    logoSrc: "/logo.svg",
    logoHref: "/",
    searchPlaceholder: "¿Qué quieres aprender?",
    onSearch: jest.fn(),
    onLogin: jest.fn(),
    onMenu: jest.fn(),
    onRegister: jest.fn(),
    onCartClick: jest.fn(),
    cartCount: 3,
  };

  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    jest.clearAllMocks();
  });

  test("renderiza logo, acciones y contador del carrito", () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByAltText("logo")).toHaveAttribute("src", "/logo.svg");
    expect(screen.getByText("Inicia sesión")).toBeInTheDocument();
    expect(screen.getByText("Regístrate")).toBeInTheDocument();
    expect(screen.getByLabelText("Cambiar tema")).toBeInTheDocument();
    expect(screen.getByLabelText("Buscar")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("llama onMenu al hacer click en menú", () => {
    render(<Header {...defaultProps} />);

    fireEvent.click(screen.getByLabelText("Menú"));

    expect(defaultProps.onMenu).toHaveBeenCalledTimes(1);
  });

  test("llama onLogin, onRegister y onCartClick", () => {
    render(<Header {...defaultProps} />);

    fireEvent.click(screen.getByText("Inicia sesión"));
    fireEvent.click(screen.getByText("Regístrate"));
    fireEvent.click(screen.getByLabelText("Carrito"));

    expect(defaultProps.onLogin).toHaveBeenCalledTimes(1);
    expect(defaultProps.onRegister).toHaveBeenCalledTimes(1);
    expect(defaultProps.onCartClick).toHaveBeenCalledTimes(1);
  });

  test("abre búsqueda móvil, ejecuta onSearch y permite cerrarla", () => {
    render(<Header {...defaultProps} />);

    fireEvent.click(screen.getByLabelText("Buscar"));

    const input = screen.getByPlaceholderText("¿Qué quieres aprender?");
    fireEvent.change(input, { target: { value: "psicología" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(defaultProps.onSearch).toHaveBeenCalledWith("psicología");
    expect(screen.getByLabelText("Cerrar búsqueda")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Cerrar búsqueda"));
    expect(screen.queryByLabelText("Cerrar búsqueda")).not.toBeInTheDocument();
  });

  test("alternar tema agrega y quita la clase dark", () => {
    render(<Header {...defaultProps} />);

    const toggleTheme = screen.getByLabelText("Cambiar tema");

    fireEvent.click(toggleTheme);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    fireEvent.click(toggleTheme);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  test("oculta acciones cuando la búsqueda está abierta", () => {
    render(<Header {...defaultProps} />);

    fireEvent.click(screen.getByLabelText("Buscar"));

    expect(screen.queryByText("Inicia sesión")).not.toBeInTheDocument();
    expect(screen.queryByText("Regístrate")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Cambiar tema")).not.toBeInTheDocument();
  });
});
