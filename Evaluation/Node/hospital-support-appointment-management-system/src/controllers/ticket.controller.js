import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  const ticket = await Ticket.create({
    ...req.body,
    patientId: req.user.id
  });
  res.json(ticket);
};

export const doctorTickets = async (req, res) => {
  const tickets = await Ticket.find({ doctorId: req.user.id });
  res.json(tickets);
};

export const resolveTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
    status: "resolved"
  }, { new: true });

  res.json(ticket);
};
