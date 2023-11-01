<script>
  export let data;
  let showPlus = true;

  $: ({ RSVPs } = data);
</script>

<svelte:head>
  <title>RSVP Roster</title>
</svelte:head>

<div class="container">
  <h2>
    RSVPs: {RSVPs.length} || PlusOnes: {RSVPs.filter((r) => r.PLUSONE)
      .length}<br />
    Accepted: {RSVPs.filter((r) => r.RSVPd).length} | Regrets: {RSVPs.filter(
      (r) => !r.RSVPd
    ).length}
    || Attended: {RSVPs.filter((r) => r.ATTENDED).length} | Not Attended: {RSVPs.filter(
      (r) => !r.ATTENDED
    ).length}
  </h2>

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
        <th>CONFIRMED</th>
        <th>DELETE</th>
      </tr>
    </thead>
    {#each RSVPs as RSVP (RSVP._id)}
      {#if RSVP.PLUSONE === false}
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
          <td class="data-center"
            >{RSVP.PHONE ? '📞' : ''}{RSVP.EMAIL ? '📧' : ''}</td
          >
          <td class="data-center">
            <form action="?/delete" method="post">
              <input type="hidden" name="_id" value={RSVP._id} />
              <button id="DELETE">DELETE</button>
            </form>
          </td>
        </tr>
      {:else if showPlus === true}
        <tr>
          <td class="data-center"><strong>{RSVP.NPU}</strong></td>
          <td> -</td>
          <td>{RSVP.GUEST || '-'}</td>
          <td>{RSVP.DIET || '-'}</td>
          <td class="data-center">{RSVP.RSVPd ? '✅' : '❌'}</td>
          <td class="data-center">{RSVP.ATTENDED ? '✅' : '❌'}</td>
          <td class="data-center">
            <a href="/{RSVP._id}">
              <button type="button" id="edit">EDIT</button>
            </a>
          </td>
          <td class="data-center">-</td>
          <td class="data-center">
            <form action="?/delete" method="post">
              <input type="hidden" name="_id" value={RSVP._id} />
              <button id="DELETE">DELETE</button>
            </form>
          </td>
        </tr>
      {/if}
    {/each}
  </table>
  <label for="showPlusOnes">Show PlusOnes:</label>
  <input type="checkbox" id="showPlusOnes" bind:checked={showPlus} />
</div>

<style>
  a {
    /* change visited link color */
    color: #aeaeae;
  }

  a:visited {
    color: #aeaeae !important;
  }

  h2 {
    text-align: center;
    font-weight: 200;
  }

  table {
    border-collapse: collapse;
    border: 1px solid black;
  }

  th {
    /* text-decoration: inherit !important; */
    font-weight: 500;
  }

  td {
    padding: 0.1svw;
    padding-inline: 0.5vw;
    font-weight: 200;
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

  @media print {
    * {
      color: black !important;
    }
  }
</style>
