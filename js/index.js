let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    addListElement();
    // console.log(myLeads);
});

function addListElement(){
    let liEl = document.createElement('li');
    liEl.textContent = inputEl.value;
    ulEl.appendChild(liEl);
}

