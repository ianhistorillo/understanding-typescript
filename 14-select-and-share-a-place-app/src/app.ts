// Code goes here!
import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;


function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    type GoogleGeocodingResponse = {
        data: { [0]: { lat: number; lon: number } };
        status: 200 | 'ZERO_RESULTS';
    }

    axios.get<GoogleGeocodingResponse>(
        `https://nominatim.openstreetmap.org/search?q=${encodeURI(enteredAddress)}&format=json`
    )
    .then(response => {
        if (response.status !== 200) {
            throw new Error("Could not fetch location!");
        }
        const coordinates = response.data;
        console.log(coordinates);
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

    //send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);
