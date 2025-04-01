// PaymentDetails.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaymentDetails from "../components/PaymentDetails";

const mockBand = { name: "Test Band" };
const ticketCounts = { general: 1, vip: 0 };
const totalCost = "5.00";

describe("PaymentDetails", () => {
  beforeEach(() => {
    //mock the alert
    window.alert = jest.fn();
  });
  test("calls alert with order details when form is correctly submitted", () => {
    render(
      <PaymentDetails
        totalCost={totalCost}
        ticketCounts={ticketCounts}
        band={mockBand}
      />
    );
    //Fill in required fields
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Address/i), {
      target: { value: "123 Test St" },
    });
    fireEvent.change(screen.getByLabelText(/Credit Card Number/i), {
      target: { value: "4111111111111111" },
    });
    fireEvent.change(screen.getByLabelText(/Expiry Date/i), {
      target: { value: "12/25" },
    });
    fireEvent.change(screen.getByLabelText(/CVV/i), {
      target: { value: "123" },
    });
    //submit form
    fireEvent.submit(
      screen.getByRole("form", { name: /payment/i }) ||
        screen.getByTestId("payment-form")
    );
    // check alert was called
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert.mock.calls[0][0]).toMatch(/Test Band/);
  });
});
