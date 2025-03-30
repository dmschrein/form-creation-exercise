import React from "react";

function TicketOrder({ ticket, count, onIncrement, onDecrement }) {
  const formatTicketCost = () => {
    const cost = ticket.cost;
    const formattedCost = (cost / 100).toFixed(2);
    return formattedCost;
  };
  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
      <div className="flex flex-row justify-between">
        {/* Ticket details */}
        <div className="flex flex-col">
          <span className="font-semibold">{ticket.name}</span>
          <p>{ticket.description}</p>
          <p>${formatTicketCost()}</p>
        </div>

        {/* Ticket button controls */}
        <div className="border border-gray-400 flex">
          <div className="flex flex-row items-start">
            {/* Ticket count */}
            <div className="px-4 py-2 flex">
              <span>{count}</span>
            </div>
            {/* Up & Down arrows in column */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => onIncrement(ticket.type)}
                className="text-sm px-0.5 py-0.5 bg-gray-400 rounded border"
              >
                &#x25B2;
              </button>

              <button
                type="button"
                onClick={() => onDecrement(ticket.type)}
                className="text-sm px-1 py-0.5 bg-gray-400 rounded border"
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
