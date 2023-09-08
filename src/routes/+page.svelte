<script>
  export let data;

  $: ({ RSVPs } = data);
</script>

<h1>NPU Chairs Appreciation Dinner</h1>
<p>RSVPs go here:</p>
{#each RSVPs as RSVP}
  <p>{RSVP.NPU}</p>
  <p>{RSVP.ATTENDEE}</p>
  <p>{RSVP.GUEST}</p>
  <p>{RSVP.DIET}</p>
{/each}
