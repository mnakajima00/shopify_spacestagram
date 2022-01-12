import axios from 'axios';

/* Config for axios */
const axiosClient = axios.create({
    baseURL: "https://api.nasa.gov/planetary",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

/* API Call to NASA API */
export function getImages(start_date, end_date){
    // return axiosClient.get(`/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${start_date}&end_date=${end_date}&thumbs=true`);
    return axiosClient.get(`/apod?api_key=hmaBQapcoFzBTts6oJAXgbBb6nkHLsSgGPEIf1Y4&start_date=${start_date}&end_date=${end_date}&thumbs=true`);
}