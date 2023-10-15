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
    <div class="formRow">
      <div class="formStack" id="roleRow">
        <label for="ROLE">I am:</label>
        <select name="ROLE" id="ROLE" bind:value={ROLE} required>
          <option selected disabled />
          <option value="Chair">an NPU Chair</option>
          <option value="Officer">an NPU Officer</option>
          <option value="CM">a City Council Member or staff</option>
        </select>
      </div>
      <div class="formStack" style="margin:auto">
        {#if ROLE !== 'CM'}
          <label for="NPU">NPU</label>
          <select name="NPU" id="NPU">
            <option selected disabled />
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
        {/if}
      </div>
    </div>

    <div class="formRow">
      <div class="formStack" style="width: 45%;">
        <label for="FNAME">First Name:</label>
        <input type="text" name="FNAME" id="FNAME" required />
      </div>
      <div class="formStack" style="width: 45%;">
        <label for="LNAME">Last Name:</label>
        <input type="text" name="LNAME" id="LNAME" required />
      </div>
    </div>

    <!-- only show GUEST field if ROLE is Chair -->
    {#if ROLE == 'Chair'}
      <label for="GUEST">The name of your Guest:</label>
      <input type="text" name="GUEST" id="GUEST" />
    {/if}

    <label for="DIET">Please list any allergies or dietary restrictions:</label>
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
    font-size: 1.3rem;
    font-weight: 200;
    background-color: rgb(255, 255, 255, 0.55);
    border-radius: 20px;
    padding: 2rem;
    max-width: 45%;
    margin: 2rem auto;
  }

  .formStack {
    display: flex;
    flex-direction: column;
  }

  .formRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    width: 100%;
    height: 2rem;
    font-size: 1.4rem;
    /* scrollbar narrow */
    background-color: buttonface;
    transition: background-color 2s ease;
  }

  button:hover {
    background-color: #e0c300;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    .card {
      max-width: 70%;
    }
  }

  @media (max-width: 620px) {
    .card {
      max-width: none;
      width: 90%;
      margin: 0 auto;
    }

    form {
      width: 100%;
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
    padding: 0.3rem;
  }

  #NPU {
    width: fit-content;
    height: 3rem;
    font-size: 2rem;
    /* scrollbar narrow */
  }

  #roleRow {
    width: 80%;
  }
</style>
