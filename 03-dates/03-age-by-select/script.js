/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


let dob = '19800810';
let year = Number(dob.substr(0, 4));
let month = Number(dob.substr(4, 2)) - 1;
let day = Number(dob.substr(6, 2));
let today = new Date();
let age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
    function run() {
        alert(age);
    }
}
})();
