import React from 'react'
import { useVideo } from '../context/video-context'
import "../styles/subscriptions.css"

const Subscriptions = () => {

    const { subscriptions, dispatch } = useVideo()
    return (
        <div className="subscriptions-container">
            <h1>Subscriptions</h1>
            {subscriptions.length === 0 ? <h1 style={{ color: "gray" }}>0 Channels Subscribed</h1> : subscriptions.map((sub) => <div className="subscriptions-list" key={sub}>
                {<h3>{sub.uploadedBy}</h3>}
                <button onClick={() => dispatch({ type: "REMOVE_SUBSCRIPTION", payload: sub })}>Unsubscribe</button>
            </div>
            )}
        </div>
    )
}

export default Subscriptions
