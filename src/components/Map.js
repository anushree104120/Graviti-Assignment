import React from 'react'
import { GoogleMap,Marker,DirectionsRenderer } from '@react-google-maps/api'

const Map = (props) => {
    const center = { lat: 20.5937, lng: 78.9629 }
  return (
    <GoogleMap
    center={center}
    zoom={15}
    mapContainerStyle={{ width: '100%', height: '100%' }}
    options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
    }}
>
     <Marker position={center} />
     {props.direction && (
        <DirectionsRenderer directions={props.direction} />
    )}  

</GoogleMap>
  )
}

export default Map
