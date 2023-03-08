import mongoose from "mongoose";

const BirthdayCard = new mongoose.Schema({
    name: { type: String, required: true },
    celebraitsName: { type: String, required: true },
    wishes: { type: String, required: false },
    photo: { type: String, required: true },
});

const BirthdayCardSchema = mongoose.model("BirthdayCard", BirthdayCard);

export default BirthdayCardSchema;