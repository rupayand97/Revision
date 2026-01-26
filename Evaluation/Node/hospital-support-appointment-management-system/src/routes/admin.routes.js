import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";
import { getUsers, getStats } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", protect, allowRoles("admin"), getUsers);
router.get("/stats", protect, allowRoles("admin"), getStats);

export default router;
