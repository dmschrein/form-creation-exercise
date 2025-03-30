import React, { useState } from "react";
import TicketOrder from "./components/TicketOrder";
import PaymentDetails from "./components/PaymentDetails";
import Header from "./components/Header";
import BandDescription from "./components/BandDescription";

function BandForm({ band }) {
  // set inital ticket count
  const [ticketCounts, setTicketCounts] = useState(() => {
    const initialCounts = {};
    band.ticketTypes.forEach((ticket) => {
      initialCounts[ticket.type] = 0;
    });
    return initialCounts;
  });

  // increment the count for a given ticket type
  const handleIncrementClick = (ticketType) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: prevCounts[ticketType] + 1,
    }));
  };

  // handle decrement
  const handleDecrementClick = (ticketType) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: prevCounts[ticketType] > 0 ? prevCounts[ticketType] - 1 : 0,
    }));
  };

  const calculateTotalCost = () => {
    const totalCents = band.ticketTypes.reduce((total, ticket) => {
      const count = ticketCounts[ticket.type] || 0;
      return total + ticket.cost * count;
    }, 0);
    const totalCost = (totalCents / 100).toFixed(2); // Convert cents to to dollars and format
    return totalCost;
  };

  // Compute total cost once so it can be passed to PaymentDetails
  const totalCost = calculateTotalCost();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header band={band} />
      <div className="flex flex-row space-x-4">
        {/* Left side of form */}
        <div className="flex flex-col">
          <img src={band.imgURL} alt="BandImage" className="w-full border" />
          <BandDescription description={band.description_blurb} />
        </div>
        {/* Right Side: Ticket info */}
        <div className="w-full md:w-1/2 flex flex-col space-y-2 bg-slate-200 p-4">
          <h2 className="text-2xl font-semibold mt-4">Select Tickets</h2>
          <div className="flex flex-col">
            {/* Tickets type and description */}
            {band.ticketTypes.map((ticket) => (
              <TicketOrder
                key={ticket.type}
                ticket={ticket}
                count={ticketCounts[ticket.type]}
                onIncrement={handleIncrementClick}
                onDecrement={handleDecrementClick}
              />
            ))}
          </div>
          {/* Total cost Section */}
          <div className="flex flex-col space-x-4">
            <div className="flex flex-row space-x-4">
              <h2 className="text-2xl">Total</h2>
              <h1 className="text-lg font-semibold">${calculateTotalCost()}</h1>
            </div>
          </div>

          {/* Payment Details */}
          <PaymentDetails
            totalCost={totalCost}
            ticketCounts={ticketCounts}
            band={band}
          />
        </div>
      </div>
    </div>
  );
}

export default BandForm;
