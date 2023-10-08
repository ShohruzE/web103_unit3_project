import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([])
    const [venueNames, setVenueNames] = useState({venue1: '', venue2: '', venue3: '', venue4: ''})

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
                console.log(locationsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])


    return (
        <div className="container">
            {locations.map((location) => {
                return (
                    <article key={location.id}>
                        <h2>{location.name}</h2>
                        <p>{location.address}</p>
                        <Link to={`${location.id}`}>View concerts</Link>
                    </article>
                )
            })}
        </div>
    )
}

export default Locations