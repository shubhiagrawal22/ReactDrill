import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test('should load contact us page', () => { 
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
 });


test('should load contact us page', () => { 
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
 });

test('should load contact us page', () => { 
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
 });

test('should load contact us page', () => { 
    render(<Contact />);

    const inputElement = screen.getAllByRole("textbox");

    console.log(inputElement);

    expect(inputElement[0]).toBeInTheDocument();
    
    expect(inputElement.length).toBe(2);
 });