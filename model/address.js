const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressesSchema = new Schema(
    {
        id: Number,
        streetName: String,
        city: String,
        province: String,
        postalCode: String,
        country: String,
        latitude: Number,
        longitude: Number
    }
)

//var addressModel = mongoose.model("addrss", addressesSchema);

module.exports = addressesSchema;