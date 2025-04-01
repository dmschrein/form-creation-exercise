// BandForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BandForm from "../BandForm";

// Create a mock band object similar to JSON data
const mockBand = {
  name: "Test Band",
  description_blurb: "This is a test band description.",
  imgURL: "test-image.jpg",
  ticketTypes: [
    {
      type: "general",
      name: "General Admission",
      description: "General admission ticket",
      cost: 500,
    },
    {
      type: "vip",
      name: "VIP Ticket",
      description: "VIP ticket with extra perks",
      cost: 1500,
    },
  ],
};

describe("BandForm", () => {
  test("renders band image and description", () => {
    render(<BandForm band={mockBand} />);
    // Test increment button for the first ticket type using aria-label
    const incrementButton = screen.getByLabelText(
      /Increase General Admission count/i
    );
    // Initially the ticket count should be 0
    expect(
      screen.getByRole("spinbutton", {
        name: /General Admission ticket count/i,
      })
    ).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    // after clicking the count should be 1
    expect(
      screen.getByRole("spinbutton", {
        name: /General Admission ticket count/i,
      })
    ).toHaveTextContent("1");
  });
});
