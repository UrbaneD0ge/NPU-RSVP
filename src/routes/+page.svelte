<script>
  export let data;

  $: ({ RSVPs } = data);
</script>

<h1>NPU Chairs Appreciation Dinner</h1>
<a href="/RSVP">RSVP</a> | <a href="/checkin">Check In</a>
<p>RSVPs go here:</p>
<table width="100%" border="1px solid black">
  <thead>
    <tr>
      <th>NPU</th>
      <th>ATTENDEE</th>
      <th>GUEST</th>
      <th>DIET</th>
      <th>RSVP'd</th>
      <th>ATTENDED</th>
      <th>EDIT</th>
      <th>DELETE</th>
    </tr>
  </thead>
  {#each RSVPs as RSVP}
    <tr>
      <td><strong>{RSVP.NPU}</strong></td>
      <td>{RSVP.FNAME} {RSVP.LNAME}</td>
      <td>{RSVP.GUEST || '-'}</td>
      <td>{RSVP.DIET || '-'}</td>
      <td>{RSVP.RSVPd ? '✅' : '❌'}</td>
      <td>{RSVP.ATTENDED ? '✅' : '❌'}</td>
      <td>
        <form action="?/edit" method="POST">
          <button>EDIT</button>
        </form>
      </td>
      <td>
        <form action="?/delete" method="POST">
          <button>DELETE</button>
        </form></td
      >
    </tr>
  {/each}
</table>

<style>
  p {
    padding: 2px 10px;
    margin: 0;
  }

  td {
    padding: 0.1svw;
  }
  tr:nth-child(even) {
    background-color: rgb(236, 236, 236);
  }
</style>
