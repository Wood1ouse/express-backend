import { Router } from "express";
import StaffController from "./StaffController.js";
const router = new Router();

router.post("/staff", StaffController.create);

router.get("/staff", StaffController.getAll);
router.get("/staff/:id", StaffController.getOne);
router.put("/staff", StaffController.update);
router.delete("/staff/:id", StaffController.delete);

export default router;
