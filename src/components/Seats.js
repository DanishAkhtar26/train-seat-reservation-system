import React from "react";

const Seats = ({ seats, filled }) => {
  return (
    <div className="seat-display">
      {seats.map((seat) => {
        return (
          <div
            key={seat}
            className={filled.includes(seat) ? "filled" : "available"}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
};

export default Seats;
