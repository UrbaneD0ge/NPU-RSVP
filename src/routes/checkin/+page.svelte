<script>
  export let data;
  export let form;
  export let notCheckedIn;
  import { enhance } from '$app/forms';
  import { fade } from 'svelte/transition';

  $: ({ RSVPs, notCheckedIn } = data);
</script>

<svelte:head>
  <title>Check In</title>
</svelte:head>

<div class="container">
  <h2>
    Attendees Arrived: {RSVPs.length - notCheckedIn} | Attendees Not Arrived: {notCheckedIn}
  </h2>
</div>

{#if form?.message && form?.message !== ''}
  <!-- Fade out after 5 seconds -->
  {setTimeout(() => {
    form.message = '';
  }, 5000)}
  <p id="formMessage" transition:fade>{form.message}</p>
{/if}

<div class="container">
  {#each RSVPs as RSVP (RSVP._id)}
    {#if Boolean(RSVP.ATTENDED) === false}
      <div class="expected">
        <form action="?/checkIn" method="POST" use:enhance>
          <button class="card" type="submit">
            <p>NPU:</p>
            <h6><strong>{RSVP.NPU}</strong></h6>
            <p>ATTENDEE:</p>
            <h6>{RSVP.FNAME} {RSVP.LNAME}</h6>

            <p>GUEST:</p>
            <h6>{RSVP.GUEST || ''}</h6>

            <p>RSVP'd:</p>
            <h6>{RSVP.RSVPd ? '✅' : '❌'}</h6>

            <p>ATTENDED:</p>
            <h6>{RSVP.ATTENDED ? '✅' : '❌'}</h6>

            <input type="hidden" name="ATTENDED" value={RSVP.ATTENDED} />
            <input type="hidden" name="_id" value={RSVP._id} />
          </button>
        </form>
      </div>
    {/if}
  {/each}
</div>
<hr />
<div class="container">
  {#each RSVPs as RSVP (RSVP._id)}
    {#if Boolean(RSVP.ATTENDED) === true}
      <div class="arrived">
        <form action="?/checkIn" method="POST" use:enhance>
          <button class="card" type="submit">
            <p>NPU:</p>
            <h6><strong>{RSVP.NPU}</strong></h6>

            <p>ATTENDEE:</p>
            <h6>{RSVP.FNAME} {RSVP.LNAME}</h6>

            <p>GUEST:</p>
            <h6>{RSVP.GUEST || ''}</h6>

            <p>RSVP'd:</p>
            <h6>{RSVP.RSVPd ? '✅' : '❌'}</h6>

            <p>ATTENDED:</p>
            <h6>{RSVP.ATTENDED ? '✅' : '❌'}</h6>

            <input type="hidden" name="ATTENDED" value={RSVP.ATTENDED} />
            <input type="hidden" name="_id" value={RSVP._id} />
          </button>
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
    background-color: rgba(255, 255, 255, 0.715);
    border-radius: 20px;
    border: 1px solid black;
    padding: 2rem;
    width: 50svh;
    height: 50svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .container {
    margin: 0 auto;
    width: 85lvw;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  h2 {
    font-weight: 200;
  }

  p {
    padding: 5px;
    margin: 0;
  }

  h6 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }

  #formMessage {
    color: rgb(151, 94, 200);
    font-size: 1.5rem;
    position: fixed;
    top: 2svh;
    left: 30svw;
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 1rem;
  }
</style>
