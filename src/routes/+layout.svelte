<nav>
  <h1>NPU Chairs Appreciation Dinner</h1>
  <ul>
    <li><a href="/">Roster</a></li>
    <li><a href="/checkin">Check In</a></li>
    <li><a href="/RSVP">RSVP</a></li>
  </ul>
</nav>

<slot />

<footer>
  <p>©2023 Kip Dunlap for the Atlanta Department of City Planning</p>
</footer>

<style>
  nav {
    color: #fff;
    padding: 5px;
    margin-bottom: 2svh;
  }

  a:visited {
    color: #fff;
  }

  nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 5px;
    padding: 5px;
  }

  footer {
    position: sticky;
  }
</style>
