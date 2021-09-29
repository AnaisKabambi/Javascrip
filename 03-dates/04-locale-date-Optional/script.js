/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    var dt = new Date();
    document.getElementById('target').innerHTML=dt;
    document().format("dddd, MMMM Do YYYY, h:mm:ss a");
})();
