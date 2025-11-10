const Appointment = require('../module/book-model');

const Booking__Form = async (req, res) => {
    try {
        const { name, phone, services, date } = req.body;
        const userId = req.userID; // From auth middleware

        const appointment = await Appointment.create({
            name,
            phone,
            services,
            date,
            userId
        });

        return res.status(201).json({ message: 'Appointment booked successfully', appointment });
    } catch (error) {
        console.error("Booking form error:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getUserAppointments = async (req, res) => {
    try {
        const userId = req.userID;
        const appointments = await Appointment.find({ userId }).sort({ createdAt: -1 });
        return res.status(200).json({ appointments });
    } catch (error) {
        console.error("Get appointments error:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { Booking__Form, getUserAppointments };
