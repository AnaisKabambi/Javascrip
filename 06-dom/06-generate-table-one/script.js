/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
const target = document.getElementById("target")
const table = document.createElement('table')
    const tblBody = document.createElement("tbody");
const tr = document.createElement('tr')
    const td = document.createElement("td");
    const cellText = document.createTextNode("cell in row "+i+", column "+j);

    target.appendChild (table);
    table.appendChild(tblBody);
    tblBody.appendChild(tr)
    tr.appendChild(td);
    td.appendChild(cellText);

})();
