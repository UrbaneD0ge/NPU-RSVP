<script>
  import { enhance } from '$app/forms';
  export let form;
</script>

<h1>RSVP Form</h1>
<a href="/">Roster</a> | <a href="/checkin">Check In</a>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

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
  <br />
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

  <label for="Guest">GUEST</label>
  <input type="text" name="GUEST" id="GUEST" />
  <br />
  <label for="DIET">DIET</label>
  <textarea name="DIET" id="DIET" />
  <br />
  <button type="submit">SUBMIT</button>
</form>

{#if form?.success}
  <p>RSVP submitted successfully!</p>
{/if}
