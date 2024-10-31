// By: h01000110 (hi)
// github.com/h01000110
function numbers() {
  var fields = document.getElementsByTagName("code");
  for (var field in fields) {
    var select = fields[field].innerText;
    var select_f = select.split(/\n/);
    var tab = document.createElement("table");

    // IF YOU USE MARKDOWN AND YOU HAVE BEEN GETTING ONE ADDITIONAL LINE IN YOUR TAG CODE
    // UNCOMMENT THE SECTION BELOW
    /* MARKDOWN SECTION */
    /**/select_f.splice(-1, 1);/**/
    /* END OF SECTION */

    fields[field].innerHTML = "";
    fields[field].appendChild(tab);
    for (var line in select_f) {
      var row = document.createElement("tr");
      var colc = document.createElement("td");
      colc.innerText = select_f[line];
      row.appendChild(colc);
      tab.appendChild(row);

      // STYLE SECTION - If you want, change it below
      colc.style.textAlign = "left";
      tab.style.border = "0";
      colc.style.border = "0";
      colc.style.padding = "3px";
    }
  }
}
window.onload = numbers();
