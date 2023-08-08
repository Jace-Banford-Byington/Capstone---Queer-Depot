// //API KEy: AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';
//  const apiKey = 'AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU';
//  const destination = { lat: 40.673110, lng: -111.865000 };
 
//  const containerStyle = {
//    width: '100%',
//    height: '400px'
//  };
 
//  const Map = () => {
//    const [map, setMap] = useState(null);
//    const [currentPosition, setCurrentPosition] = useState(null);
 
//    useEffect(() => {
//      if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition((position) => {
//          const { latitude, longitude } = position.coords;
//          setCurrentPosition({ lat: latitude, lng: longitude });
//        });
//      }
//    }, []);
 
//    const onMapLoad = (map) => {
//      setMap(map);
//    };
 
//    const currentLocationIcon = {
//      url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//      scaledSize: new window.google.maps.Size(40, 40),
//    };
 
//    const destinationIcon = {
//      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
//      scaledSize: new window.google.maps.Size(40, 40),
//    };
 
//    return (
//      <LoadScript googleMapsApiKey={apiKey} onLoad={() => console.log('Google Maps API loaded successfully.')}>
//        {({ isLoaded, loadError }) => (
//          <>
//            {loadError && <div>Error loading Google Maps API.</div>}
//            {isLoaded && currentPosition && (
//              <GoogleMap
//                mapContainerStyle={containerStyle}
//                center={currentPosition}
//                zoom={10}
//                onLoad={onMapLoad}
//              >
//                 {currentPosition && <Marker position={currentPosition} icon={currentLocationIcon} />}
//                    <Marker position={destination} icon={destinationIcon} />
//             </GoogleMap>
//            )}
//          </>
//        )}
//      </LoadScript>
//    );
//  };
 
//  export default Map;

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = 'AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU';
const destination = { lat: 40.673110, lng: -111.865000 };

const containerStyle = {
  width: '100%',
  height: '400px'
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const onMapLoad = (map) => {
    setMap(map);
  };

  const currentLocationIcon = {
    url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    scaledSize: new window.google.maps.Size(40, 40),
  };

  const destinationIcon = {
    url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    scaledSize: new window.google.maps.Size(40, 40),
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={10}
        onLoad={onMapLoad}
      >
        {currentPosition && <Marker position={currentPosition} icon={currentLocationIcon} />}
        <Marker position={destination} icon={destinationIcon} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
