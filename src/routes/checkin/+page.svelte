<script>
  export let data;
  export let notCheckedIn;

  $: ({ RSVPs, notCheckedIn } = data);
</script>

<h1>Check In</h1>
<h2>
  Attendees Arrived: {RSVPs.length - notCheckedIn} | Attendees Not Arrived: {notCheckedIn}
</h2>
<div class="container">
  {#each RSVPs as RSVP (RSVP._id)}
    {#if !RSVP.ATTENDED}
      <div class="card expected">
        <p>NPU:<strong>{RSVP.NPU}</strong></p>
        <p>ATTENDEE:{RSVP.FNAME} {RSVP.LNAME}</p>
        <p>GUEST:{RSVP.GUEST || ''}</p>
        <p>DIET:{RSVP.DIET || ''}</p>
        <p>RSVP'd:{RSVP.RSVPd ? '✅' : '❌'}</p>
        <p>ATTENDED:{RSVP.ATTENDED ? '✅' : '❌'}</p>
        <form action="?/checkIn" method="POST">
          <input
            type="hidden"
            name="ATTENDED"
            value={RSVPs.ATTENDED || false}
          />
          <input type="hidden" name="_id" value={RSVPs._id || false} />
          <button type="submit">Check In</button>
        </form>
      </div>
    {/if}
  {/each}
</div>
<hr />
<div class="container">
  {#each RSVPs as RSVP (RSVP._id)}
    {#if RSVP.ATTENDED}
      <div class="card arrived">
        <p>NPU:<strong>{RSVP.NPU}</strong></p>
        <p>ATTENDEE:{RSVP.FNAME} {RSVP.LNAME}</p>
        <p>GUEST:{RSVP.GUEST || ''}</p>
        <p>DIET:{RSVP.DIET || ''}</p>
        <p>RSVP'd:{RSVP.RSVPd ? '✅' : '❌'}</p>
        <p>ATTENDED:{RSVP.ATTENDED ? '✅' : '❌'}</p>
        <form action="?/checkIn" method="POST">
          <input
            type="hidden"
            name="ATTENDED"
            value={RSVPs.ATTENDED || false}
          />
          <input type="hidden" name="_id" value={RSVPs._id} />
          <button type="submit">Undo</button>
        </form>
      </div>
    {/if}
  {/each}
</div>

<style>
  .arrived {
    color: grey;
  }

  .card {
    background-color: rgb(255, 255, 255, 0.35);
    border-radius: 20px;
    border: 1px solid black;
    padding: 2rem;
    width: 25%;
    height: 40svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    margin: 0 auto;
    width: 85lvw;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  p {
    padding: 5px;
    margin: 0;
  }
</style>
