import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";
import {
  createTicket,
  doctorTickets,
  resolveTicket
} from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/", protect, allowRoles("patient"), createTicket);
router.get("/", protect, allowRoles("doctor"), doctorTickets);
router.patch("/:id/resolve", protect, allowRoles("doctor"), resolveTicket);

export default router;
