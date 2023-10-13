import { R as RSVPs } from "../../../chunks/RSVPs.js";
import { ObjectId } from "mongodb";
async function load({ context }) {
  const data = await RSVPs.find({ RSVPd: true }).sort({ NPU: "asc" }).toArray();
  const notCheckedIn = data.filter((rsvp) => rsvp.ATTENDED == false).length;
  return {
    RSVPs: JSON.parse(JSON.stringify(data)),
    notCheckedIn
  };
}
const actions = {
  checkIn: async ({ request }) => {
    const data = await request.formData();
    const RSVPid = data.get("_id");
    let rsvpStatus = data.get("ATTENDED");
    rsvpStatus = rsvpStatus === "true" ? true : false;
    try {
      rsvpStatus = !rsvpStatus;
      await RSVPs.updateOne({ _id: new ObjectId(RSVPid) }, { $set: { ATTENDED: rsvpStatus } }).catch((error) => console.error(`Failed to update RSVP: ${error}`));
      return {
        success: true,
        status: 303,
        message: "Guest checked in successfully"
      };
    } catch (err) {
      console.error(`Failed to update RSVP: ${err}`);
      return {
        status: 500,
        error: JSON.stringify(err),
        message: JSON.stringify(Error)
      };
    }
  }
};
export {
  actions,
  load
};
