import React, { useState } from 'react';

const seats = [
  { id: 1, booked: false, occupied: false },
  { id: 2, booked: true, occupied: false },
  { id: 3, booked: false, occupied: true }
];

const Seatmap = () => {
  const [state, setState] = useState(seats);

  const handleBook = (id) => {
    const updatedSeats = state.map(seat => {
      if (seat.id === id) {
        return {...seat, booked: !seat.booked};
      }
      return seat;
    });
    setState(updatedSeats);
  };

  return (
    <div className="flex">
      {state.map(seat => (
        <div
          key={seat.id}
          className={`bg-white rounded-lg border border-gray-400 m-2 ${seat.booked ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleBook(seat.id)}
        >
          <div className="text-center w-5 h-5 bg-white rounded-sm">
             {seat.occupied && <span className="text-red-500"> x </span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Seatmap;
