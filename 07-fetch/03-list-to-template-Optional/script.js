/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

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

    document.getElementById("run").onclick = function() {myFunction()};
    function myFunction() {
        document.getElementById("target").innerHTML = console.log(result);
        fetch("_shared/api.json")
            .then (function (response){
            tpl-heroes.appendChild(console.log(result))
    })
        console.log(result)
    // your code here
};
