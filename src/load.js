export class runit {
    constructor() {
        // Create an image element (uncomment if needed)
        var image = document.createElement('img');
        image.src = 'https://picsum.photos/200.jpg';

        // Create a headline element
        var headline = document.createElement('h1');
        headline.textContent = 'Your Headline Copy';

        // Create a copy element
        var copy = document.createElement('p');
        copy.textContent = 'Your copy text goes here';

        // Get the div#content element
        var content = document.getElementById('content');

        // Append the image, headline, and copy elements to the div#content
        // Uncomment the next line if you want to append the image
        content.appendChild(image);
        content.appendChild(headline);
        content.appendChild(copy);
        content.appendChild(copy);
    }
}

// Example of exporting a function (uncomment if needed)
// export function myFunction() {
//     console.log('Hello from myFunction!');
// }

// Example of using myFunction (uncomment if needed)
// myFunction();

export class tab1 {
    constructor() {
    // create a div element
    var div = document.createElement('div');
    div.id = 'tab1';
    div.className = 'tabcontent';
    div.style.display = 'block';
    div.textContent = 'This is tab 1';
    //  adds the appropriate content and styles to that element and then appends it to the DOM
    var content = document.getElementById('content');
    content.appendChild(div);
}   
// addClickListener() {
//     var tab1 = document.getElementById('tab1');

//     if (tab1) {
//         tab1.addEventListener('click', function() {
//             console.log('Tab 1 clicked!');
//             // Your click event handling code here
//         });
//     } else {
//         console.error("Element with ID 'tab1' not found.");
//     }
// }
}

export class tab2 {
    constructor() {
    // create a div element
    var div = document.createElement('div');
    div.id = 'tab2';
    div.style.display = 'block';
    div.className = 'tabcontent';
    div.textContent = 'This is tab 2';
    //  adds the appropriate content and styles to that element and then appends it to the DOM
    var content = document.getElementById('content');
    content.appendChild(div);
} 
}