import { g as getContext, c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-h6jvx7.svelte-h6jvx7{font-family:'Allura', cursive;font-size:3rem;font-weight:400;margin:0.4em 0.4em 0 0.4em}a.svelte-h6jvx7.svelte-h6jvx7{color:inherit;text-decoration:none;font-size:1.2em}a.svelte-h6jvx7.svelte-h6jvx7:visited{color:inherit}ul.svelte-h6jvx7.svelte-h6jvx7{font-family:'Urbanist', sans-serif;display:flex;justify-content:space-around;list-style:none;margin:5px;padding:5px}footer.svelte-h6jvx7.svelte-h6jvx7{position:sticky}@media(max-width: 600px){h1.svelte-h6jvx7.svelte-h6jvx7{font-size:2.5rem}footer.svelte-h6jvx7 p.svelte-h6jvx7{font-size:0.7rem;font-weight:200}}@media print{ul.svelte-h6jvx7.svelte-h6jvx7{display:none}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header><a href="/" class="svelte-h6jvx7" data-svelte-h="svelte-i3u358"><h1 class="svelte-h6jvx7">2023 NPU Chairs&#39; Appreciation Dinner</h1></a> ${$page.route.id !== "/RSVP" ? `<ul class="svelte-h6jvx7">${$page.route.id !== "/" ? `<li data-svelte-h="svelte-28uhfh"><a href="/" class="svelte-h6jvx7">Invitation</a></li>` : ``} ${$page.route.id !== "/checkin" ? `<li data-svelte-h="svelte-ueuwg"><a href="/checkin" class="svelte-h6jvx7">Check In</a></li>` : ``} ${$page.route.id !== "/RSVP" ? `<li data-svelte-h="svelte-11x8npu"><a href="/RSVP" class="svelte-h6jvx7">RSVP</a></li>` : ``} ${$page.route.id !== "/roster" ? `<li data-svelte-h="svelte-1g7dcaa"><a href="/roster" class="svelte-h6jvx7">Roster</a></li>` : ``}</ul>` : ``}</header> ${slots.default ? slots.default({}) : ``} <footer class="svelte-h6jvx7" data-svelte-h="svelte-85teth"><p class="svelte-h6jvx7">©2023 Kip Dunlap for the Atlanta Department of City Planning</p> </footer>`;
});
export {
  Layout as default
};
