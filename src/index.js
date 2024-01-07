import { runit } from "./load.js";
import { tab1 } from "./load.js";
import { tab2 } from "./load.js";
// runit;
console.log('Hello, World!');

// Instantiate the runit class after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function(tabName) {
    new runit();
    new tab1();
    new tab2();
});

// create tab switching logic
// create a function that will switch tabs when clicked named switchTab
// wipe out existing content and replace it with new content
function addClickListener(tabId, clickHandler) {
    var tab = document.getElementById(tabId);

    if (tab) {
        tab.addEventListener('click', clickHandler);
    } else {
        console.error(`Element with ID '${tabId}' not found.`);
    }
}

// Define the 'tab1' element in your HTML code
// add event listeners to each tab
addClickListener('tab1', function() {
    console.log('Tab 1 clicked!');
    // Your click event handling code here
    hideTab('tab2');
    showTab('tab1');
});

addClickListener('tab2', function() {
    console.log('Tab 2 clicked!');
    // Your click event handling code here
    hideTab('tab1');
    showTab('tab2');
});

// Function to hide a tab by setting its display property to 'none'
function hideTab(tabId) {
    var tab = document.getElementById(tabId);
    console.log("hide", tabId);

    // wipe tabId
    tab.style.display = 'none';
    console.log(tab);
}

function showTab(tabId) {
    var tab = document.getElementById(tabId);
    console.log("show", tabId);

    // show tabId
    tab.style.display = 'block';
    console.log(tab);
}