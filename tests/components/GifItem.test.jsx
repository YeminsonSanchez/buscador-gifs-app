import { getByRole, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("pruebas en GifItem", () => {
  const title = "Saitama";
  const url = "https://media1.giphy.com/media/l0Hl6qZqQXqQ/200w.gif";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostar la imagen con el url indicado y el alt", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    // screen.debug();

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe mostar el titulo con el texto indicado", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getAllByText(title)).toBeTruthy();
  });
});
