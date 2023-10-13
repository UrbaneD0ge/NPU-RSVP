<script>
  import { enhance } from '$app/forms';
  export let form;
  export let data;

  $: ({ RSVPs } = data);
</script>

<svelte:head>
  <title>Edit RSVP</title>
</svelte:head>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<div class="card">
  <form method="POST" use:enhance>
    <h3>NPU-{RSVPs.NPU}</h3>
    <input type="hidden" name="NPU" id="NPU" value={RSVPs.NPU} />
    <input type="hidden" name="_id" id="_id" value={RSVPs._id} />

    <label for="FNAME">First:</label>
    {#if form?.missing}
      <p>This field is required!</p>
    {/if}
    <input type="text" name="FNAME" id="FNAME" value={RSVPs.FNAME ?? ''} />

    <label for="LNAME">Last:</label>
    {#if form?.missing}
      <p>This field is required!</p>
    {/if}
    <input type="text" name="LNAME" id="LNAME" value={RSVPs.LNAME ?? ''} />

    <label for="GUEST">The name of your Guest:</label>
    <input type="text" name="GUEST" id="GUEST" value={RSVPs.GUEST ?? ''} />

    <label for="DIET"
      >Please inform us of any allergies or dietary restrictions:</label
    >
    <textarea name="DIET" id="DIET" value={RSVPs.DIET ?? ''} />

    <label for="RSVPd">Will you be attending?</label>
    <select name="RSVPd" id="RSVPd" required>
      <option value="true">Yes, I plan to attend!</option>
      <option value="false">Regrets, I won't be able to join.</option>
    </select>

    <button type="submit">SAVE</button>
  </form>
</div>

{#if form?.success}
  <p>RSVP submitted successfully!</p>
{/if}

<style>
  .card {
    font-size: 1.3rem;
    font-weight: 200;
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
    width: 80%;
    margin: 0 auto;
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

  h3 {
    height: 3rem;
    font-size: 2rem;
    margin: 0;
  }
</style>
