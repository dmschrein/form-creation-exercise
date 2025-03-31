import React from "react";

function TicketOrder({ ticket, count, onIncrement, onDecrement }) {
  const formatTicketCost = () => {
    const cost = ticket.cost;
    const formattedCost = (cost / 100).toFixed(2);
    return formattedCost;
  };
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-between">
        {/* Ticket details */}
        <div className="flex flex-col">
          <div className="flex flex-row">
            <span className="font-semibold">{ticket.name}</span>
          </div>
          <div className="flex flex-col mt-2">
            <p className="mb-5">{ticket.description}</p>
            <p>${formatTicketCost()}</p>
          </div>
        </div>

        {/* Cohesive control container */}
        <div className="h-10 ml-8">
          <div className="border border-black inline-flex mb-24">
            {/* Ticket count */}
            <div className="w-12 px-1 py-0 flex items-center justify-center">
              <span>{count}</span>
            </div>
            {/* Up & Down arrows in a column */}
            <div className="flex flex-col border-l border-black">
              <button
                type="button"
                onClick={() => onIncrement(ticket.type)}
                className="text-sm px-1 py-0 bg-gray-300 hover:bg-gray-400 border-b border-black"
              >
                &#x25B2;
              </button>
              <button
                type="button"
                onClick={() => onDecrement(ticket.type)}
                className="text-sm px-1 py-0 bg-gray-300 hover:bg-gray-400"
              >
                &#x25BC;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-0.5 w-full mt-4 bg-gray-400" />
    </div>
  );
}

export default TicketOrder;
