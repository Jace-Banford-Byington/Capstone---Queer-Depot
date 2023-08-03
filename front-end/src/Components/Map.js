//API KEy: AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';

//LAt 40.673110
//Long -111.865000
const Map = () => {
    const apiKey = 'AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU';
    const destination = { lat: 40.673110, lng: -111.865000 };


const containerStyle = {
  width: '100%',
  height: '400px'
};
const [currentPosition, setCurrentPosition] = useState(null);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
    });
  }
}, []);

return (
  <LoadScript googleMapsApiKey={apiKey}>
    <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={10}>
      {currentPosition && <Marker position={currentPosition} title="Current Location" />}
      <Marker position={destination} title="Destination" />
    </GoogleMap>
  </LoadScript>
);
};

export default Map;