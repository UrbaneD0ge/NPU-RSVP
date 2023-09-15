import { RSVPs } from '$db/RSVPs';

export async function load({ context }) {

  // get all RSVP data from db
  const data = await RSVPs.find().project({ _id: 0 }).sort({ NPU: 'asc' }).toArray();
  // const data = await NPUs.find();
  // console.log(data);

  return {
    RSVPs: data,
  };
};

export const actions = {
  delete: async (event) => {
    // get form data
    const data = new FormData(event.target);

    const NPU = data.get('NPU');

    // write form data to database
    await RSVPs.deleteOne({ NPU });
  }
};