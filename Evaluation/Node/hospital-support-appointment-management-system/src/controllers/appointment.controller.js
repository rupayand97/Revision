import Appointment from "../models/Appointment.js";

export const bookAppointment = async (req, res) => {
  const appointment = await Appointment.create({
    ...req.body,
    patientId: req.user.id
  });
  res.json(appointment);
};

export const myAppointments = async (req, res) => {
  const data = await Appointment.find({ patientId: req.user.id }).populate("doctorId");
  res.json(data);
};

export const doctorAppointments = async (req, res) => {
  const data = await Appointment.find({ doctorId: req.user.id }).populate("patientId");
  res.json(data);
};

export const addPrescription = async (req, res) => {
  const appt = await Appointment.findByIdAndUpdate(req.params.id, {
    prescription: req.body.prescription,
    status: "completed"
  }, { new: true });

  res.json(appt);
};
