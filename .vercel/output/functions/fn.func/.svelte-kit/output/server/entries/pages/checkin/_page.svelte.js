import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".arrived.svelte-k4uvh3 button.svelte-k4uvh3{color:grey;filter:saturate(0.1)}.card.svelte-k4uvh3.svelte-k4uvh3{background-color:rgba(255, 255, 255, 0.85);border-radius:20px;border:1px solid black;padding:0.5rem;width:35svh;height:35svh;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 auto;opacity:0.875;transition:all 0.5s ease;box-shadow:inset 0 0 12px 2px rgba(0, 0, 0, 0.5)}.container.svelte-k4uvh3.svelte-k4uvh3{margin:0 auto;width:85lvw;display:flex;flex-wrap:wrap;gap:1rem;justify-content:center}hr.svelte-k4uvh3.svelte-k4uvh3{margin:20px auto;width:85vw}h2.svelte-k4uvh3.svelte-k4uvh3{font-weight:200}h4.svelte-k4uvh3.svelte-k4uvh3{margin:0;padding:0;font-size:1.5rem}h6.svelte-k4uvh3.svelte-k4uvh3{margin:0;padding:0;font-size:1.2rem}p.svelte-k4uvh3.svelte-k4uvh3{padding:0;margin:0}#formMessage.svelte-k4uvh3.svelte-k4uvh3{color:rgb(151, 94, 200);font-size:1.5rem;position:fixed;top:2svh;left:30svw;background-color:whitesmoke;border-radius:20px;padding:1rem}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1e6wdmk_START -->${$$result.title = `<title>Check In</title>`, ""}<!-- HEAD_svelte-1e6wdmk_END -->`, ""} <div class="container svelte-k4uvh3"><h2 class="svelte-k4uvh3">Attendees Arrived: ${escape(RSVPs.length - notCheckedIn)} | Expected: ${escape(notCheckedIn)}</h2></div> ${form?.message && form?.message !== "" ? ` ${escape(setTimeout(
    () => {
      form.message = "";
    },
    2500
  ))} <p id="formMessage" class="svelte-k4uvh3">${escape(form.message)}</p>` : ``} <div class="container svelte-k4uvh3">${each(RSVPs, (RSVP) => {
    return `${Boolean(RSVP.ATTENDED) === false ? `${RSVP.PLUSONE === false ? `<div class="expected"><form action="?/checkIn" method="POST"><button class="card svelte-k4uvh3" type="submit"><div><p class="svelte-k4uvh3" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-k4uvh3"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-k4uvh3" data-svelte-h="svelte-1yi47c4">ATTENDEE:</p> <h4 class="svelte-k4uvh3">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h4></div> ${RSVP.GUEST ? `<div><p class="svelte-k4uvh3" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h6 class="svelte-k4uvh3">${escape(RSVP.GUEST || "")}</h6> </div>` : ``}  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``} ${RSVP.PLUSONE === true ? `<div class="expected"><form action="?/checkIn" method="POST"><button class="card svelte-k4uvh3" type="submit"><div><p class="svelte-k4uvh3" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-k4uvh3"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-k4uvh3" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h4 class="svelte-k4uvh3">${escape(RSVP.GUEST || "")}</h4></div> <div><p class="svelte-k4uvh3" data-svelte-h="svelte-mstych">GUEST OF:</p> <h6 class="svelte-k4uvh3">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h6></div>  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``}` : ``}`;
  })}</div> <hr class="svelte-k4uvh3"> <div class="container svelte-k4uvh3">${each(RSVPs, (RSVP) => {
    return `${Boolean(RSVP.ATTENDED) === true ? `${RSVP.PLUSONE === false ? `<div class="arrived svelte-k4uvh3"><form action="?/checkIn" method="POST"><button class="card svelte-k4uvh3" type="submit"><div><p class="svelte-k4uvh3" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-k4uvh3"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-k4uvh3" data-svelte-h="svelte-1yi47c4">ATTENDEE:</p> <h4 class="svelte-k4uvh3">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h4></div> ${RSVP.GUEST ? `<div><p class="svelte-k4uvh3" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h6 class="svelte-k4uvh3">${escape(RSVP.GUEST || "")}</h6> </div>` : ``}  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``} ${RSVP.PLUSONE === true ? `<div class="arrived svelte-k4uvh3"><form action="?/checkIn" method="POST"><button class="card svelte-k4uvh3" type="submit"><div><p class="svelte-k4uvh3" data-svelte-h="svelte-1ooibs3">NPU:</p> <h6 class="svelte-k4uvh3"><strong>${escape(RSVP.NPU)}</strong></h6></div> <div><p class="svelte-k4uvh3" data-svelte-h="svelte-1qjdyoe">GUEST:</p> <h4 class="svelte-k4uvh3">${escape(RSVP.GUEST || "")}</h4></div> <div><p class="svelte-k4uvh3" data-svelte-h="svelte-mstych">GUEST OF:</p> <h6 class="svelte-k4uvh3">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</h6></div>  <input type="hidden" name="ATTENDED"${add_attribute("value", RSVP.ATTENDED, 0)}> <input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)}> </button></form> </div>` : ``}` : ``}`;
  })} </div>`;
});
export {
  Page as default
};
