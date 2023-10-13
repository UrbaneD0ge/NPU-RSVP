import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-19tqzkd{color:#aeaeae}a.svelte-19tqzkd:visited{color:#aeaeae !important}h2.svelte-19tqzkd{text-align:center;font-weight:200}table.svelte-19tqzkd{border-collapse:collapse;border:1px solid black}th.svelte-19tqzkd{font-weight:500}td.svelte-19tqzkd{padding:0.1svw;padding-inline:0.5vw;font-weight:200}.container.svelte-19tqzkd{width:90%;margin:0 auto}.data-center.svelte-19tqzkd{text-align:center}tr.svelte-19tqzkd:nth-child(even){background-color:rgba(255, 255, 255, 0.3)}@media print{.svelte-19tqzkd{color:black !important}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let RSVPs;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ RSVPs } = data);
  return `${$$result.head += `<!-- HEAD_svelte-16qmvm1_START -->${$$result.title = `<title>RSVP Roster</title>`, ""}<!-- HEAD_svelte-16qmvm1_END -->`, ""} <div class="container svelte-19tqzkd"><h2 class="svelte-19tqzkd">RSVPs: ${escape(RSVPs.length)} || PlusOnes: ${escape(RSVPs.filter((r) => r.PLUSONE).length)}<br class="svelte-19tqzkd">
    Accepted: ${escape(RSVPs.filter((r) => r.RSVPd).length)} | Regrets: ${escape(RSVPs.filter((r) => !r.RSVPd).length)}
    || Attended: ${escape(RSVPs.filter((r) => r.ATTENDED).length)} | Not Attended: ${escape(RSVPs.filter((r) => !r.ATTENDED).length)}</h2> <table width="100%" border="1px solid black" class="svelte-19tqzkd"><thead class="svelte-19tqzkd" data-svelte-h="svelte-79j2y4"><tr class="svelte-19tqzkd"><th class="svelte-19tqzkd">NPU</th> <th class="svelte-19tqzkd">ATTENDEE</th> <th class="svelte-19tqzkd">GUEST</th> <th class="svelte-19tqzkd">DIET</th> <th class="svelte-19tqzkd">RSVP&#39;d</th> <th class="svelte-19tqzkd">ATTENDED</th> <th class="svelte-19tqzkd">EDIT</th> <th class="svelte-19tqzkd">DELETE</th></tr></thead> ${each(RSVPs, (RSVP) => {
    return `${RSVP.PLUSONE === false ? `<tr class="svelte-19tqzkd"><td class="data-center svelte-19tqzkd"><strong class="svelte-19tqzkd">${escape(RSVP.NPU)}</strong></td> <td class="svelte-19tqzkd">${escape(RSVP.FNAME)} ${escape(RSVP.LNAME)}</td> <td class="svelte-19tqzkd">${escape(RSVP.GUEST || "-")}</td> <td class="svelte-19tqzkd">${escape(RSVP.DIET || "-")}</td> <td class="data-center svelte-19tqzkd">${escape(RSVP.RSVPd ? "✅" : "❌")}</td> <td class="data-center svelte-19tqzkd">${escape(RSVP.ATTENDED ? "✅" : "❌")}</td> <td class="data-center svelte-19tqzkd"><a href="${"/" + escape(RSVP._id, true)}" class="svelte-19tqzkd"><button type="button" id="edit" class="svelte-19tqzkd" data-svelte-h="svelte-rolvzn">EDIT</button> </a></td> <td class="data-center svelte-19tqzkd"><form action="?/delete" method="post" class="svelte-19tqzkd"><input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)} class="svelte-19tqzkd"> <button id="DELETE" class="svelte-19tqzkd" data-svelte-h="svelte-3rgmoi">DELETE</button> </form></td> </tr>` : `<tr class="svelte-19tqzkd"><td class="data-center svelte-19tqzkd"><strong class="svelte-19tqzkd">${escape(RSVP.NPU)}</strong></td> <td class="svelte-19tqzkd" data-svelte-h="svelte-1pnhta9">-</td> <td class="svelte-19tqzkd">${escape(RSVP.GUEST || "-")}</td> <td class="svelte-19tqzkd">${escape(RSVP.DIET || "-")}</td> <td class="data-center svelte-19tqzkd">${escape(RSVP.RSVPd ? "✅" : "❌")}</td> <td class="data-center svelte-19tqzkd">${escape(RSVP.ATTENDED ? "✅" : "❌")}</td> <td class="data-center svelte-19tqzkd"><a href="${"/" + escape(RSVP._id, true)}" class="svelte-19tqzkd"><button type="button" id="edit" class="svelte-19tqzkd" data-svelte-h="svelte-rolvzn">EDIT</button> </a></td> <td class="data-center svelte-19tqzkd"><form action="?/delete" method="post" class="svelte-19tqzkd"><input type="hidden" name="_id"${add_attribute("value", RSVP._id, 0)} class="svelte-19tqzkd"> <button id="DELETE" class="svelte-19tqzkd" data-svelte-h="svelte-3rgmoi">DELETE</button> </form></td> </tr>`}`;
  })}</table> </div>`;
});
export {
  Page as default
};
