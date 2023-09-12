import { Schema, model } from "mongoose";

const RSVPSchema = new mongoose.Schema({
  NPU: String,
  FNAME: String,
  LNAME: String,
  GUEST: String,
  ATTENDED: Boolean,
  RSVPd: Boolean,
  DIET: String
});

export default model("RSVPs", RSVPSchema);