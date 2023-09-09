<script>
  export let data;
  export let form;

  async function addRSVP(event) {
    const formEl = event.target;
    const data = new FormData(formEl);

    console.dir(form);

    const response = await fetch(formEl.action, {
      method: 'POST',
      body: data,
    });
    const responseData = await response.json();

    form = responseData;

    formEl.reset();

    await invalidateAll();
  }
</script>

<h1>RSVP Form</h1>

<form method="POST">
  <label for="FNAME">FNAME</label>
  {#if form?.missing}
    <p>This field is required!</p>
  {/if}
  <input type="text" name="FNAME" id="FNAME" value={form?.RSVP ?? ''} />
  <br />
  <label for="LNAME">LNAME</label>
  {#if form?.missing}
    <p>This field is required!</p>
  {/if}
  <input type="text" name="LNAME" id="LNAME" value={form?.RSVP ?? ''} />
  <br />
  <label for="" />
  <button type="submit">SUBMIT</button>
</form>

{#if form?.success}
  <p>RSVP submitted successfully!</p>
{/if}
