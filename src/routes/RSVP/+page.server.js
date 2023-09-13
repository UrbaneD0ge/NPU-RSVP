import { error, fail, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';
import { getRequest, setResponse } from "@sveltejs/kit/node";

// import { addRSVP } from "$lib/index.js";

// function addRSVP(RSVP) {
//   Request.RSVP = new RSVPs();
// }

export const actions = {
  default: async (event) => {
    // get form data
    const data = new FormData(event.target);

    const FNAME = data.get('FNAME');
    const LNAME = data.get('LNAME');
    const GUEST = data.get('GUEST');
    const DIET = data.get('DIET');
    const NPU = data.get('NPU');
    const ATTENDED = data.get('ATTENDED');
    const RSVPd = data.get('RSVPd');

    // write form data to database
    await RSVPs.insertOne({ FNAME, LNAME, GUEST, DIET, NPU, ATTENDED, RSVPd });


    console.log(...data)

    return { success: true };
  }
}