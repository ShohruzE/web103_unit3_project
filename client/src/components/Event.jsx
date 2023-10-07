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
        <div>

        </div>
    )
}

export default Event