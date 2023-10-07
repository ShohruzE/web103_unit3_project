// Define the base URL for the backend API
const BASE_URL = 'http://localhost:3000/api';

// Define a function to fetch all locations from the backend
export const getAllLocations = async () => {
    const response = await fetch(`${BASE_URL}/locations`, {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data = await response.json();
    return data;
};

// Define a function to fetch a single location by ID from the backend
export const getLocationById = async (id) => {
    const response = await fetch(`${BASE_URL}/locations/${id}`);
    const data = await response.json();
    return data;
};

export default {
    getAllLocations,
    getLocationById
}