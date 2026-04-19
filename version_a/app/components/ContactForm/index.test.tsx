import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactForm } from "./index";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  title: "Contacto",
  description: "Envíanos un mensaje",
  nameLabel: "Nombre",
  namePlaceholder: "Tu nombre",
  emailLabel: "Email",
  emailPlaceholder: "Tu email",
  messageLabel: "Mensaje",
  messagePlaceholder: "Tu mensaje",
  minMessageLengthLabel: "Mínimo 10 caracteres",
  submitButtonLabel: "Enviar",
  successTitle: "Enviado correctamente",
  successDescription: "Gracias por contactarnos",
  successButtonLabel: "Volver",
};

describe("ContactForm", () => {
  test("render inicial", () => {
    render(<ContactForm {...defaultProps} />);

    expect(screen.getByText("Contacto")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tu nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tu email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tu mensaje")).toBeInTheDocument();

    expect(screen.queryByText("Enviado correctamente")).not.toBeInTheDocument();
  });

  test("errores en submit vacío", () => {
    render(<ContactForm {...defaultProps} />);

    fireEvent.click(screen.getByText("Enviar"));

    expect(screen.getByText("El nombre es obligatorio")).toBeInTheDocument();
    expect(screen.getByText("El email es obligatorio")).toBeInTheDocument();
    expect(screen.getByText("El mensaje es obligatorio")).toBeInTheDocument();
  });

  test("email inválido", async () => {
    render(<ContactForm {...defaultProps} />);

    // Llenar campos
    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Juan" },
    });
    fireEvent.change(screen.getByPlaceholderText("Tu mensaje"), {
      target: { value: "Mensaje válido suficiente" },
    });
    const emailInput = screen.getByPlaceholderText("Tu email");
    fireEvent.change(emailInput, { target: { value: "abc" } });

    // Obtener el formulario y disparar submit directamente
    const form = emailInput.closest("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    // Verificar que aparece el error
    expect(await screen.findByText("Email inválido")).toBeInTheDocument();
  });

  test("mensaje corto", () => {
    render(<ContactForm {...defaultProps} />);

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Juan" },
    });

    fireEvent.change(screen.getByPlaceholderText("Tu email"), {
      target: { value: "test@mail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Tu mensaje"), {
      target: { value: "hola" },
    });

    fireEvent.click(screen.getByText("Enviar"));

    const matches = screen.getAllByText("Mínimo 10 caracteres");
    expect(matches.length).toBeGreaterThan(1); // hay hint + error
  });

  test("flujo exitoso", () => {
    render(<ContactForm {...defaultProps} />);

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Juan" },
    });

    fireEvent.change(screen.getByPlaceholderText("Tu email"), {
      target: { value: "test@mail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Tu mensaje"), {
      target: { value: "Mensaje válido suficiente" },
    });

    fireEvent.click(screen.getByText("Enviar"));

    expect(screen.getByText("Enviado correctamente")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Tu nombre")).not.toBeInTheDocument();
  });

  test("reset del formulario", () => {
    render(<ContactForm {...defaultProps} />);

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Juan" },
    });

    fireEvent.change(screen.getByPlaceholderText("Tu email"), {
      target: { value: "test@mail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Tu mensaje"), {
      target: { value: "Mensaje válido suficiente" },
    });

    fireEvent.click(screen.getByText("Enviar"));
    fireEvent.click(screen.getByText("Volver"));

    expect(screen.getByPlaceholderText("Tu nombre")).toBeInTheDocument();
    expect(screen.queryByText("Enviado correctamente")).not.toBeInTheDocument();
  });
});
