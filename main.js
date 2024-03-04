// exercice 1 :
const body = document.querySelector('body');
let heading = document.createElement('h1')
heading.textContent = "Bienvenue sur mon site !"
body.appendChild(heading)
heading.style.color = "green"
heading.style.fontSize = "36px"

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

body.append(p1);
body.append(p2);
body.append(p3);

document.querySelectorAll('p').forEach(
  p => {
    p.textContent = "Paragraphe content";
    p.style.color = "blue";
    p.style.fontSize = "24px"
  }
);

let allParas = document.querySelectorAll('p');
allParas.forEach(
  p => p.classList.add('paragraphe')
);

allParas[1].setAttribute('id', 'mon_paragraphe');
let monParagraphe = document.getElementById('mon_paragraphe');
monParagraphe.textContent = "New Content";

// exercice 2 :

// Quetion 1 :
let tab = ['Pomme', 'Banana', 'Prange'];
let ol = document.createElement('ol');
body.append(ol);

for(i = 0; i< tab.length; i++){
  let li = document.createElement('li');
  li.textContent = tab[i];
  ol.append(li);
}

// Quetion 2 :
let btn1 = document.createElement('button');
btn1.textContent = "add element";
btn1.addEventListener('click', ()=>{
  let newElement = document.createElement('li');
  newElement.textContent = "new element has been added to the list";
  ol.append(newElement);
})
body.append(btn1);

// Quetion 3 :
let btn2 = document.createElement('button');
btn2.textContent = "remove element";
btn2.addEventListener('click', ()=>{
  document.querySelector('ol').removeChild(document.querySelector('ol').lastChild);
})
body.append(btn2);

// Exercice 3 :
let disabledElement = document.createElement('input');
body.append(disabledElement)
disabledElement.setAttribute('class', 'disabled');



