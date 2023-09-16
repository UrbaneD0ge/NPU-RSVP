import { RSVPs } from '$db/RSVPs';
import { ObjectId } from 'mongodb';

export async function load({ url }) {
  const ID = url.pathname.slice(1);
  // get all RSVP data from db
  const data = await RSVPs.findOne({ _id: new ObjectId(ID) });
  console.log(data);

  return {
    RSVPs: JSON.parse(JSON.stringify(data)),
  };
};

export const actions = {
  default: async ({ request }) => {
    // get form data
    const data = await request.formData();

    const ID = data.get('_id');
    console.log('id', ID);

    const RSVP = {
      NPU: data.get('NPU'),
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: true
    };

    try {
      // put updated form data to database
      await RSVPs.save({
        _id: new ObjectId(RSVP._id)
      }, { $set: { RSVP } });

      console.log('RSVP', RSVP);

      return {
        status: 303,
        body: RSVP,
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