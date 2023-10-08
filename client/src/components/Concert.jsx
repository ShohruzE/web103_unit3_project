import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = (props) => {

    const [event, setEvent] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventsById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <article>
            <header>
                <h2>{props.artist}</h2>
            </header>
            <div>
                <h3>{props.genre}</h3>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.ticketprice}</p>
            </div>
        </article>
    )
}

export default Event