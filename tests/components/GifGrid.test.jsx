import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock("../../src/hooks/useFetchGifts");

describe("pruebas en <GifGrid/>", () => {
  const category = "hola, mundo";
  test("debe de mostar el lading inicialmmente en false", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar item cuando se cargan las imagenes usando useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "saitama",
        url: "https://saitama.com",
      },
      {
        id: "cba",
        title: "saitama2",
        url: "https://saitama2.com",
      },
    ];
    useFetchGifts.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
