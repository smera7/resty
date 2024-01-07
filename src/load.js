export class runit {
    constructor(){
          
        const h2 = document.createElement('h2');
h2.textContent = 'Tabs';

const p = document.createElement('p');
p.textContent = 'Click on the buttons inside the tabbed menu:';

const div = document.createElement('div');
div.classList.add('tab');

const buttonLondon = document.createElement('button');
buttonLondon.id = 'London';
buttonLondon.classList.add('tablinks');
buttonLondon.textContent = 'London';
buttonLondon.addEventListener('click', (event) => {
    openCity(event, 'London');
});

const buttonParis = document.createElement('button');
buttonParis.id = 'Paris';
buttonParis.classList.add('tablinks');
buttonParis.textContent = 'Paris';

buttonParis.addEventListener('click', (event) => {
    openCity(event, 'Paris');
});

const TokyoPage = document.createElement('div');
const buttonTokyo = document.createElement('button');
buttonTokyo.id = 'Tokyo';
buttonTokyo.classList.add('tablinks');
buttonTokyo.textContent = 'Tokyo';
buttonTokyo.addEventListener('click', (event) => {
    openCity(event, 'Tokyo');
});

div.appendChild(buttonLondon);
div.appendChild(buttonParis);
div.appendChild(buttonTokyo);

document.body.appendChild(h2);
document.body.appendChild(p);
document.body.appendChild(div);
    }};

    export function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";

        if (cityName === 'Tokyo') {
            // show tokyo page
            const TokyoPage = document.createElement('div');
            TokyoPage.id = 'Tokyopage';
            TokyoPage.classList.add('tabcontent');
            TokyoPage.style.display = 'block';
            TokyoPage.textContent = 'Tokyo is the capital of Japan.';
            document.body.appendChild(TokyoPage);
        }

        if (cityName === 'Paris') {
            // show paris page
            const ParisPage = document.createElement('div');
            ParisPage.id = 'Parispage';
            ParisPage.classList.add('tabcontent');
            ParisPage.style.display = 'block';
            ParisPage.textContent = 'Paris is the capital of France.';
            document.body.appendChild(ParisPage);
        }

        if (cityName === 'London') {
            // show london page
            const LondonPage = document.createElement('div');
            LondonPage.id = 'Londonpage';
            LondonPage.classList.add('tabcontent');
            LondonPage.style.display = 'block';
            LondonPage.textContent = 'London is the capital of England.';
            document.body.appendChild(LondonPage);
        }
    }