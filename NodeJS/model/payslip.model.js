import mongoose from "mongoose";

const {Schema} = mongoose
const {ObjectId} = Schema.Types

const paySlipSchema = new Schema({
    profile:{
        type: String,
        required: true,
    },
    payrun:{
        type: String,
        required: true,
    },
    payrunPeriod:{
        type: String,
        required: true,
    },
    payruntype:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    salary:{
        type: String,
        required: true,
    },
    netSalary:{
        type: String,
        required: true,
    }
});

const paySlipModel = mongoose.model("paySlip",paySlipSchema);

export default paySlipModel;