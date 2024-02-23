import React, {useState, useEffect} from 'react'
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from '@react-google-maps/api'

const MapContainer = () => {
  const [response, setResponse] = useState(null)
  const [travelMode, setTravelMode] = useState('DRIVING') // Default travel mode

  const origin = {lat: 41.3851, lng: 2.1734} // Example origin (Barcelona)
  const destination = {lat: 40.7128, lng: -74.006} // Example destination (New York)

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService()
    directionsService.route(
      {
        origin,
        destination,
        travelMode,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setResponse(result)
        } else {
          console.error(`Directions service failed due to ${status}`)
        }
      },
    )
  }, [origin, destination, travelMode])

  return (
    <LoadScript googleMapsApiKey="AIzaSyCeebq9zzPNSFM2gHZTReYdMhBVKqCYhUw">
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100vh',
        }}
        zoom={10}
        center={origin}
      >
        {response && <DirectionsRenderer options={{directions: response}} />}
        {/* Current location marker */}
        <Marker position={origin} label="Origin" />
        {/* Destination marker */}
        <Marker position={destination} label="Destination" />
        {/* Duration time */}
        {response && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'white',
              padding: '5px',
            }}
          >
            <strong>Duration:</strong>{' '}
            {response.routes[0].legs[0].duration.text}
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer
