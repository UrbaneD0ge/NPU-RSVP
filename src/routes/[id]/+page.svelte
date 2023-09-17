<script>
  import { enhance } from '$app/forms';
  export let form;
  export let data;

  $: ({ RSVPs } = data);
</script>

<h1>Edit RSVP</h1>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<form method="POST" use:enhance>
  <h3>NPU: {RSVPs.NPU}</h3>
  <input type="hidden" name="NPU" id="NPU" value={RSVPs.NPU} />
  <input type="hidden" name="_id" id="_id" value={RSVPs._id} />
  <br />
  <label for="FNAME">First:</label>
  {#if form?.missing}
    <p>This field is required!</p>
  {/if}
  <input type="text" name="FNAME" id="FNAME" value={RSVPs.FNAME ?? ''} />
  <br />
  <label for="LNAME">Last:</label>
  {#if form?.missing}
    <p>This field is required!</p>
  {/if}
  <input type="text" name="LNAME" id="LNAME" value={RSVPs.LNAME ?? ''} />
  <br />

  <label for="GUEST">The name of your Guest:</label>
  <input type="text" name="GUEST" id="GUEST" value={RSVPs.GUEST ?? ''} />
  <br />
  <label for="DIET"
    >Please inform us of any allergies or dietary restrictions:</label
  >
  <textarea name="DIET" id="DIET" value={RSVPs.DIET ?? ''} />
  <br />

  <button type="submit">SAVE</button>
</form>

{#if form?.success}
  <p>RSVP submitted successfully!</p>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
  }
  input,
  textarea {
    margin-bottom: 1rem;
  }
</style>
