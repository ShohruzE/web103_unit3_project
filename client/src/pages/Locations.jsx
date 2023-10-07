import React, { useState, useEffect } from 'react'
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
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])


    return (
        <div>
            {
                locations.map((location, index) => {
                    <div key={index}>
                        <h2>{location.name}</h2>
                        <p>{location.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Locations