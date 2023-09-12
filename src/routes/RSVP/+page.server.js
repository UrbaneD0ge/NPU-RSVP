import { error, fail, redirect } from "@sveltejs/kit";
import { RSVPs } from '$db/RSVPs';
import { getRequest, setResponse } from "@sveltejs/kit/node";

// import { addRSVP } from "$lib/index.js";

// function addRSVP(RSVP) {
//   Request.RSVP = new RSVPs();
// }

export const actions = {
  default: async ({ request }) => {
    const RSVP = await request.formData();
    console.log(RSVP);

    for (keys in RSVP) {
      RSVP[keys] = body[keys]
      return { success: true }
    }
    try {
      RSVP = await RSVP.save()
      redirect(200, '/')
    }
    catch {
      // console.log(getRequest(RSVP));
      return fail(500, { message: 'Failed to write to db.' })
    }

  }
}