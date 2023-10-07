import { pool } from './database.js';
import './dotenv.js';
import concertsData from '../data/concerts.js';
import locationsData from '../data/locations.js';


const createLocationsTable = async () => {
    const createTableQuery = 
    `DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL
    )`;

    try {
        const response = await pool.query(createTableQuery);
        console.log('------->Locations table created successfully!');
    }
    catch (error) {
        console.log('Error creating locations table', error);
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable();

    locationsData.map((location) => {
        const insertLocationQuery = {
            text: "INSERT INTO locations (name, address) VALUES ($1, $2)"
        }
        const values = [
            location.name, 
            location.address
        ];

        pool.query(insertLocationQuery, values, (error, response) => {
            if (error) {
                console.error('Error seeding locations table', error);
                return;
            }
            console.log(`${location.name} inserted successfully!`);
        });
    });
}


const createConcertsTable = async () => {
    const createTableQuery = 
    `DROP TABLE IF EXISTS concerts;
    
    CREATE TABLE IF NOT EXISTS concerts (
        id SERIAL PRIMARY KEY,
        locationId INTEGER REFERENCES locations(id),
        artist VARCHAR(255) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        time VARCHAR(255) NOT NULL,
        ticketsAvailable BOOLEAN NOT NULL,
        ticketPrice VARCHAR(255) NOT NULL
    )`;
    
    try {
        const response = await pool.query(createTableQuery);
        console.log('------->Concerts table created successfully!');
    }
    catch (error) {
        console.log('Error creating concerts table', error);
    }
}

const seedConcertsTable = async () => {
    await createConcertsTable();
    
    concertsData.map((concert) => {
        const insertConcertQuery = {
            text: `INSERT INTO concerts (locationId, artist, genre, date, time, ticketsAvailable, ticketPrice) VALUES ($1, $2, $3, $4, $5, $6, $7)`
        }
        const values = [
            concert.locationId,
            concert.artist, 
            concert.genre, 
            concert.date, 
            concert.time, 
            concert.ticketsAvailable, 
            concert.ticketPrice, 
        ];

        pool.query(insertConcertQuery, values, (error, response) => {         
            if (error) {
                console.error('Error seeding concerts table', error);
                return;
            }
            console.log(`${concert.artist} inserted successfully!`);
        });
    });
};

seedLocationsTable();
seedConcertsTable();