<script>
  // export let data
  export let form;
</script>

<h1>RSVP Form</h1>

<form method="post">
  <label for="FNAME">FNAME</label>
  <input type="text" name="FNAME" id="FNAME" />
  <br />
  <label for="LNAME">LNAME</label>
  <input type="text" name="LNAME" id="LNAME" />
  <br />
  <label for="" />
  <button type="submit">SUBMIT</button>
</form>

{#if form?.success}
  <p>RSVP submitted successfully!</p>
{/if}
