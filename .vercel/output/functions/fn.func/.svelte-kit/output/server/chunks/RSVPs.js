import { d as db } from "./mongo.js";
const RSVPs = db.collection("RSVPs");
export {
  RSVPs as R
};
