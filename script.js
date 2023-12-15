function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");
  var newRow = table.insertRow(0);

  // Insert cells into the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Set content for the cells (e.g., text or elements)
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}