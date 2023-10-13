import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1m2s9vz{background-color:rgb(255, 255, 255, 0.55);border-radius:20px;padding:2rem;width:50%;margin:0 auto}button.svelte-1m2s9vz{width:100%;height:2rem;font-size:1.4rem}form.svelte-1m2s9vz{display:flex;flex-direction:column;width:80%;margin:0 auto}input.svelte-1m2s9vz,select.svelte-1m2s9vz,textarea.svelte-1m2s9vz{margin-bottom:1rem;height:2rem;font-size:1.2rem;border-radius:8px}button.svelte-1m2s9vz,select.svelte-1m2s9vz{border-radius:8px}textarea.svelte-1m2s9vz{resize:vertical}h3.svelte-1m2s9vz{height:3rem;font-size:2rem;margin:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let RSVPs;
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ RSVPs } = data);
  return `${$$result.head += `<!-- HEAD_svelte-14k95jc_START -->${$$result.title = `<title>Edit RSVP</title>`, ""}<!-- HEAD_svelte-14k95jc_END -->`, ""} ${form?.error ? `<p style="color: red;">${escape(form.error)}</p>` : ``} <div class="card svelte-1m2s9vz"><form method="POST" class="svelte-1m2s9vz"><h3 class="svelte-1m2s9vz">NPU: ${escape(RSVPs.NPU)}</h3> <input type="hidden" name="NPU" id="NPU"${add_attribute("value", RSVPs.NPU, 0)} class="svelte-1m2s9vz"> <input type="hidden" name="_id" id="_id"${add_attribute("value", RSVPs._id, 0)} class="svelte-1m2s9vz"> <label for="FNAME" data-svelte-h="svelte-23e21p">First:</label> ${form?.missing ? `<p data-svelte-h="svelte-5mp308">This field is required!</p>` : ``} <input type="text" name="FNAME" id="FNAME"${add_attribute("value", RSVPs.FNAME ?? "", 0)} class="svelte-1m2s9vz"> <label for="LNAME" data-svelte-h="svelte-1xj4whl">Last:</label> ${form?.missing ? `<p data-svelte-h="svelte-5mp308">This field is required!</p>` : ``} <input type="text" name="LNAME" id="LNAME"${add_attribute("value", RSVPs.LNAME ?? "", 0)} class="svelte-1m2s9vz"> <label for="GUEST" data-svelte-h="svelte-bavhaq">The name of your Guest:</label> <input type="text" name="GUEST" id="GUEST"${add_attribute("value", RSVPs.GUEST ?? "", 0)} class="svelte-1m2s9vz"> <label for="DIET" data-svelte-h="svelte-1cgw2ro">Please inform us of any allergies or dietary restrictions:</label> <textarea name="DIET" id="DIET" class="svelte-1m2s9vz">${escape(RSVPs.DIET ?? "", false)}</textarea> <label for="RSVPd" data-svelte-h="svelte-1hd0zjw">Will you be attending?</label> <select name="RSVPd" id="RSVPd" required class="svelte-1m2s9vz"><option value="true" data-svelte-h="svelte-1tk2u89">Yes, I plan to attend!</option><option value="false" data-svelte-h="svelte-ma48hh">Regrets, I won&#39;t be able to join.</option></select> <button type="submit" class="svelte-1m2s9vz" data-svelte-h="svelte-1gy2hfi">SAVE</button></form></div> ${form?.success ? `<p data-svelte-h="svelte-lnqaxo">RSVP submitted successfully!</p>` : ``}`;
});
export {
  Page as default
};
