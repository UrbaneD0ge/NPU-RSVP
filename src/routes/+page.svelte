<script>
  export let data;

  $: ({ RSVPs } = data);
</script>

<svelte:head>
  <title>RSVP Roster</title>
</svelte:head>

<div class="container">
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
    {#each RSVPs as RSVP (RSVP._id)}
      <tr>
        <td class="data-center"><strong>{RSVP.NPU}</strong></td>
        <td>{RSVP.FNAME} {RSVP.LNAME}</td>
        <td>{RSVP.GUEST || '-'}</td>
        <td>{RSVP.DIET || '-'}</td>
        <td class="data-center">{RSVP.RSVPd ? '✅' : '❌'}</td>
        <td class="data-center">{RSVP.ATTENDED ? '✅' : '❌'}</td>
        <td class="data-center">
          <a href="/{RSVP._id}">
            <button type="button" id="edit">EDIT</button>
          </a>
        </td>
        <td class="data-center">
          <form action="?/delete" method="post">
            <input type="hidden" name="_id" value={RSVP._id} />
            <button>DELETE</button>
          </form></td
        >
      </tr>
    {/each}
  </table>
</div>

<style>
  a {
    /* change visited link color */
    color: #aeaeae;
  }

  a:visited {
    color: #aeaeae !important;
  }
  table {
    border-collapse: collapse;
    border: 1px solid black;
  }

  td {
    padding: 0.1svw;
    padding-inline: 0.5vw;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .data-center {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.3);
  }
</style>
