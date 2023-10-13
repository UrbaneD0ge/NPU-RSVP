<script>
  import { page } from '$app/stores';
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

<slot />

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

  ul {
    font-family: 'Urbanist', sans-serif;
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 5px;
    padding: 5px;
  }

  footer {
    position: sticky;
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

  @media print {
    ul {
      display: none;
    }
  }
</style>
