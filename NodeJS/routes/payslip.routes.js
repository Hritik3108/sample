import { createSlip, getSlip } from "../controller/payslip.controller.js";

export function payslipRoutes(app)  {
    app.post("/api/addpayslip",  createSlip);
    app.get("/api/getpayslip", getSlip);
}