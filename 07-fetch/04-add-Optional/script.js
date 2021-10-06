/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const obj = JSON.parse(_shared/api.json);

    document.getElementById("run").addEventListener("click", myFunction);
    function myFunction() {
        document.getElementById("hero-name").innerHTML = obj.name;
        document.getElementById("hero-alter-ego").innerHTML = obj.alterego;
        document.getElementById("hero-powers").innerHTML = obj.powers;

        obj["heroes"].push({
            name: document.getElementById("hero-name").value,
            alterego: document.getElementById("hero-alter-ego").value,
            powers: document.getElementById("hero-powers").value,
        });

    }
})();
