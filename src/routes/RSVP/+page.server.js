import { error, fail, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';
import { getRequest, setResponse } from "@sveltejs/kit/node";

export const actions = {
  default: async ({ request }) => {
    // get formData
    const data = await request.formData();

    // get NPU from formData
    const RSVPd = true;

    // prepare data for database
    const RSVP = {
      NPU: data.get('NPU'),
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: RSVPd
    };

    try {
      // write formData to database
      await RSVPs.insertOne({ ...RSVP });
      return { success: true };
    } catch (err) {
      return { error: err };
    }
  }
};