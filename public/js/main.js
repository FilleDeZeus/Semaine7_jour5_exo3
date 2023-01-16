// EXERCICE 1
let div = document.querySelector("#content");
console.log(div);

// EXERCICE 2
let div1 = document.querySelectorAll("#content");
console.log(div1);

// EXERCICE 3
let li = document.querySelector(".important");
console.log(li);

// EXERCICE 4
let li2 = document.querySelectorAll(".important");
console.log(li2);

// EXERCICE 5
let li3 = document.querySelectorAll("li")
li3.forEach(element => {
    console.log(element.innerText.substring(0, element.innerText.length-1) + element.innerText[element.innerText.length-1].toUpperCase());
});

// EXERCICE 6
let p = document.getElementById("#content")
p = document.getElementsByClassName("grandParagraphe")[0];
console.log(p);