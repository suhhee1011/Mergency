const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressesSchema  = require("./address");

const patientsSchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        bob: String,
        gender: String,
        email: String,
        address: addressesSchema,
        phone: String,
        disability: String,
    }
);

const patientModule = mongoose.model("patient", patientsSchema);

module.exports = patientModule;

