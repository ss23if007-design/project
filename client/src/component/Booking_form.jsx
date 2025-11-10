import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { MultiSelect } from "./MultiSelect";
import "./Booking_form.css";

export const BookingForm = () => {
  const { storeTokenInLS } = useAuth();
  const { token } = useAuth();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [],
    date: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServicesChange = (services) => {
    setFormData((prevData) => ({
      ...prevData,
      services: services,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/appointment/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,

        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking successful!");
        console.log("Response Data:", data);
        if (data.token) {
          storeTokenInLS(data.token);
        }
        setFormData({ name: "", phone: "", services: [], date: "" });
        navigate("/user-profile/my-appointments");
      } else {
        alert(data.message || "Booking failed!");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
          autoComplete="name"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInput}
          autoComplete="tel"
          required
        />
      </div>
      <div className="MultipleSelect">
        <label for="services">Services</label>
        <MultiSelect
          selected={formData.services}
          setSelected={handleServicesChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInput}
          autoComplete="date"
          min={new Date().toISOString().split("T")[0]}
          required
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};
