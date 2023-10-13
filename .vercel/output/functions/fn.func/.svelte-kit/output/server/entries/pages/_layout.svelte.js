import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1twn11y.svelte-1twn11y{font-family:'Allura', cursive;font-size:3rem;font-weight:400;margin:0.4em 0.4em 0 0.4em}a.svelte-1twn11y.svelte-1twn11y{color:inherit;text-decoration:none;font-size:1.2em}a.svelte-1twn11y.svelte-1twn11y:visited{color:inherit}p.svelte-1twn11y.svelte-1twn11y{font-weight:200}@media(max-width: 600px){h1.svelte-1twn11y.svelte-1twn11y{font-size:2.5rem}footer.svelte-1twn11y p.svelte-1twn11y{font-size:0.7rem;font-weight:200}}@media print{}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header data-svelte-h="svelte-1fuliln"><a href="/" class="svelte-1twn11y"><h1 class="svelte-1twn11y">2023 NPU Chairs&#39; Appreciation Dinner</h1></a> </header> ${slots.default ? slots.default({}) : ``} <footer class="svelte-1twn11y" data-svelte-h="svelte-85teth"><p class="svelte-1twn11y">©2023 Kip Dunlap for the Atlanta Department of City Planning</p> </footer>`;
});
export {
  Layout as default
};
