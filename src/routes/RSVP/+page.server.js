import { RSVPs } from '../../db/RSVPs.js'
// import { RSVPs } from '../../models.RSVPs.js'
/** @type {import('./$types').Actions} */

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const FNAME = data.get('FNAME');
    const LNAME = data.get('LNAME');

    data = new RSVPs();

    console.log(...data)
    return { success: true };
  }
}