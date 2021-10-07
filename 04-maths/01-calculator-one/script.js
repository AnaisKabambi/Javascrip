/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function () {
    function addition() {
        let x = document.getElementById("op-one").value;
        let y = document.getElementById("op-two").value;
        let sum = Number(x) + Number(y);
        alert("SUM is: " + sum);
    }

    function subtraction() {
        let x = document.getElementById("op-one").value;
        let y = document.getElementById("op-two").value;
        let sum = Number(x) - Number(y);
        alert("SUM is: " + sum);
    }

    function multiplication() {
        let x = document.getElementById("op-one").value;
        let y = document.getElementById("op-two").value;
        let sum = Number(x) * Number(y);
        alert("SUM is: " + sum);
    }

    function division() {
        let x = document.getElementById("op-one").value;
        let y = document.getElementById("op-two").value;
        let sum = Number(x) / Number(y);
        alert("SUM is: " + sum);
    }
})()