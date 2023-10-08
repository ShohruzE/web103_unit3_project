const BASE_URL = 'http://localhost:3000/api';

const getConcertsById = async (locationId) => {
    try {
        const response = await fetch(`${BASE_URL}/concerts/${locationId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getConcertsById
}