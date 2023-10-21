<script>
  import { page } from '$app/stores'; // navigation items

  //loader
  import Loader from '$lib/Loader.svelte';
  import { beforeNavigate, afterNavigate } from '$app/navigation';

  let isLoading = false;

  beforeNavigate(() => (isLoading = true));
  afterNavigate(() => (isLoading = false));

  // page transitions
  import { fade } from 'svelte/transition';

  export let data;
</script>

<header>
  <a href="/"><h1>2023 NPU Chairs' Appreciation Dinner</h1></a>

  <!-- {#if $page.route.id !== '/RSVP'}
    <ul>
      {#if $page.route.id !== '/'}
        <li><a href="/">Invitation</a></li>
      {/if}
      {#if $page.route.id !== '/checkin'}
        <li><a href="/checkin">Check In</a></li>
      {/if}
      {#if $page.route.id !== '/RSVP'}
        <li><a href="/RSVP">RSVP</a></li>
      {/if}
      {#if $page.route.id !== '/roster'}
        <li><a href="/roster">Roster</a></li>
      {/if}
    </ul>
  {/if} -->
</header>

{#key data.pathname}
  <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
    <slot />
  </div>
{/key}

{#if isLoading}
  <Loader />
{/if}

<footer>
  <p>©2023 Kip Dunlap for the Atlanta Department of City Planning</p>
</footer>

<style>
  h1 {
    font-family: 'Allura', cursive;
    font-size: 3rem;
    font-weight: 400;
    margin: 0.4em 0.4em 0 0.4em;
    /* text-align: center; */
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.2em;
  }

  a:visited {
    color: inherit;
  }

  p {
    font-weight: 200;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    footer p {
      font-size: 0.7rem;
      font-weight: 200;
    }
  }
</style>
