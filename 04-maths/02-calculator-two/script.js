/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("op-one").value
    document.getElementById("op-two").value

    function Calculatrice(a, b, op) {

        switch (op) {

            case '+':
                return a + b
                break;
            case '-':
                return a - b
                break;
            case '*':
                return a * b
                break;
            case '/':
                return a / b
                break;

        }

    }
    console.log(Calculatrice(5, 5, '+'));
})
