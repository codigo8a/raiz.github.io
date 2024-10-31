// By: h01000110 (hi)
// github.com/h01000110
function numbers() {
  var fields = document.getElementsByTagName("code");
  for (var i = 0; i < fields.length; i++) {
    var select = fields[i].innerText;
    var select_f = select.split(/\n/);
    var tab = document.createElement("table");

    // IF YOU USE MARKDOWN AND YOU HAVE BEEN GETTING ONE ADDITIONAL LINE IN YOUR TAG CODE
    // UNCOMMENT THE SECTION BELOW
    /* MARKDOWN SECTION */
    /**/select_f.splice(-1, 1);/**/
    /* END OF SECTION */

    fields[i].innerHTML = "";
    fields[i].appendChild(tab);
    for (var j = 0; j < select_f.length; j++) {
      var row = document.createElement("tr");
      var colc = document.createElement("td");
      colc.innerText = select_f[j];
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
