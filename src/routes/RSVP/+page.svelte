<script>
  import { enhance } from '$app/forms';
  // get query params
  export let form;
  let ROLE;
</script>

<svelte:head>
  <title>RSVP</title>
</svelte:head>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<div class="card">
  <form method="POST" use:enhance>
    <label for="NPU">NPU</label>
    <select name="NPU" id="NPU">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
      <option value="G">G</option>
      <option value="H">H</option>
      <option value="I">I</option>
      <option value="J">J</option>
      <option value="K">K</option>
      <option value="L">L</option>
      <option value="M">M</option>
      <option value="N">N</option>
      <option value="O">O</option>
      <option value="P">P</option>
      <option value="Q">Q</option>
      <option value="R">R</option>
      <option value="S">S</option>
      <option value="T">T</option>
      <!-- <option value="U">U</option> -->
      <option value="V">V</option>
      <option value="W">W</option>
      <option value="X">X</option>
      <option value="Y">Y</option>
      <option value="Z">Z</option>
    </select>

    <label for="FNAME">First:</label>
    {#if form?.missing}
      <p>This field is required!</p>
    {/if}
    <input type="text" name="FNAME" id="FNAME" required />

    <label for="LNAME">Last:</label>
    {#if form?.missing}
      <p>This field is required!</p>
    {/if}
    <input type="text" name="LNAME" id="LNAME" required />

    <label for="ROLE">Are you RSVP'ing as a(n):</label>
    <select name="ROLE" id="ROLE" bind:value={ROLE}>
      <option selected disabled />
      <option value="Chair">NPU Chair</option>
      <option value="Officer">NPU Officer</option>
      <option value="CM">City Council Member or staff</option>
    </select>

    <!-- only show GUEST field if ROLE is Chair -->
    {#if ROLE == 'Chair'}
      <label for="GUEST">The name of your Guest:</label>
      <input type="text" name="GUEST" id="GUEST" />
    {/if}

    <label for="DIET"
      >Please inform us of any allergies or dietary restrictions:</label
    >
    <textarea name="DIET" id="DIET" />

    <label for="RSVPd">Will you be attending?</label>
    <select name="RSVPd" id="RSVPd">
      <option value="true">Yes, I plan to attend!</option>
      <option value="false">Regrets, I won't be able to join.</option>
    </select>

    <button type="submit">SUBMIT</button>
  </form>
</div>

<style>
  .card {
    background-color: rgb(255, 255, 255, 0.55);
    border-radius: 20px;
    padding: 2rem;
    width: 50%;
    margin: 0 auto;
  }

  button {
    width: 100%;
    height: 2rem;
    font-size: 1.4rem;
    /* scrollbar narrow */
  }
  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    .card {
      width: 90%;
      margin: 0 auto;
    }
  }

  input,
  select,
  textarea {
    margin-bottom: 1rem;
    height: 2rem;
    font-size: 1.2rem;
    border-radius: 8px;
  }

  button,
  select {
    border-radius: 8px;
  }

  textarea {
    resize: vertical;
  }

  #NPU {
    width: fit-content;
    height: 3rem;
    font-size: 2rem;
    /* scrollbar narrow */
  }
</style>
