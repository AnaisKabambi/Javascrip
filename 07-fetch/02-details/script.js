/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
const MyJSON = '_shared/api.json';
const obj = JSON.parse(MyJSON);

let heroesId = obj.id;
let heroesName = obj.name;
let heroesAlterEgo = obj.alterego;
let heroesAbilities = obj.abilities;
    document.getElementById("target").innerHTML = obj.id;
    document.getElementById("target").innerHTML = obj.name;
    document.getElementById("target").innerHTML = obj.alterego;
    document.getElementById("target").innerHTML = obj.abilities;
    })

