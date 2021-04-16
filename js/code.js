// ----- body -----
document.body.style.fontFamily = 'consolas';
document.body.style.fontSize = '30px';
document.body.style.fontWeight = 'bold';


// ----- counter box -----
let counterBoxDiv = document.createElement('div');
let counterBoxId = document.createAttribute('id');
counterBoxId.value = 'counter-box';
counterBoxDiv.setAttributeNode(counterBoxId);
document.body.appendChild(counterBoxDiv);


// ----- plus button -----
let plusDiv = document.createElement('div');
let plusId = document.createAttribute('id');
plusId.value = 'plus';
plusDiv.setAttributeNode(plusId);
counterBoxDiv.appendChild(plusDiv);
plusDiv.innerHTML = '+';

plusDiv.style.fontSize = '80px';
plusDiv.style.color = '#fff';


// ----- counter value -----
let counterValueDiv = document.createElement('div');
let counterValueId = document.createAttribute('id');
counterValueId.value = 'counter-value';
counterValueDiv.setAttributeNode(counterValueId);
counterBoxDiv.appendChild(counterValueDiv);
counterValueDiv.innerHTML = 0;

counterValueDiv.style.backgroundColor = 'rgb(250, 250, 250, 0.95)';
counterValueDiv.style.border = '2px solid #000';
counterValueDiv.style.borderRadius = '7px';
counterValueDiv.style.margin = '20px';
counterValueDiv.style.padding = '10px';
counterValueDiv.style.fontWeight = 'normal';


// ----- minus button -----
let minusDiv = document.createElement('div');
let minusId = document.createAttribute('id');
minusId.value = 'minus';
minusDiv.setAttributeNode(minusId);
counterBoxDiv.appendChild(minusDiv);
minusDiv.innerHTML = '-';

minusDiv.style.fontSize = '80px';
minusDiv.style.color = '#fff';


// ----- reset button -----
let resetDiv = document.createElement('div');
let resetId = document.createAttribute('id');
resetId.value = 'reset';
resetDiv.setAttributeNode(resetId);
document.body.appendChild(resetDiv);
resetDiv.innerHTML = 'RESET';

resetDiv.style.color = '#f29f05';
resetDiv.style.marginTop = '25px';


// ----- Events -----
let increase = function() {counterValueDiv.innerHTML++;}
plusDiv.addEventListener('click', increase);

let reduce = function() {counterValueDiv.innerHTML--;}
minusDiv.addEventListener('click', reduce);

let restart = function() {counterValueDiv.innerHTML = 0;}
resetDiv.addEventListener('click', restart);
