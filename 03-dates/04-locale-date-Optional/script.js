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
    var today = new Date();
    var date = today.getDay() +' '+ today.getDate() +' '+ (today.getMonth()+1) +' '+ today.getFullYear() +', '+ today.getHours() +'h'+ today.getMinutes();
    document.getElementById("target").innerHTML = date

    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[d.getMonth()]

    const x = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[x.getDay()]
    console.log(dayName)
    console.log(monthName)


})();
