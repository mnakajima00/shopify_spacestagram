import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://api.nasa.gov/planetary",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export function getImages(start_date, end_date){
    return axiosClient.get(`/apod?api_key=${process.env.API_KEY}&start_date=${start_date}&end_date=${end_date}&thumbs=true`);
}

export function getMoreImages(url){
    return axiosClient.get(url);
}