/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var pw1 = document.getElementById("pass-one");
    var pw2 = document.getElementById("pass-two");
    if(pw1 != pw2)
    {
        alert("Passwords did not match");
        throw 'error'
    } else {
        alert("Password created successfully");
    }
})();
