import { RSVPs } from '$db/RSVPs';
import { ObjectId } from 'mongodb';

export async function load({ context }) {

  // get all RSVP data from db
  const data = await RSVPs.find().sort({ NPU: 'asc' }).toArray();
  // const data = await NPUs.find();
  // console.log(data);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)),
  };
};

export const actions = {
  delete: async ({ request }) => {
    // get form data
    const data = await request.formData();
    console.log(data);

    // get ID from form data
    const RSVPid = data.get('_id');
    console.log(new ObjectId(RSVPid));

    // write form data to database
    await RSVPs.deleteOne({ _id: new ObjectId(RSVPid) })
      .then(Response => {
        console.log(Response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};