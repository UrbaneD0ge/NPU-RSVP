import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".arrived.svelte-1iffx1b button.svelte-1iffx1b{color:grey;filter:saturate(0.1)}.card.svelte-1iffx1b.svelte-1iffx1b{background-color:rgba(255, 255, 255, 0.85);border-radius:20px;border:1px solid black;padding:0.5rem;width:35svh;height:35svh;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 auto;opacity:0.875;transition:all 0.5s ease;box-shadow:inset 0 0 12px 2px rgba(0, 0, 0, 0.5)}.container.svelte-1iffx1b.svelte-1iffx1b{margin:0 auto;width:85lvw;display:flex;flex-wrap:wrap;gap:1rem;justify-content:center}hr.svelte-1iffx1b.svelte-1iffx1b{margin:20px auto;width:85vw}h2.svelte-1iffx1b.svelte-1iffx1b{font-weight:200}h4.svelte-1iffx1b.svelte-1iffx1b{margin:0;padding:0;font-size:1.5rem}h6.svelte-1iffx1b.svelte-1iffx1b{margin:0;padding:0;font-size:1.2rem}p.svelte-1iffx1b.svelte-1iffx1b{padding:0;margin:0}#formMessage.svelte-1iffx1b.svelte-1iffx1b{color:rgb(151, 94, 200);font-size:1.5rem;position:fixed;top:2svh;left:40svw;background-color:whitesmoke;border-radius:20px;padding:1rem;z-index:100}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let RSVPs;
  let { data } = $$props;
  let { form } = $$props;
  let { notCheckedIn } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.notCheckedIn === void 0 && $$bindings.notCheckedIn && notCheckedIn !== void 0)
    $$bindings.notCheckedIn(notCheckedIn);
  $$result.css.add(css);
  ({ RSVPs, notCheckedIn } = data);
  return `${$$result.head += `<!-- HEAD_svelte-1e6wdmk_START -->${$$result.title = `<title>Check In</title>`, ""}<!-- HEAD_svelte-1e6wdmk_END -->`, ""} <div class="container svelte-1iffx1b"><h2 class="svelte-1iffx1b">Attendees Arrived: ${escape(RSVPs.length - notCheckedIn)} | Expected: ${escape(notCheckedIn)}</h2></div> ${form?.message && form?.message !== "" ? ` ${escape(setTimeout(
    () => {
      form.message = "";
    },
    2500
  ))} <p id="formMessage" class="svelte-1iffx1b">${escape(form.message)}</p>` : ``} <div class="container svelte-1iffx1b">${each(RSVPs, (RSVP) => {
    return `${Boolean(RSVP.ATTENDED) === false ? `${RSVP.PLUSONE === false ? `<div class="expected"><form action="?/checkIn" method="POST"><button class="card svelte-1iffx1b" type="submit"><div><p class="svelte-1iffx1b" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-1iffx1b"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-1iffx1b" data-svelte-h="svelte-1yi47c4">ATTENDEE:</p> <h4 class="svelte-1iffx1b">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h4></div> ${RSVP.GUEST ? `<div><p class="svelte-1iffx1b" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h6 class="svelte-1iffx1b">${escape(RSVP.GUEST || "")}</h6> </div>` : ``}  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``} ${RSVP.PLUSONE === true ? `<div class="expected"><form action="?/checkIn" method="POST"><button class="card svelte-1iffx1b" type="submit"><div><p class="svelte-1iffx1b" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-1iffx1b"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-1iffx1b" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h4 class="svelte-1iffx1b">${escape(RSVP.GUEST || "")}</h4></div> <div><p class="svelte-1iffx1b" data-svelte-h="svelte-mstych">GUEST OF:</p> <h6 class="svelte-1iffx1b">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h6></div>  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``}` : ``}`;
  })}</div> <hr class="svelte-1iffx1b"> <div class="container svelte-1iffx1b">${each(RSVPs, (RSVP) => {
    return `${Boolean(RSVP.ATTENDED) === true ? `${RSVP.PLUSONE === false ? `<div class="arrived svelte-1iffx1b"><form action="?/checkIn" method="POST"><button class="card svelte-1iffx1b" type="submit"><div><p class="svelte-1iffx1b" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-1iffx1b"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-1iffx1b" data-svelte-h="svelte-1yi47c4">ATTENDEE:</p> <h4 class="svelte-1iffx1b">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h4></div> ${RSVP.GUEST ? `<div><p class="svelte-1iffx1b" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h6 class="svelte-1iffx1b">${escape(RSVP.GUEST || "")}</h6> </div>` : ``}  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``} ${RSVP.PLUSONE === true ? `<div class="arrived svelte-1iffx1b"><form action="?/checkIn" method="POST"><button class="card svelte-1iffx1b" type="submit"><div><p class="svelte-1iffx1b" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-1iffx1b"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-1iffx1b" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h4 class="svelte-1iffx1b">${escape(RSVP.GUEST || "")}</h4></div> <div><p class="svelte-1iffx1b" data-svelte-h="svelte-mstych">GUEST OF:</p> <h6 class="svelte-1iffx1b">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h6></div>  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``}` : ``}`;
  })} </div>`;
});
export {
  Page as default
};
