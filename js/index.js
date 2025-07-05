let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const errorDiv = document.getElementById('error-div');

inputBtn.addEventListener('click', function(){
    addListElement();
});

function addListElement(){
    if(inputEl.value !== ''){
        //hide error
        errorDiv.style.display = 'none';
        //add to array, display item and clear the field
        myLeads.push(inputEl.value);
        //create list element;
        let liEl = document.createElement('li');
        liEl.innerHTML = `<a href="${inputEl.value}" target="_blank">${inputEl.value}</a>`;
        ulEl.appendChild(liEl);
        clearField();
    } else {
        //show error
        errorDiv.style.display = 'block';
    }
}

function clearField(){
    inputEl.value = '';
}

