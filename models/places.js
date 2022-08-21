const mongoose = require("mongoose");
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: {type: String, default: 'http://placekitten/400/400'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: String,
    founded: {
        type: Number, 
        required: true,
        min: [1673, "Not that old"],
        max: [new Date().getFullYear(), "Future year"]
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
});

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model("Place", placeSchema);