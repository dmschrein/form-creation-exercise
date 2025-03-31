import React, { useState } from "react";
import TicketOrder from "./components/TicketOrder";
import PaymentDetails from "./components/PaymentDetails";
import Header from "./components/Header";
import BandDescription from "./components/BandDescription";

function BandForm({ band }) {
  // set initial ticket count
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
    const totalCost = (totalCents / 100).toFixed(2); // Convert cents to dollars and format
    return totalCost;
  };

  // Compute total cost once so it can be passed to PaymentDetails
  const totalCost = calculateTotalCost();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header band={band} />
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Left side: Band image and description */}
        <div className="w-full md:w-1/2">
          <img
            src={band.imgURL}
            alt={`Bandimage of ${band.name}`}
            className="w-full border mb-2"
          />
          <BandDescription description={band.description_blurb} />
        </div>
        {/* Right side: Ticket info */}
        <div className="w-full md:w-1/2 flex flex-col space-y-2 bg-slate-100 p-4">
          <h2 className="text-2xl font-semibold mt-4">Select Tickets</h2>
          <div className="flex flex-col">
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
          <div className="p-4">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center mb-8">
                <h2 className="text-2xl uppercase">Total</h2>
                <h1 className="text-lg font-semibold">
                  ${calculateTotalCost()}
                </h1>
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
    </div>
  );
}

export default BandForm;
