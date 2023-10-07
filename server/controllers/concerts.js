import { pool } from '../config/database.js';

const getConcerts = async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM concerts ORDER by id ASC`);
        res.status(200).json(response.rows);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default {
    getConcerts
}