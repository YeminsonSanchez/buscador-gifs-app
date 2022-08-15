import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

describe("pruebas en useFetchGifts", () => {
  test("", () => {
    const { result } = renderHook(() => useFetchGifts("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de img y el isloading en false", async () => {
    const { result } = renderHook(() => useFetchGifts("One Punch"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 3000,
      }
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

  test("", () => {});
});
