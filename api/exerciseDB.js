import { rapidApiKey } from "../constant";

const baseUrl = 'https://exercisedb.p.rapidapi.com';


const apiCall = async (url, params) => {
    try {
       
        const options = {
            method: 'GET',
            headers: { 
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await fetch(url, options); // Await the fetch response
        const result = await response.json(); // Parse the JSON response
        return result; // Return the parsed result
    } catch (err) {
        console.log('error:', err.message);
        return null; // Return null in case of error
    }
}

export const fetchExerciseByBodyParts = async (bodyPart) => {
    try {
        const data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}?limit=20`); 
        return data;
    } catch (error) {
        console.log('Error fetching exercise data:', error);
        return null;
    }
}

