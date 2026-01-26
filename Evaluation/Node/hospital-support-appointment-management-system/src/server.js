import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/tickets", ticketRoutes);
app.use("/admin", adminRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));
