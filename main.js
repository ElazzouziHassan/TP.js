let breakLine = document.createElement('br');
let style = document.createElement('style');
style.innerHTML = `
  .class-a {
    background-color: lightblue;
    color: white;
    padding: 10px;
  }

  .class-b {
    background-color: lightgreen;
    color: black;
    padding: 10px;
  }
  .exercice-4{
    background-color: lightgray;
    padding:10px;
    marging:10px;
  }
  .exercice-5{
    background-color: lightgray;
    padding:10px;
    marging:10px;
  }
  .exercice-4 h2{
    color: red;
  }
  .exercice-5 h2{
    color: red;
  }
`;
document.head.appendChild(style);

// exercice 1 :
const body = document.querySelector('body');
let heading = document.createElement('h1')
heading.textContent = "Bienvenue sur mon site !"
body.appendChild(heading)
heading.style.color = "green"
heading.style.fontSize = "36px"

for (let i=0; i<3; i++){
  let p = document.createElement('p');
  p.textContent = "Paragraphe content";
  p.style.color = "blue";
  p.style.fontSize = "24px"
  body.append(p);
}
// let p1 = document.createElement('p');
// let p2 = document.createElement('p');
// let p3 = document.createElement('p');

// body.append(p1);
// body.append(p2);
// body.append(p3);

// document.querySelectorAll('p').forEach(
//   p => {
//     p.textContent = "Paragraphe content";
//     p.style.color = "blue";
//     p.style.fontSize = "24px"
//   }
// );

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
btn2.style.padding = "10px"
btn2.style.margin = "10px"
btn1.style.padding = "10px"
btn1.style.margin = "10px"

body.append(breakLine);

// Exercice 3 :
let disabledElement = document.createElement('input');
disabledElement.disabled = 'true';
body.append(disabledElement);


let inverseDisabledField = document.createElement('button');
inverseDisabledField.textContent = "Inverser la valeur"
inverseDisabledField.style.margin = "10px"
inverseDisabledField.style.padding = "10px"
inverseDisabledField.style.cursor = 'pointer'
body.append(inverseDisabledField)

inverseDisabledField.addEventListener('click', ()=>{
  disabledElement.disabled = !disabledElement.disabled
})

// quetion 2 :
let playClasses = document.createElement('h2');
playClasses.textContent = "Cliquer pour Basculer entre deux classes différentes";

playClasses.setAttribute('class','class-a')
body.append(playClasses);

playClasses.addEventListener('click', ()=>{
  if(playClasses.classList.contains('class-a')){
    playClasses.classList.remove('class-a');
    playClasses.classList.add('class-b');
  }else{
    playClasses.classList.remove('class-b');
    playClasses.classList.add('class-a');
  }
})

// quetion 3:
let elementDisplay = document.createElement('h2');
let hideElement = document.createElement('button');
let afficheElement = document.createElement('button');

elementDisplay.textContent = "Hello, World!";
hideElement.textContent = "Masquer";
afficheElement.textContent = "Aficher";

body.append(elementDisplay);
body.append(afficheElement);
body.append(hideElement);
body.append(breakLine);

afficheElement.addEventListener('click', () =>{
  if ( elementDisplay.style.display === 'none' ){
    elementDisplay.style.display = 'block'
  }else return true;
})
hideElement.addEventListener('click', () =>{
  if ( elementDisplay.style.display !== 'none' ){
    elementDisplay.style.display = 'none'
  }else return true;
})

// Exercice 4:
let exercice4 = document.createElement('div');
exercice4.setAttribute('class', 'exercice-4');
body.append(exercice4);

let ex4title = document.createElement('h2');
ex4title.textContent = "Exercice 4:";
exercice4.append(ex4title);
// question 1 :
let alertBtn = document.createElement('button');
alertBtn.textContent = "alert message";
exercice4.append(alertBtn);

alertBtn.addEventListener('click', ()=>{
  alert("Message d'alerte !");
});
// quetion 2 :
let inputToOutput = document.createElement('input');
let spanOutput = document.createElement('span');
spanOutput.textContent = "output"
exercice4.append(inputToOutput);
exercice4.append(spanOutput);

inputToOutput.addEventListener('keyup', () => {
  spanOutput.textContent = inputToOutput.value
})

// quetion 3 :
let myLink = document.createElement('a');
myLink.setAttribute('href',"#");
myLink.textContent = "Cliquez ici pour ne pas suivre le lien";
exercice4.append(breakLine);
exercice4.append(myLink);
myLink.addEventListener('click', (ev)=>{
  ev.preventDefault();
  alert('Action par défaut du lien a été empêchée !');
})

// Exercice 5:
let exercice5 = document.createElement('div');
exercice5.setAttribute('class', 'exercice-5');
body.append(exercice5);

let ex5title = document.createElement('h2');
ex5title.textContent = "Exercice 5:";
exercice5.append(ex5title);

