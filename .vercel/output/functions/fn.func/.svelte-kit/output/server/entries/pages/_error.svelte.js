import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
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
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h2>Oops!<br>${escape($page.status)}: ${escape($page.error.message)}</h2> <h4 data-svelte-h="svelte-wwolxf">Page goof&#39;d. Try again!</h4> <img src="bonk-cheems.gif" alt="I'm working on it...">`;
});
export {
  Error$1 as default
};
