import React from 'react'


const Weather = props => (
  <div>
      <h1>Weather</h1>
      { props.city && props.country && <p><strong>Location:</strong> { props.city }, { props.country }</p> }
      { props.temperature && <p><strong>Temperature:</strong> { props.temperature }</p> }
      { props.humidity && <p><strong>Humidity:</strong> { props.humidity }</p> }
      { props.description && <p><strong>Conditions: </strong> { props.description }</p> }
      { props.error && <p>{props.error}</p> }
    </div>
)



export default Weather
