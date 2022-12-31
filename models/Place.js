import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the place is required"],
  },
  status: {
    type: Boolean,
    default: false,
  },
});


export default mongoose.model("Place", placeSchema);