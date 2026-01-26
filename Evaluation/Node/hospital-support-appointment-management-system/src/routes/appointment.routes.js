import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";
import {
  bookAppointment,
  myAppointments,
  doctorAppointments,
  addPrescription
} from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", protect, allowRoles("patient"), bookAppointment);
router.get("/my", protect, allowRoles("patient"), myAppointments);
router.get("/doctor", protect, allowRoles("doctor"), doctorAppointments);
router.patch("/:id", protect, allowRoles("doctor"), addPrescription);

export default router;
