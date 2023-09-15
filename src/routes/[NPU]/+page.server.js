import { RSVPs } from '$db/RSVPs';

export async function load({ url }) {
  // get all RSVP data from db
  const data = await RSVPs.findOne({ NPU: url.pathname[1] });
  console.log(data);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)),
  };
};

export const actions = {
  save: async ({ request }) => {
    // get form data
    const data = await request.formData();

    const NPU = data.get('NPU');

    const RSVP = {
      NPU: NPU,
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: true
    };

    try {
      // put updated form data to database
      await RSVPs.updateOne({ NPU }, { $set: { FNAME, LNAME, GUEST, DIET } });

      return {
        status: 303,
        headers: {
          location: '/'
        }
      };
    } catch (err) {
      return {
        status: 500,
        body: err
      };
    }
  }
};