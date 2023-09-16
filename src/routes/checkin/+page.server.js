import { RSVPs } from '$db/RSVPs';

export async function load({ context }) {

  // get all RSVP data from db
  const data = await RSVPs.find().sort({ NPU: 'asc' }).toArray();
  // const data = await NPUs.find();
  console.log(data);

  // get the number of RSVPs not yet checked in
  const notCheckedIn = data.filter(rsvp => !rsvp.ATTENDED).length;

  // console.log(notCheckedIn);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)), notCheckedIn: notCheckedIn
  };
};

export const actions = {
  checkIn: async (event) => {
    // get form data
    const data = new FormData(event.target);

    const ID = data.get('_id');

    // This is just like that youtube tutorial I watched - something about useOptimisticResponse
    try {
      // for that RSVP, set ATTENDED to true
      await RSVPs.updateOne({ ID }, { $set: { ATTENDED: true } });
      return { success: true };
    }
    catch (err) {
      return { error: err };
    }
  }
};