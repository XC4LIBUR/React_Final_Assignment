// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render, screen } from "@testing-library/react";
import ReservationForm from "./components/sections/reservePages/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument();
})