const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressesSchema  = require("./address");

const patientsSchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        address: addressesSchema,
        phone: String
    }
);

const helperModule = mongoose.model("helper", helpersSchema);;

module.exports = helperModule;