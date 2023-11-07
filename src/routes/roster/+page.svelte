<script>
  export let data;
  let showPlus = true;

  $: ({ RSVPs } = data);

  function handleClick() {
    window.print();
  }

  function downloadCSV() {
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
      // Get each column data
      var cols = rows[i].querySelectorAll('td,th');

      // sanitize data for CSV
      for (var j = 0; j < cols.length - 2; j++) {
        cols[j].innerText = cols[j].innerText.replace(/,/g, '');
      }

      // convert emoji to text for CSV
      for (var j = 0; j < cols.length - 2; j++) {
        cols[j].innerText = cols[j].innerText.replace(/✅/g, 'Yes');
        cols[j].innerText = cols[j].innerText.replace(/❌/g, 'No');
        cols[j].innerText = cols[j].innerText.replace(/📞/g, 'Phone');
        cols[j].innerText = cols[j].innerText.replace(/📧/g, 'By Email');
      }

      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length - 2; j++) {
        // Get the text data of each cell of
        // a row and push it to csvrow
        csvrow.push(cols[j].innerText);
      }

      // Combine each column value with comma
      csv_data.push(csvrow.join(','));
    }
    // combine each row data with new line character
    csv_data = csv_data.join('\n');

    downloadCSVFile(csv_data);
  }

  function downloadCSVFile(csv_data) {
    // Create CSV file object and feed our
    // csv_data into it
    let CSVFile = new Blob([csv_data], { type: 'text/csv' });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    let date = new Date().toLocaleDateString();

    // Download csv file
    temp_link.download = '23ChairsDinner_RSVPs-' + date + '.csv';
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = 'none';
    document.body.appendChild(temp_link);

    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }
</script>

<svelte:head>
  <title>RSVP Roster</title>
</svelte:head>

<div class="container">
  <h2>
    Chairs: {RSVPs.filter((r) => !r.PLUSONE && r.NPU != '-').length} - PlusOnes:
    {RSVPs.filter((r) => r.PLUSONE).length} - Volunteers: {RSVPs.filter(
      (r) => r.NPU == '-'
    ).length}<br />
    Accepted: {RSVPs.filter((r) => r.RSVPd).length} | Regrets: {RSVPs.filter(
      (r) => !r.RSVPd
    ).length}
    - Attended: {RSVPs.filter((r) => r.ATTENDED).length} | Not Attended: {RSVPs.filter(
      (r) => !r.ATTENDED
    ).length}
  </h2>

  <table width="100%" border="1px solid black">
    <thead>
      <tr>
        <th>NPU</th>
        <th>ATTENDEE</th>
        <th>GUEST</th>
        <th>DIET</th>
        <th>RSVP'd</th>
        <th>ATTENDED</th>
        <th>CONFIRMED</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    {#each RSVPs.filter((r) => r.NPU != '-') as RSVP (RSVP._id)}
      {#if RSVP.PLUSONE === false}
        <tr>
          <td class="data-center"><strong>{RSVP.NPU}</strong></td>
          <td>{RSVP.FNAME} {RSVP.LNAME}</td>
          <td>{RSVP.GUEST || '-'}</td>
          <td>{RSVP.DIET || '-'}</td>
          <td class="data-center">{RSVP.RSVPd ? '✅' : '❌'}</td>
          <td class="data-center">{RSVP.ATTENDED ? '✅' : '❌'}</td>
          <td class="data-center"
            >{RSVP.PHONE ? '📞' : ''}{RSVP.EMAIL ? '📧' : ''}</td
          >
          <td class="data-center">
            <a href="/{RSVP._id}">
              <button type="button" id="edit">EDIT</button>
            </a>
          </td>
          <td class="data-center">
            <form action="?/delete" method="post">
              <input type="hidden" name="_id" value={RSVP._id} />
              <button id="DELETE">DELETE</button>
            </form>
          </td>
        </tr>
      {:else if showPlus === true}
        <tr>
          <td class="data-center"><strong>{RSVP.NPU}</strong></td>
          <td> -</td>
          <td>{RSVP.GUEST || '-'}</td>
          <td>{RSVP.DIET || '-'}</td>
          <td class="data-center">{RSVP.RSVPd ? '✅' : '❌'}</td>
          <td class="data-center">{RSVP.ATTENDED ? '✅' : '❌'}</td>
          <td class="data-center">-</td>
          <td class="data-center">
            <a href="/{RSVP._id}">
              <button type="button" id="edit">EDIT</button>
            </a>
          </td>
          <td class="data-center">
            <form action="?/delete" method="post">
              <input type="hidden" name="_id" value={RSVP._id} />
              <button id="DELETE">DELETE</button>
            </form>
          </td>
        </tr>
      {/if}
    {/each}
  </table>

  <h3>Volunteers and Others</h3>
  <table width="100%" border="1px solid black">
    <thead>
      <tr>
        <th>NPU</th>
        <th>ATTENDEE</th>
        <th>RSVP'd</th>
        <th>CHECKED IN?</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    {#each RSVPs.filter((r) => r.NPU == '-') as RSVP (RSVP._id)}
      <tr>
        <td class="data-center"><strong>VOL</strong></td>
        <td>{RSVP.FNAME} {RSVP.LNAME}</td>
        <td class="data-center">{RSVP.RSVPd ? '✅' : '❌'}</td>
        <td class="data-center">{RSVP.ATTENDED ? '✅' : '❌'}</td>
        <td class="data-center">
          <a href="/{RSVP._id}">
            <button type="button" id="edit">EDIT</button>
          </a>
        </td>
        <td class="data-center">
          <form action="?/delete" method="post">
            <input type="hidden" name="_id" value={RSVP._id} />
            <button id="DELETE">DELETE</button>
          </form>
        </td>
      </tr>
    {/each}
  </table>

  <div id="utilities">
    <label for="showPlusOnes">Show PlusOnes:</label>
    <input type="checkbox" id="showPlusOnes" bind:checked={showPlus} />
    <br />
    <button type="button" id="print" on:click={() => handleClick()}
      >PRINT</button
    >
    <button type="button" on:click={() => downloadCSV()}>DOWNLOAD</button>
  </div>
</div>

<style>
  a {
    /* change visited link color */
    color: #aeaeae;
  }

  a:visited {
    color: #aeaeae !important;
  }

  h2 {
    text-align: center;
    font-weight: 200;
  }

  table {
    border-collapse: collapse;
    border: 1px solid black;
  }

  th {
    /* text-decoration: inherit !important; */
    font-weight: 500;
  }

  td {
    padding: 0.1svw;
    padding-inline: 0.5vw;
    font-weight: 200;
  }

  #utilities {
    margin: 3svh auto;
    display: flex;
    height: 2rem;
  }

  #utilities button {
    width: 40%;
    margin: 0 auto;
    display: inline-block;
    align-content: center;
  }

  button:hover {
    cursor: pointer;
    background-color: #e0c300;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .data-center {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media print {
    *,
    a {
      color: black !important;
    }

    :global(html) {
      background: white !important;
    }

    th:nth-child(8),
    td:nth-child(8),
    th:nth-child(9),
    td:nth-child(9) {
      display: none;
    }

    #utilities {
      display: none;
    }
  }
</style>
