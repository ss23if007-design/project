import React, { useState } from "react";
import "./Panel.css";
import { BookingForm } from "./Booking_form";
import { useAuth } from "../store/auth";


export const Panel = () => {
 

  const [open, setOpen] = useState(false); // panel open/close
  const [minimized, setMinimized] = useState(false); // minimized to corner

  const { token } = useAuth();


  const handleToggle = () => {
       if (!token) {
      alert("Please login to access the booking panel.");
      return;
    }
    setOpen(true);
    setMinimized(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMinimize = () => {
    setMinimized(true);
  };

  return (
    <div className="Block">
      {/* Trigger Button */}
      {!open && !minimized && (
        <button className="trigger-btn" onClick={handleToggle}>
          Book Appointment
        </button>
      )}

      {/* Panel */}
      {(open || minimized) && (
        <div className={`panel ${minimized ? "minimized" : ""}`}>
          {!minimized && (
            <div className="panel-header">
              <span className="head"> Book your Appointment </span>
              <div>
                <button className="min-btn" onClick={handleMinimize}>
                  _
                </button>
                <button className="close-btn" onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
          )}

          {!minimized && (
            <div className="panel-body">
              <BookingForm/>
            </div>
          )}

          {minimized && (
            <button className="restore-btn" onClick={() => setMinimized(false)}>
              Continue Booking 
            </button>
          )}
        </div>
      )}
    </div>
  );
};


