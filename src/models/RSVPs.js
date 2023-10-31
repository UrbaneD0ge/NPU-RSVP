import { model } from "mongoose";

const RSVPSchema = new mongoose.Schema({
  PLUS: Boolean,
  NPU: String,
  FNAME: String,
  LNAME: String,
  GUEST: String,
  ATTENDED: Boolean,
  RSVPd: Boolean,
  DIET: String,
  PHONE: Boolean,
  EMAIL: Boolean
});

export default model("RSVPs", RSVPSchema);