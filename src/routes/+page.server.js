import { RSVPs } from '$db/RSVPs';

export async function load({ context }) {

  // get all RSVP data from db
  const data = await RSVPs.find().project({ _id: 0 }).sort({ NPU: 'asc' }).toArray();
  // const data = await NPUs.find();
  console.log(data);

  return {
    RSVPs: data,
  };
};
