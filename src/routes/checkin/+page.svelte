<script>
  export let data;
  export let notCheckedIn;

  $: ({ RSVPs, notCheckedIn } = data);
</script>

<h1>Check In</h1>
<h2>
  Attendees Arrived: {RSVPs.length - notCheckedIn} | Attendees Not Arrived: {notCheckedIn}
</h2>
{#each RSVPs as RSVP (RSVP._id)}
  {#if !RSVP.ATTENDED}
    <div class="expected">
      <p>ID: {RSVP._id}</p>
      <p>NPU: {RSVP.NPU}</p>
      <p>ATTENDEE: {RSVP.FNAME} {RSVP.LNAME}</p>
      <p>GUEST: {RSVP.GUEST || ''}</p>
      <p>DIET: {RSVP.DIET || ''}</p>
      <p>RSVP'd: {RSVP.RSVPd ? '✅' : '❌'}</p>
      <p>ATTENDED: {RSVP.ATTENDED ? '✅' : '❌'}</p>
      <form action="?/checkIn" method="POST">
        <input type="hidden" name="ATTENDED" value={RSVPs.ATTENDED || false} />
        <input type="hidden" name="_id" value={RSVPs._id || false} />
        <button type="submit">Check In</button>
      </form>
    </div>
  {/if}
{/each}
<hr />
{#each RSVPs as RSVP (RSVP._id)}
  {#if RSVP.ATTENDED}
    <div class="arrived">
      <p>ID: {RSVP._id}</p>
      <p>NPU: {RSVP.NPU}</p>
      <p>ATTENDEE: {RSVP.FNAME} {RSVP.LNAME}</p>
      <p>GUEST: {RSVP.GUEST || ''}</p>
      <p>DIET: {RSVP.DIET || ''}</p>
      <p>RSVP'd: {RSVP.RSVPd ? '✅' : '❌'}</p>
      <p>ATTENDED: {RSVP.ATTENDED ? '✅' : '❌'}</p>
      <form action="?/checkIn" method="POST">
        <input type="hidden" name="ATTENDED" value={RSVPs.ATTENDED || false} />
        <input type="hidden" name="_id" value={RSVPs._id} />
        <button type="submit">Undo</button>
      </form>
    </div>
  {/if}
{/each}

<style>
  .arrived {
    color: grey;
  }
</style>
