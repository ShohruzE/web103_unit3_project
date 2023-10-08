// Define the base URL for the backend API
const BASE_URL = 'http://localhost:3000/api';

// Define a function to fetch all locations from the backend
export const getAllLocations = async () => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
};

// Define a function to fetch a single location by ID from the backend
export const getLocationById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
};

export default {
    getAllLocations,
    getLocationById
}