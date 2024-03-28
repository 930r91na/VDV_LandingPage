import React from 'react'
import { render, screen } from "@testing-library/react";
import VDV from "./Views/Home";
import jest from "jest";
import test from 'node:test';

test("renders learn react link", () => {
  render(<VDV />);
  const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});


