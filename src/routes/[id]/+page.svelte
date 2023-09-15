<script>
  import { enhance } from '$app/forms';
  export let form;
  export let data;

  $: ({ RSVPs } = data);
</script>

<h1>Edit RSVP</h1>
<a href="/">Roster</a> | <a href="/checkin">Check In</a>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<form method="PUT" use:enhance>
  <h3>NPU: {RSVPs.NPU}</h3>
  <input type="hidden" name="NPU" id="NPU" value={RSVPs.NPU} />
  <input type="hidden" value={RSVPs._id} />
  <br />
  <label for="FNAME">FNAME</label>
  {#if form?.missing}
    <p>This field is required!</p>
  {/if}
  <input type="text" name="FNAME" id="FNAME" value={RSVPs.FNAME ?? ''} />
  <br />
  <label for="LNAME">LNAME</label>
  {#if form?.missing}
    <p>This field is required!</p>
  {/if}
  <input type="text" name="LNAME" id="LNAME" value={RSVPs.LNAME ?? ''} />
  <br />

  <label for="Guest">GUEST</label>
  <input type="text" name="GUEST" id="GUEST" value={RSVPs.GUEST ?? ''} />
  <br />
  <label for="DIET">DIET</label>
  <textarea name="DIET" id="DIET" value={RSVPs.DIET ?? ''} />
  <br />

  <button type="save" action="?/default">SAVE</button>
</form>

{#if form?.success}
  <p>RSVP submitted successfully!</p>
{/if}
