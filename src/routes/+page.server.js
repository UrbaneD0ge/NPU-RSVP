import { RSVPs } from '$db/RSVPs';

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
  delete: async (event) => {
    // get form data
    const data = new FormData(event.target);

    const ID = data.get('_id');

    // write form data to database
    await RSVPs.deleteOne({ _id: ID });
  }
};