import { e as error, r as redirect } from "../../../chunks/index.js";
import { R as RSVPs } from "../../../chunks/RSVPs.js";
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    let rsvpStatus = data.get("RSVPd");
    rsvpStatus = rsvpStatus === "true" ? true : false;
    const RSVP = {
      NPU: data.get("NPU"),
      FNAME: data.get("FNAME").trim(),
      LNAME: data.get("LNAME").trim(),
      GUEST: data.get("GUEST")?.trim(),
      DIET: data.get("DIET")?.trim(),
      RSVPd: rsvpStatus,
      ATTENDED: false
    };
    console.log(RSVP);
    try {
      if (RSVP.GUEST != "") {
        await RSVPs.insertMany([{ ...RSVP, PLUSONE: false }, { ...RSVP, PLUSONE: true }]);
        console.log("Plus One RSVPd");
      } else {
        await RSVPs.insertOne({ ...RSVP, PLUSONE: false });
        console.log("Single RSVPd");
      }
    } catch (err) {
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(error)
      };
    }
    if (rsvpStatus == true) {
      throw redirect(303, "/success");
    } else {
      throw redirect(303, "/declined");
    }
  }
};
export {
  actions
};
