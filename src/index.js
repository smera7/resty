import { runit, openCity} from './load.js';
// on dom load
document.addEventListener('DOMContentLoaded', () => {
    const r = new runit();

    const cityNames = ['Tokyo', 'Paris', 'London']; // Replace with your event city names

    cityNames.forEach(cityName => {
        const event = { currentTarget: { className: '' } };
        openCity(event, cityName);
    });
});
