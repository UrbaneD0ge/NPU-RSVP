import { Error } from 'mongoose';
import { RSVPs } from '$db/RSVPs';
import { ObjectId } from 'mongodb';
import { Redirect_1 } from '@sveltejs/kit';

export async function load({ url }) {
  const ID = url.pathname.slice(1);
  // get all RSVP data from db
  const data = await RSVPs.findOne({ _id: new ObjectId(ID) });
  // console.log(data);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)),
  };
};

export const actions = {
  default: async ({ request }) => {
    // get form data
    const data = await request.formData();

    const RSVPid = data.get('_id');

    const RSVP = {
      NPU: data.get('NPU'),
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: true,
    };
    // console.log(structuredClone(RSVP));
    // console.log(RSVPid);

    try {
      // put updated form data to database
      await RSVPs.updateOne({ _id: new ObjectId(RSVPid) },
        { $set: RSVP })
        .then(Response => console.log(Response))
        .catch(error => console.error(`Failed to update RSVP: ${error}`));

      return {
        status: 303,
        message: 'RSVP updated successfully',
        success: true,
        body: RSVP
      };
    } catch (error) {
      console.error(`Failed to update RSVP: ${error}`);
      return {
        status: 500,
        error: JSON.stringify(error),
        message: JSON.stringify(Error)
      };
    }
  }
};