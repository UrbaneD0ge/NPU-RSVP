import { fail } from "@sveltejs/kit";
// import { addRSVP } from "$lib/index.js";

function addRSVP() {
  Request.RSVP = new RSVPs();
}

export const actions = {
  default: async ({ event }) => {
    const formData = await Request.formData()
    const RSVP = String(formData.get('RSVP'))


    if (!RSVP) {
      return fail(400, { RSVP, missing: true })
    }

    addRSVP(RSVP)

    return { success: true }
  }
}