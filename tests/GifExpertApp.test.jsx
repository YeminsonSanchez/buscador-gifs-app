import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("purebas en <GifExpertApp/>", () => {
  test("", () => {
    render(<GifExpertApp />);
    const form = screen.findByRole("textbox"); 
    expect(form).toBeTruthy();
  });
});
