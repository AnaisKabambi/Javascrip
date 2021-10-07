/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function(questions) {

    // your code here
    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt("Where do you live?");
    console.log(questions);

    /*function myFunction() {
        var txt;
        if (confirm("You are" + age + "years old," + gender + "and you live in" + town + ". Is that correct?")) {
            txt = "Great!";
        } else {
            txt = "Let's try again";
        }
        console.log (myFunction())
    }*/
    (function myFunction() {
        var retVal = confirm("You are" + age + "years old," + gender + "and you live in" + town + ". Is that correct?");
        if (retVal == true) {
            document.write("Great!");
            return true;
        } else {
            document.write("Let's try again");
            questions();
            return false;
        }
        ;
        console.log(myFunction());
    })
    ();
})
