import { test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

test("render the correct text", () => {
  render(<Button>Click me!</Button>);

  const text = screen.getByText("Click me!");
  expect(text).toBeDefined();
});

test("calls the click callback", () => {
  const clickEvent = vi.fn();

  render(<Button onClick={clickEvent}>Click me!</Button>);

  fireEvent.click(screen.getByRole("button"));

  expect(clickEvent).toHaveBeenCalledTimes(1);
});