import { error, fail, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';
import { getRequest, setResponse } from "@sveltejs/kit/node";

export const actions = {
  default: async (event) => {
    // get form data
    const data = new FormData(event.target);

    const FNAME = data.get('FNAME');
    const LNAME = data.get('LNAME');
    const GUEST = data.get('GUEST');
    const DIET = data.get('DIET');
    const NPU = data.get('NPU');
    const RSVPd = true

    try {
      // write form data to database
      // await RSVPs.insertOne({ FNAME: FNAME, LNAME: LNAME, GUEST: GUEST, DIET: DIET, NPU: NPU, RSVPd: RSVPd });

      // write all form data to database
      await RSVPs.insertOne({ ...data, RSVPd: RSVPd });

      // redirect to success page
      // TODO: create success page

      console.log(...RSVPs);
      return { success: true };
    } catch (err) {
      return { error: err };
    }
  }
};