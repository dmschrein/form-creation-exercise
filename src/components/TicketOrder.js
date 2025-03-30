import React from "react";

function TicketOrder({ ticket, count, onIncrement, onDecrement }) {
  const formatTicketCost = () => {
    const cost = ticket.cost;
    const formattedCost = (cost / 100).toFixed(2);
    return formattedCost;
  };
  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
      <div className="flex flex-col">
        <span className="font-semibold">{ticket.name}</span>
        <p>{ticket.description}</p>
        <p>${formatTicketCost()}</p>
      </div>
      <div className="border outline-black">
        <div className="flex items-center space-x-2 mt-2">
          <button
            type="button"
            onClick={() => onDecrement(ticket.type)}
            className="px-2 py-1 bg-gray-400 rounded border-2"
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            onClick={() => onIncrement(ticket.type)}
            className="px-2 py-1 bg-gray-400 rounded border-2"
          >
            +
          </button>
        </div>
        {/* Divider Line */}
        <div className="h-0.5 w-full mt-4 bg-gray-400" />
      </div>
    </div>
  );
}

export default TicketOrder;
