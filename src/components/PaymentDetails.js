import React, { useState } from "react";

function PaymentDetails({ totalCost, ticketCounts, band }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expyDate, setExpyDate] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");

  const [error, setError] = useState(null);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // check all fields are filled out
    if (
      firstName &&
      lastName &&
      address &&
      creditCardNumber &&
      expyDate &&
      cvvNumber
    ) {
      const orderDetails = {
        customer: {
          firstName,
          lastName,
          address,
        },
        payment: {
          creditCardNumber,
          expyDate,
          cvvNumber,
        },
        orderSummary: {
          totalCost,
          ticketCounts,
          bandName: band.name,
        },
      };
      // Show successful order alert for confirmation
      alert(
        "Success! Order Details:\n" + JSON.stringify(orderDetails, null, 2)
      );
    } else {
      setError("Plase fill in all the fields.");
    }
  };
  return (
    <div className="w-full">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form
        id="payment-form"
        onSubmit={handlePaymentSubmit}
        className="flex flex-col space-y-4"
      >
        <div className="flex w-2/3 flex-col space-y-6">
          {/* Personal Information */}
          <div className="flex flex-row space-x-2">
            {" "}
            {/* handles making first and last name a row */}
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
              className="w-full border p-2"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
              className="w-full border p-2"
            />
          </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
            className="mb-2 w-full border p-2"
          />
          <p className="text-sm flex flex-col">Payment Details</p>
          <input
            type="text"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
            placeholder="000 000 000 000"
            required
            className="mb-2 w-full border p-2"
          />
          <div className="mb-2 flex flex-row space-x-2">
            {" "}
            {/* handles making first and last name a row */}
            <input
              type="text"
              value={expyDate}
              onChange={(e) => setExpyDate(e.target.value)}
              placeholder="MM /YY"
              required
              className="w-full border p-2"
            />
            <input
              type="text"
              value={cvvNumber}
              onChange={(e) => setCvvNumber(e.target.value)}
              placeholder="CVV"
              required
              className="w-full border p-2"
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-500 p-2 text-white">
            Get Tickets
          </button>
        </div>
      </form>
      {/* Payment details preview */}
    </div>
  );
}

export default PaymentDetails;
