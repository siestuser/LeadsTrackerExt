let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const clearBtn = document.getElementById('clear-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const errorDiv = document.getElementById('error-div');

inputBtn.addEventListener('click', function(){
    addListElement();
});

window.onload = function(){
    listLeadsFromLocalStorage();
}

clearBtn.addEventListener('click', function(){
    clearLeads();
})
function addListElement(){
    if(inputEl.value !== ''){
        //hide error
        errorDiv.style.display = 'none';
        //add to array, display item and clear the field
        if(!myLeads){
            myLeads.push(inputEl.value);
        }else{
            myLeads = JSON.parse(localStorage.getItem('myLeads')) || [];
            myLeads.push(inputEl.value);
        }
        console.log(myLeads);
        // myLeads.push(inputEl.value);
        //create list element;
        let liEl = document.createElement('li');
        liEl.innerHTML = `<a href="${inputEl.value}" target="_blank">${inputEl.value}</a>`;
        ulEl.appendChild(liEl);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        inputEl.value = '';
    } else {
        //show error
        errorDiv.style.display = 'block';
    }
}



function listLeadsFromLocalStorage(){
    let leads = JSON.parse(localStorage.getItem('myLeads'));

    for (let lead of leads){
        let liEl = document.createElement('li');
        liEl.innerHTML = `<a href="${lead}" target="_blank">${lead}</a>`;
        ulEl.appendChild(liEl);
    }

}

//clearing things
function clearLeads(){
    ulEl.innerHTML = '';
    localStorage.clear();
    myLeads = [];
}