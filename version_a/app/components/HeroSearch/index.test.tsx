import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroSearch } from "./index";

describe("HeroSearch", () => {
  const defaultProps = {
    onSearch: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renderiza título, subtítulo, input y sugerencias", () => {
    render(<HeroSearch {...defaultProps} />);

    expect(
      screen.getByText("Cursos de Psicología con Certificado en 2026")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a través de nuestros cursos y diplomados."
      )
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Buscar cursos")).toBeInTheDocument();
    expect(screen.getByLabelText("Buscar")).toBeDisabled();

    expect(screen.getByRole("button", { name: "Autismo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Wisc" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ados" })).toBeInTheDocument();
  });

  test("habilita el botón al escribir texto", () => {
    render(<HeroSearch {...defaultProps} />);

    const input = screen.getByLabelText("Buscar cursos");
    const searchButton = screen.getByLabelText("Buscar");

    expect(searchButton).toBeDisabled();

    fireEvent.change(input, { target: { value: "  trauma  " } });

    expect(searchButton).not.toBeDisabled();
  });

  test("llama onSearch al presionar Enter", () => {
    const onSearch = jest.fn();

    render(<HeroSearch onSearch={onSearch} />);

    const input = screen.getByLabelText("Buscar cursos");
    fireEvent.change(input, { target: { value: "  trauma  " } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onSearch).toHaveBeenCalledWith("trauma");
  });

  test("llama onSearch al hacer click en el botón buscar", () => {
    const onSearch = jest.fn();

    render(<HeroSearch onSearch={onSearch} />);

    const input = screen.getByLabelText("Buscar cursos");
    fireEvent.change(input, { target: { value: " wais " } });

    fireEvent.click(screen.getByLabelText("Buscar"));

    expect(onSearch).toHaveBeenCalledWith("wais");
  });

  test("no llama onSearch si el valor está vacío", () => {
    const onSearch = jest.fn();

    render(<HeroSearch onSearch={onSearch} />);

    fireEvent.click(screen.getByLabelText("Buscar"));

    expect(onSearch).not.toHaveBeenCalled();
  });

  test("al hacer click en una sugerencia actualiza el input y dispara búsqueda", () => {
    const onSearch = jest.fn();

    render(<HeroSearch onSearch={onSearch} />);

    fireEvent.click(screen.getByRole("button", { name: "Trauma" }));

    expect(onSearch).toHaveBeenCalledWith("Trauma");
    expect(screen.getByLabelText("Buscar cursos")).toHaveValue("Trauma");
  });

  test("respeta initialValue y permite buscar con ese valor", () => {
    const onSearch = jest.fn();

    render(<HeroSearch initialValue="ADI-R" onSearch={onSearch} />);

    expect(screen.getByLabelText("Buscar cursos")).toHaveValue("ADI-R");
    expect(screen.getByLabelText("Buscar")).not.toBeDisabled();

    fireEvent.click(screen.getByLabelText("Buscar"));

    expect(onSearch).toHaveBeenCalledWith("ADI-R");
  });

  test("permite personalizar título, subtítulo y clase extra", () => {
    const { container } = render(
      <HeroSearch
        title="Título personalizado"
        subtitle="Subtítulo personalizado"
        className="custom-class"
        onSearch={jest.fn()}
      />
    );

    expect(screen.getByText("Título personalizado")).toBeInTheDocument();
    expect(screen.getByText("Subtítulo personalizado")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
