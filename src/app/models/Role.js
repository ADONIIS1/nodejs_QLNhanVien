const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);



const Role = new Schema(
    {
        name: { type: String, require: true },
        position: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Role", Role);
