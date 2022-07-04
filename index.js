// Import stylesheets
import './style.css';
import './PasteData.js';
import $ from 'jquery';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var p = document.createElement('p');

var text =
  '<!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}-->';
p.textContent = text;

appDiv.appendChild(p);

var q = document.createElement('span');
q.innerHTML = text;
appDiv.appendChild(q);
console.log(q.innerHTML);
console.log(text.split('--'));
