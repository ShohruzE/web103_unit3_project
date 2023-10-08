import React, { useState, useEffect } from 'react'
import Concert from '../components/Concert'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI';
import ConcertsAPI from '../services/ConcertsAPI';

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [concerts, setConcerts] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index)
                setLocation(locationData)
                const concertData = await ConcertsAPI.getConcertsById(index)
                setConcerts(concertData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, []);

    return (
        <div className='location-concerts'>
            <header>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}</p>
                </div>
            </header>

            <main>
                {
                    concerts && concerts.length > 0 ? concerts.map((concert, index) =>
                        <Concert
                            key={concert.id}
                            id={concert.id}
                            artist={concert.artist}
                            genre={concert.genre}
                            date={concert.date}
                            time={concert.time}
                            ticketprice={concert.ticketprice}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No concerts scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents