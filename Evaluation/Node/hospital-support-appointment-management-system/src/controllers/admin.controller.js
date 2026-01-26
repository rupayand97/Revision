import User from "../models/User.js";
import Appointment from "../models/Appointment.js";
import Ticket from "../models/Ticket.js";

export const getUsers = async (req, res) => {
  res.json(await User.find());
};

export const getStats = async (req, res) => {
  const patients = await User.countDocuments({ role: "patient" });
  const doctors = await User.countDocuments({ role: "doctor" });
  const appointments = await Appointment.countDocuments();

  const ticketStats = await Ticket.aggregate([
    { $group: { _id: "$priority", count: { $sum: 1 } } }
  ]);

  res.json({ patients, doctors, appointments, ticketStats });
};
