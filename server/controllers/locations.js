import { pool } from '../config/database.js';

const getLocations = async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM locations ORDER by id ASC`);
        res.status(200).json(response.rows);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getConcertsByLocation = async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM concerts WHERE location_id = $1 ORDER by id ASC`, [req.params.id]);
        res.status(200).json(response.rows);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default {
    getLocations,
    getConcertsByLocation
}