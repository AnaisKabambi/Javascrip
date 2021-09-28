/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


<!--
prompt("Would you like some cake?")
{
    var txt;
    if ("yes") {
        txt = "Congratulations";
    } else {
        txt = "More cake for me then :p !"
    }
}
-->
function myFunction() {
    var txt;
    if ("yes") {
        txt = "Congratulations";
    } else {
        txt = "More cake for me then :p !";
    }
    document.getElementById("demo").innerHTML = txt;
}