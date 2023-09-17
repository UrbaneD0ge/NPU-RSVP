import { error, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';

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
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: rsvpStatus,
      ATTENDED: false
    };

    try {
      // write formData to database
      await RSVPs.insertOne({ ...RSVP });
      throw redirect('/success');
    } catch (err) {
      console.error(`Failed to write RSVP to database: ${error}`);
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(error)
      };
    }
  }
};