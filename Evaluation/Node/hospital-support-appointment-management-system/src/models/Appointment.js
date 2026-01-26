import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  appointmentDate: Date,
  symptoms: String,
  prescription: String,
  status: { type: String, default: "booked" }
}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);
