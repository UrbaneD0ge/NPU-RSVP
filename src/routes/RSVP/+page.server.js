import { error, fail, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';
import { getRequest, setResponse } from "@sveltejs/kit/node";

export const actions = {
  default: async ({ request }) => {
    // get formData
    const data = await request.formData();

    // get NPU from formData
    const NPU = data.get('NPU');
    const RSVPd = true;

    // console.log('Data:' + JSON.stringify(data));

    // prepare data for database
    const RSVP = {
      NPU,
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      // ATTENDED: data.get('ATTENDED'),
      RSVPd: RSVPd,
      DIET: data.get('DIET')
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