import { Error } from "mongoose";
import { R as RSVPs } from "../../../chunks/RSVPs.js";
import { ObjectId } from "mongodb";
import { r as redirect } from "../../../chunks/index.js";
async function load({ url }) {
  const ID = url.pathname.slice(1);
  if (!ObjectId.isValid(ID)) {
    return {
      status: 303,
      redirect: "/error"
    };
  }
  const data = await RSVPs.findOne({ _id: new ObjectId(ID) });
  return {
    RSVPs: JSON.parse(JSON.stringify(data))
  };
}
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const RSVPid = data.get("_id");
    let rsvpStatus = data.get("RSVPd");
    rsvpStatus = rsvpStatus === "true" ? true : false;
    const RSVP = {
      NPU: data.get("NPU"),
      FNAME: data.get("FNAME"),
      LNAME: data.get("LNAME"),
      GUEST: data.get("GUEST"),
      DIET: data.get("DIET"),
      RSVPd: rsvpStatus
    };
    try {
      await RSVPs.updateOne(
        { _id: new ObjectId(RSVPid) },
        { $set: RSVP }
      ).then((Response) => console.log(Response)).catch((error) => console.error(`Failed to update RSVP: ${error}`));
    } catch (error) {
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(Error)
      };
    }
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
