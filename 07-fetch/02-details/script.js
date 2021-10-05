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

    function loadHeroes(){
        getJSON('_shared/api.json', function (data){})
    }
    var heroes = [];
   // console.log(result)
   // document.getElementById("target").innerHTML = document.getElementById("tpl-hero");
    let btn = document.getElementById("run")
    loadHeroes.appendChild(btn)
    btn.addEventListener("click", ()=>{
        console.log()
    })

    document.body.appendChild(popup)
    })

