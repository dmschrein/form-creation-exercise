// TicketOrder.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TicketOrder from "../components/TicketOrder";

const mockTicket = {
  type: "general",
  name: "General Admission",
  description: "General admission ticket",
  cost: 500,
};

describe("TicketOrder", () => {
  test("renders ticket information correctly", () => {
    render(
      <TicketOrder
        ticket={mockTicket}
        count={0}
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
    );
    expect(screen.getByText(/^General Admission$/i)).toBeInTheDocument();
    expect(screen.getByText(/General admission ticket/i)).toBeInTheDocument();
    // Cost is converted from cents to dollars
    expect(screen.getByText(/\$5\.00/i)).toBeInTheDocument();
  });
  test("calls onIncrement and onDecrement when buttons are clicked", () => {
    const incrementMock = jest.fn();
    const decrementMock = jest.fn();
    render(
      <TicketOrder
        ticket={mockTicket}
        count={1}
        onIncrement={incrementMock}
        onDecrement={decrementMock}
      />
    );
    const incButton = screen.getByLabelText(
      /Increase General Admission count/i
    );
    const decButton = screen.getByLabelText(
      /Decrease General Admission count/i
    );

    fireEvent.click(incButton);
    expect(incrementMock).toHaveBeenCalledWith(mockTicket.type);

    fireEvent.click(decButton);
    expect(decrementMock).toHaveBeenCalledWith(mockTicket.type);
  });
});
