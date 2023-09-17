import { RSVPs } from '$db/RSVPs';
import { ObjectId } from 'mongodb';

export async function load({ context }) {

  // get all RSVP data from db
  const data = await RSVPs.find().sort({ NPU: 'asc' }).toArray();

  // console.log(data);

  // get the number of RSVPs not yet checked in
  const notCheckedIn = data.filter(rsvp => !rsvp.ATTENDED).length;

  // console.log(notCheckedIn);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)), notCheckedIn: notCheckedIn
  };
};

export const actions = {
  checkIn: async ({ request }) => {
    // get form data
    const data = await request.formData();

    const RSVPid = data.get('_id');
    let rsvpStatus = !data.get('ATTENDED');
    console.log(rsvpStatus);

    try {
      // for that RSVP, set ATTENDED to true
      await RSVPs.updateOne({ _id: new ObjectId(RSVPid) }, { $set: { ATTENDED: rsvpStatus } })
        .then(Response => console.log(Response))
        .catch(error => console.error(`Failed to update RSVP: ${error}`));

      return {
        success: true,
        status: 303,
        message: 'Guest checked in successfully',
        body: { ATTENDED: rsvpStatus }
      };
    }
    catch (err) {
      console.error(`Failed to update RSVP: ${err}`);
      return {
        status: 500,
        error: JSON.stringify(err),
        message: JSON.stringify(Error)
      };
    }
  }
};