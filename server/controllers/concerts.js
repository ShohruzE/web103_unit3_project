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

const getConcertsById = async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM concerts WHERE locationid = $1 ORDER by id ASC`, [req.params.id]);
        res.status(200).json(response.rows);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default {
    getConcerts,
    getConcertsById
}