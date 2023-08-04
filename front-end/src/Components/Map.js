//API KEy: AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';
 const apiKey = 'AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU';
    const destination = { lat: 40.673110, lng: -111.865000 }; 
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
//LAt 40.673110
//Long -111.865000
const Map = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        });
      }
    }, []);

    const currentLocationIcon = {
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize: new window.google.maps.Size(40, 40), // Adjust the size if needed
      };
    
      const destinationIcon = {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new window.google.maps.Size(40, 40), // Adjust the size if needed
      };
  
    return (
        <LoadScript googleMapsApiKey={apiKey}>
        {currentPosition && (
          <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={10}>
            <Marker position={currentPosition} icon={currentLocationIcon} />
            <Marker position={destination} icon={destinationIcon} />
          </GoogleMap>
        )}
      </LoadScript>
    );
  };
  
  export default Map;