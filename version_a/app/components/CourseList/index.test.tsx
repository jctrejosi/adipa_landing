// app/components/CourseList/index.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CourseList } from "./index";
import { Course, SortValue } from "./types";

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Curso de Psicología Infantil",
    description: "Aprende sobre psicología infantil",
    startDate: "15/05/2026",
    price: "$120.000 CLP",
    discountedPrice: "$99.000 CLP",
    originalPrice: "$120.000 CLP",
    discount: 17,
    rating: 4.8,
    imageUrl: "https://example.com/image1.jpg",
    teacher: "Dra. María Pérez",
    isLive: true,
    isInProgress: true,
    category: "Cursos",
    modality: "Online",
    hours: 10,
    url: "/curso/1",
  },
  {
    id: "2",
    title: "Diplomado en Neuropsicología Clínica",
    description: "Especialización en neuropsicología",
    startDate: "20/06/2026",
    price: "$500.000 CLP",
    discountedPrice: "$450.000 CLP",
    originalPrice: "$550.000 CLP",
    discount: 18,
    teacher: "Dr. Juan Pérez",
    isLive: false,
    isInProgress: false,
    category: "Diplomados",
    modality: "Presencial",
    hours: 120,
    url: "/diplomado/2",
  },
  {
    id: "3",
    title: "Curso de Terapia Cognitivo-Conductual",
    description: "Técnicas de TCC",
    startDate: "10/07/2026",
    price: "$80.000 CLP",
    discountedPrice: "$80.000 CLP",
    isLive: true,
    isInProgress: false,
    category: "Cursos",
    modality: "En Vivo",
    hours: 16,
    teacher: "Mg. Ps. Carlos López",
    url: "/curso/3",
  },
];

const sortOptions: { value: SortValue; label: string }[] = [
  { value: "*", label: "Todos" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "prox-asc", label: "Fecha: más próximo" },
  { value: "prox-desc", label: "Fecha: más lejano" },
];

describe("CourseList", () => {
  const defaultProps = {
    courses: mockCourses,
    sortOptions,
    title: "Cursos destacados",
    searchPlaceholder: "Buscar curso...",
    allLabel: "Todos",
    noResultsText: "No se encontraron cursos",
    detailButtonLabel: "Ver detalle +",
    liveLabel: "En vivo",
    inProgressLabel: "• En progreso",
    startLabel: "Inicio :",
  };

  test("renderiza correctamente con cursos", () => {
    render(<CourseList {...defaultProps} />);

    expect(screen.getByText("Cursos destacados")).toBeInTheDocument();
    expect(
      screen.getByText("Curso de Psicología Infantil")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Diplomado en Neuropsicología Clínica")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar curso...")).toBeInTheDocument();
  });

  test("filtra cursos por búsqueda", () => {
    render(<CourseList {...defaultProps} externalSearch="Psicología" />);

    expect(
      screen.getByText("Curso de Psicología Infantil")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Diplomado en Neuropsicología Clínica")
    ).toBeInTheDocument();
  });

  test("muestra mensaje cuando no hay resultados", () => {
    render(<CourseList {...defaultProps} externalSearch="xyz inexistente" />);

    expect(screen.getByText("No se encontraron cursos")).toBeInTheDocument();
  });

  test("cambia el ordenamiento al seleccionar una opción", async () => {
    render(<CourseList {...defaultProps} />);

    const sortButton = screen.getByText("Todos");
    fireEvent.click(sortButton);

    const priceAscOption = await screen.findByText("Precio: menor a mayor");
    fireEvent.click(priceAscOption);

    expect(screen.getByText("Precio: menor a mayor")).toBeInTheDocument();
  });

  test("llama a onSearchChange cuando se escribe en el input", () => {
    const mockOnSearchChange = jest.fn();
    render(
      <CourseList {...defaultProps} onSearchChange={mockOnSearchChange} />
    );

    const input = screen.getByPlaceholderText("Buscar curso...");
    fireEvent.change(input, { target: { value: "Psicología" } });

    expect(mockOnSearchChange).toHaveBeenCalledWith("Psicología");
  });

  test("limpia la búsqueda al hacer clic en el botón X", () => {
    const mockOnSearchChange = jest.fn();
    render(
      <CourseList
        {...defaultProps}
        externalSearch="Psicología"
        onSearchChange={mockOnSearchChange}
      />
    );

    const clearButton = screen.getByLabelText("Limpiar búsqueda");
    fireEvent.click(clearButton);

    expect(mockOnSearchChange).toHaveBeenCalledWith("");
  });

  test("no muestra el botón de limpiar cuando no hay búsqueda", () => {
    render(<CourseList {...defaultProps} externalSearch="" />);

    expect(screen.queryByLabelText("Limpiar búsqueda")).not.toBeInTheDocument();
  });
});
