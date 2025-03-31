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
    if (
      firstName &&
      lastName &&
      address &&
      creditCardNumber &&
      expyDate &&
      cvvNumber
    ) {
      const orderDetails = {
        customer: { firstName, lastName, address },
        payment: { creditCardNumber, expyDate, cvvNumber },
        orderSummary: { totalCost, ticketCounts, bandName: band.name },
      };
      alert(
        "Success! Order Details:\n" + JSON.stringify(orderDetails, null, 2)
      );
    } else {
      setError("Please fill in all the fields.");
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div role="alert" aria-live="assertive" className="text-red-500 mb-2">
          {error}
        </div>
      )}
      <form
        id="payment-form"
        onSubmit={handlePaymentSubmit}
        className="flex flex-col space-y-4"
      >
        <fieldset className="border p-4">
          <legend className="text-lg font-bold mb-2">
            Personal Information
          </legend>
          <div className="flex flex-row space-x-2">
            <div className="w-full">
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="w-full border p-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                className="w-full border p-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
              className="w-full border p-2"
            />
          </div>
        </fieldset>

        <fieldset className="border p-4">
          <legend className="text-lg font-bold mb-2">Payment Details</legend>
          <div className="mt-4">
            <label htmlFor="creditCardNumber" className="block mb-1">
              Credit Card Number
            </label>
            <input
              id="creditCardNumber"
              type="text"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
              placeholder="0000 0000 0000 0000"
              required
              className="w-full border p-2"
            />
          </div>
          <div className="flex flex-row space-x-2 mt-4">
            <div className="w-full">
              <label htmlFor="expyDate" className="block mb-1">
                Expiry Date
              </label>
              <input
                id="expyDate"
                type="text"
                value={expyDate}
                onChange={(e) => setExpyDate(e.target.value)}
                placeholder="MM/YY"
                required
                className="w-full border p-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="cvvNumber" className="block mb-1">
                CVV
              </label>
              <input
                id="cvvNumber"
                type="text"
                value={cvvNumber}
                onChange={(e) => setCvvNumber(e.target.value)}
                placeholder="CVV"
                required
                className="w-full border p-2"
              />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="mt-4 bg-blue-500 p-2 text-white">
          Get Tickets
        </button>
      </form>
    </div>
  );
}

export default PaymentDetails;
