let myLeads = [];
const localStorageKey = 'myLeads';
const inputBtn = document.getElementById('input-btn');
const tabBtn = document.getElementById('tab-btn');
const clearBtn = document.getElementById('clear-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const errorDiv = document.getElementById('error-div');

inputBtn.addEventListener('click', function(){
    saveInputElement(inputEl.value, myLeads, localStorageKey, ulEl);
});

tabBtn.addEventListener('click', function(){
    saveCurrentActiveTab(myLeads, localStorageKey, ulEl);
});

document.addEventListener('DOMContentLoaded', function(){
    renderListFromStorage(localStorageKey, ulEl);
});

clearBtn.addEventListener('click', function(){
    clearLeads();
});

//function to get active Tab URL
function saveCurrentActiveTab(array, storageKey, listObject) {
    let activeTabURL;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        activeTabURL = tabs[0].url;
        array = getFromLocalStorage(storageKey) || [];
        array.push(activeTabURL);
    });
    // array = getFromLocalStorage(storageKey) || [];
    // array.push(activeTabURL);
    renderLiElement(activeTabURL, listObject);
    saveToLocalStorage(storageKey, array);
}

//save the input element to local storage
function saveInputElement(inputValue, array, storageKey, listObject){
    if(inputValue !== ''){
        //hide error
        errorDiv.style.display = 'none';
        //add to array, display item and clear the field
        array = getFromLocalStorage(storageKey) || [];
        array.push(inputValue);
        //create HTML list element;
        renderLiElement(inputValue,listObject);

        //save item to local storage
        saveToLocalStorage(storageKey, array);

        //clear input field;
        inputEl.value = '';
    } else {
        //show error
        errorDiv.style.display = 'block';
    }
}

//saves the array of strings (leads) to Local storage
function saveToLocalStorage(key, array){
    localStorage.setItem(key, JSON.stringify(array));
}

//returns array of leads from Local Storage
function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

//add item to the HTML list
function renderLiElement(listItem, listObject){
    let liEl = document.createElement('li');
    liEl.innerHTML = `<a href="${listItem}" target="_blank">${listItem}</a>`;
    listObject.appendChild(liEl);
}

//load and render leads from local storage
function renderListFromStorage(storedLeads, listObject){
    let leads = getFromLocalStorage(storedLeads);
    if (leads){
        for (let lead of leads){
            renderLiElement(lead, listObject);
        }
    }
    // for (let lead of leads){
    //     renderLiElement(lead, listObject);
    // }

}

//clearing things
function clearLeads(){
    ulEl.innerHTML = '';
    localStorage.clear();
    myLeads = [];
}