<script>
  export let data;
  export let notCheckedIn;

  $: ({ RSVPs, notCheckedIn } = data);
</script>

<h1>Check In</h1>
<a href="/">Roster</a> | <a href="/RSVP">RSVP</a>
<h2>Attendees Not Arrived: {notCheckedIn}</h2>
{#each RSVPs as RSVP}
  {#if !RSVP.ATTENDED}
    <div class="expected">
      <p>NPU: {RSVP.NPU}</p>
      <p>ATTENDEE: {RSVP.FNAME} {RSVP.LNAME}</p>
      <p>GUEST: {RSVP.GUEST || ''}</p>
      <p>DIET: {RSVP.DIET || ''}</p>
      <p>RSVP'd: {RSVP.RSVPd ? '✅' : '❌'}</p>
      <p>ATTENDED: {RSVP.ATTENDED ? '✅' : '❌'}</p>
      <form action="?/checkIn" method="PUT">
        <button>Check In</button>
      </form>
    </div>
  {:else}
    <br />
    <hr />
    <div class="arrived">
      <p>NPU: {RSVP.NPU}</p>
      <p>ATTENDEE: {RSVP.FNAME} {RSVP.LNAME}</p>
      <p>GUEST: {RSVP.GUEST || ''}</p>
      <p>DIET: {RSVP.DIET || ''}</p>
      <p>RSVP'd: {RSVP.RSVPd ? '✅' : '❌'}</p>
      <p>ATTENDED: {RSVP.ATTENDED ? '✅' : '❌'}</p>
    </div>
  {/if}
{/each}

<style>
  .arrived {
    color: grey;
  }
</style>
