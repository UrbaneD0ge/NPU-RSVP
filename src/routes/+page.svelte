<script>
  export let data;

  $: ({ RSVPs } = data);
</script>

<h1>NPU Chairs Appreciation Dinner</h1>
<a href="/RSVP">RSVP</a>
<p>RSVPs go here:</p>
{#each RSVPs as RSVP}
  <div>
    <p>NPU: {RSVP.NPU}</p>
    <p>ATTENDEE: {RSVP.FNAME} {RSVP.LNAME}</p>
    <p>GUEST: {RSVP.GUEST}</p>
    <p>DIET: {RSVP.DIET}</p>
    <p>RSVP'd: {RSVP.RSVPd}</p>
    <p>ATTENDED: {RSVP.ATTENDED}</p>
  </div>
{/each}

<style>
  p {
    padding: 2px 10px;
    margin: 0;
  }

  div {
    margin: 1svw;
  }
  div:nth-child(even) {
    background-color: whitesmoke;
  }
</style>
