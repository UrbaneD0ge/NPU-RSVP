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
      GUEST: data.get('GUEST')?.trim(),
      DIET: data.get('DIET')?.trim(),
      RSVPd: rsvpStatus,
      ATTENDED: false
    };

    console.log(RSVP)

    // const Guest = {
    //   NPU: data.get('NPU'),
    //   GUEST: data.get('GUEST'),
    //   RSVPd: rsvpStatus,
    //   ATTENDED: false
    // };

    try {

      if (RSVP.GUEST != '') {
        // write formData to database
        await RSVPs.insertMany([{ ...RSVP, PLUSONE: false }, { ...RSVP, PLUSONE: true }]);
        console.log('Plus One RSVPd');
      } else {
        await RSVPs.insertOne({ ...RSVP, PLUSONE: false });
        console.log('Single RSVPd');
      }

    } catch (err) {
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(error)
      };
    }

    if (rsvpStatus == true) {
      throw redirect(303, '/success');
    } else {
      throw redirect(303, '/declined');
    }
  }
};