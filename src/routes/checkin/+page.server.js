import { RSVPs } from '$db/RSVPs';
import { ObjectId } from 'mongodb';

export async function load({ context }) {

  // get all RSVP data from db
  const data = await RSVPs.find().sort({ NPU: 'asc' }).toArray();

  // console.log(data);

  // get the number of RSVPs not yet checked in
  const notCheckedIn = data.filter(rsvp => rsvp.ATTENDED == false).length;

  // console.log(notCheckedIn);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)), notCheckedIn: notCheckedIn
  };
};

export const actions = {
  checkIn: async ({ request }) => {
    // get form data
    const data = await request.formData();

    // get RSVP id from form data
    const RSVPid = data.get('_id');

    // get ATTENDED status from form and coerce to boolean
    let rsvpStatus = data.get('ATTENDED');
    rsvpStatus = rsvpStatus === 'true' ? true : false;
    // console.log('From Form: ', rsvpStatus);
    // flip RSVP status for check-in

    try {
      rsvpStatus = !rsvpStatus;

      await RSVPs.updateOne({ _id: new ObjectId(RSVPid) }, { $set: { ATTENDED: rsvpStatus } })
        // .then(Response => console.log('to DB: ', rsvpStatus))
        .catch(error => console.error(`Failed to update RSVP: ${error}`));

      return {
        success: true,
        status: 303,
        message: 'Guest checked in successfully'
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