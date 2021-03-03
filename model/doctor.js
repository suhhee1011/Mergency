const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressesSchema  = require("./address");

const patientsSchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        address: addressesSchema,
        phone: String,
        field: String
    }
);

const doctorModule = mongoose.model("doctor", doctorsSchema);

module.exports = doctorModule;

