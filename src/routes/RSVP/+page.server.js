import { error, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';
import { goto } from "$app/navigation";

export const actions = {
  default: async ({ request }) => {
    // get formData
    const data = await request.formData();

    // get RSVP status from form and coerce to boolean
    let rsvpStatus = data.get('RSVPd');
    rsvpStatus = rsvpStatus === 'true' ? true : false;

    // prepare data for database
    const RSVP = {
      NPU: data.get('NPU'),
      FNAME: data.get('FNAME').trim(),
      LNAME: data.get('LNAME').trim(),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: rsvpStatus,
      ATTENDED: false
    };

    try {
      // write formData to database
      await RSVPs.insertOne({ ...RSVP });
      throw redirect(308, '/success');
    } catch (err) {
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(error)
      };
    }
  }
};