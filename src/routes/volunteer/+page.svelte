<script>
  export let data;
  export let form;
  export let notCheckedIn;
  import { enhance } from '$app/forms';
  import { fade, fly, crossfade } from 'svelte/transition';

  $: ({ RSVPs, notCheckedIn } = data);
</script>

<svelte:head>
  <title>Check In</title>
</svelte:head>

<div class="container">
  <h2>
    Volunteers Arrived: {RSVPs.length - notCheckedIn} | Expected: {notCheckedIn}
  </h2>
  <a class="navigation" href="/checkin">Check-In by NPU</a>
  <a class="navigation" href="/alpha">Check-In Alphabetical</a>
</div>

{#if form?.message && form?.message !== ''}
  <!-- Fade out after 5 seconds -->
  {setTimeout(() => {
    form.message = '';
  }, 2500)}
  <p id="formMessage" transition:fade={{ duration: 1000 }}>{form.message}</p>
{/if}

<div class="container">
  {#each RSVPs as RSVP (RSVP._id)}
    {#if Boolean(RSVP.ATTENDED) === false}
      {#if RSVP.PLUSONE === false}
        <div class="expected">
          <form action="?/checkIn" method="POST" use:enhance>
            <button class="card" type="submit">
              <div>
                <p>VOLUNTEER:</p>
                <h4>{RSVP.FNAME} {RSVP.LNAME}</h4>
              </div>

              {#if RSVP.GUEST}
                <div>
                  <p>GUEST:</p>
                  <h6>{RSVP.GUEST || ''}</h6>
                </div>
              {/if}

              <!-- <div class="bools">
                <p>RSVP'd:</p>
                <h6>{RSVP.RSVPd ? '✅' : '❌'}</h6>

                <p>ATTENDED:</p>
                <h6>{RSVP.ATTENDED ? '✅' : '❌'}</h6>
              </div> -->

              <input type="hidden" name="ATTENDED" value={RSVP.ATTENDED} />
              <input type="hidden" name="_id" value={RSVP._id} />
            </button>
          </form>
        </div>
      {/if}
      {#if RSVP.PLUSONE === true}
        <div class="expected">
          <form action="?/checkIn" method="POST" use:enhance>
            <button class="card" type="submit">
              <div>
                <p>NPU:</p>
                <h6><strong>{RSVP.NPU}</strong></h6>
              </div>

              <div>
                <p>GUEST:</p>
                <h4>{RSVP.GUEST || ''}</h4>
              </div>

              <div>
                <p>GUEST OF:</p>
                <h6>{RSVP.FNAME} {RSVP.LNAME}</h6>
              </div>

              <!-- <div class="bools">
                <p>RSVP'd:</p>
                <h6>{RSVP.RSVPd ? '✅' : '❌'}</h6>

                <p>ATTENDED:</p>
                <h6>{RSVP.ATTENDED ? '✅' : '❌'}</h6>
              </div> -->

              <input type="hidden" name="ATTENDED" value={RSVP.ATTENDED} />
              <input type="hidden" name="_id" value={RSVP._id} />
            </button>
          </form>
        </div>
      {/if}
    {/if}
  {/each}
</div>
<hr />
<div class="container">
  {#each RSVPs as RSVP (RSVP._id)}
    {#if Boolean(RSVP.ATTENDED) === true}
      {#if RSVP.PLUSONE === false}
        <div class="arrived">
          <form action="?/checkIn" method="POST" use:enhance>
            <button class="card" type="submit">
              <div>
                <p>NPU:</p>
                <h6><strong>{RSVP.NPU}</strong></h6>
              </div>

              <div>
                <p>ATTENDEE:</p>
                <h4>{RSVP.FNAME} {RSVP.LNAME}</h4>
              </div>

              {#if RSVP.GUEST}
                <div>
                  <p>GUEST:</p>
                  <h6>{RSVP.GUEST || ''}</h6>
                </div>
              {/if}

              <!-- <div class="bools">
                <p>RSVP'd:</p>
                <h6>{RSVP.RSVPd ? '✅' : '❌'}</h6>

                <p>ATTENDED:</p>
                <h6>{RSVP.ATTENDED ? '✅' : '❌'}</h6>
              </div> -->

              <input type="hidden" name="ATTENDED" value={RSVP.ATTENDED} />
              <input type="hidden" name="_id" value={RSVP._id} />
            </button>
          </form>
        </div>
      {/if}
      {#if RSVP.PLUSONE === true}
        <div class="arrived">
          <form action="?/checkIn" method="POST" use:enhance>
            <button class="card" type="submit">
              <div>
                <p>NPU:</p>
                <h6><strong>{RSVP.NPU}</strong></h6>
              </div>

              <div>
                <p>GUEST:</p>
                <h4>{RSVP.GUEST || ''}</h4>
              </div>

              <div>
                <p>GUEST OF:</p>
                <h6>{RSVP.FNAME} {RSVP.LNAME}</h6>
              </div>

              <!-- <div class="bools">
                <p>RSVP'd:</p>
                <h6>{RSVP.RSVPd ? '✅' : '❌'}</h6>

                <p>ATTENDED:</p>
                <h6>{RSVP.ATTENDED ? '✅' : '❌'}</h6>
              </div> -->

              <input type="hidden" name="ATTENDED" value={RSVP.ATTENDED} />
              <input type="hidden" name="_id" value={RSVP._id} />
            </button>
          </form>
        </div>
      {/if}
    {/if}
  {/each}
</div>

<style>
  .arrived button {
    color: grey;
    filter: saturate(0.1);
  }

  .card {
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 20px;
    border: 1px solid black;
    padding: 0.5rem;
    width: 35svh;
    height: 35svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    opacity: 0.875;
    transition: all 0.5s ease;
    box-shadow: inset 0 0 12px 2px rgba(0, 0, 0, 0.5);
  }

  /* .card div {
    padding-block-start: 1.5rem;
    padding-block-end: 1.5rem;
  } */

  .container {
    margin: 0 auto;
    width: 90lvw;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .navigation {
    color: white;
  }

  hr {
    margin: 20px auto;
    width: 85vw;
  }

  h2 {
    font-weight: 200;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  h6 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }

  p {
    padding: 0;
    margin: 0;
  }

  #formMessage {
    color: rgb(151, 94, 200);
    font-size: 1.5rem;
    position: fixed;
    top: 2svh;
    left: 40svw;
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 1rem;
    z-index: 100;
  }

  @media screen and (width < 1020px) {
    .card {
      width: 20vw;
      height: 25vw;
    }

    /* h4 {
      font-size: 0.75rem;
    }
    h6 {
      font-size: 0.5rem;
    } */
    p {
      display: none;
    }
  }

  @media screen and (width < 560px) {
    .card {
      width: 25vw;
      height: 25vw;
    }

    h4 {
      font-size: 0.75rem;
    }
    h6 {
      font-size: 0.5rem;
    }
    p {
      display: none;
    }
  }
</style>
