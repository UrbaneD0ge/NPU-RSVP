import { RSVPs } from '$db/RSVPs';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
  const ID = url.pathname.slice(1);
  // if path is not a valid ObjectId, redirect to /
  if (!ObjectId.isValid(ID)) {
    throw redirect(303, '/');
  }
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

    // get RSVP status from form and coerce to boolean
    let rsvpStatus = data.get('RSVPd');
    rsvpStatus = rsvpStatus === 'true' ? true : false;

    let phoneConf = data.get('PHONE');
    phoneConf = phoneConf == 'on' ? true : false;
    console.log(phoneConf)

    let emailConf = data.get('EMAIL');
    emailConf = emailConf == 'on' ? true : false;
    console.log(emailConf)

    const RSVP = {
      NPU: data.get('NPU'),
      FNAME: data.get('FNAME'),
      LNAME: data.get('LNAME'),
      GUEST: data.get('GUEST'),
      DIET: data.get('DIET'),
      RSVPd: rsvpStatus,
      PHONE: phoneConf,
      EMAIL: emailConf
    };

    try {
      // put updated form data to database
      await RSVPs.updateOne({ _id: new ObjectId(RSVPid) },
        { $set: RSVP })
        .then(Response => console.log(Response))
        .catch(error => console.error(`Failed to update RSVP: ${error}`));
    } catch (error) {
      return {
        status: 500,
        error: JSON.stringify(error),
        message: "Error occurred while updating RSVP."
      };
    }
    throw redirect(303, '/');
  },
};