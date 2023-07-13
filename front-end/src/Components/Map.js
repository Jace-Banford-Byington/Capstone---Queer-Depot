// //API KEy: AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// //LAt 40.673110
// //Long -111.865000

//     const apiKey = 'AIzaSyDEN8GuGjy8uGkQdDiHHI2Zi-bJw9MLLWU';


// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };
//     const destination = { lat: 40.673110, long: -111.865000 };


// const Map = () => {

//     const [currentPosition, setCurrentPosition] = useState(null);
//       const [directions, setDirections] = useState(null);
    
//       useEffect(() => {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition((position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentPosition({ lat: latitude, lng: longitude });
//           });
//         }
//       }, []);
    
//       const directionsOptions = {
//         destination: destination,
//         origin: currentPosition,
//         travelMode: 'DRIVING' // Set the desired travel mode
//       };
    
//       const directionsCallback = (response) => {
//         if (response !== null) {
//           if (response.status === 'OK') {
//             setDirections(response);
//           } else {
//             console.log('Directions request failed with status:', response.status);
//           }
//         }
//       };
    
//       return (
//         <LoadScript googleMapsApiKey="YOUR_API_KEY">
//           {currentPosition && (
//             <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={10}>
//               <Marker position={currentPosition} />
//               <DirectionsService options={directionsOptions} callback={directionsCallback} />
//               {directions && <DirectionsRenderer directions={directions} />}
//             </GoogleMap>
//           )}
//         </LoadScript>
//       );
//     };
// export default Map;

// // import React, { useEffect, useState } from 'react';
// // import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// // const containerStyle = {
// //   width: '100%',
// //   height: '400px'
// // };

// // const destination = { lat: 37.7749, lng: -122.4194 }; // Replace with your desired destination coordinates

// // const GoogleMapComponent = () => {
// //   const [currentPosition, setCurrentPosition] = useState(null);
// //   const [directions, setDirections] = useState(null);

// //   useEffect(() => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition((position) => {
// //         const { latitude, longitude } = position.coords;
// //         setCurrentPosition({ lat: latitude, lng: longitude });
// //       });
// //     }
// //   }, []);

// //   const directionsOptions = {
// //     destination: destination,
// //     origin: currentPosition,
// //     travelMode: 'DRIVING' // Set the desired travel mode
// //   };

// //   const directionsCallback = (response) => {
// //     if (response !== null) {
// //       if (response.status === 'OK') {
// //         setDirections(response);
// //       } else {
// //         console.log('Directions request failed with status:', response.status);
// //       }
// //     }
// //   };

// //   return (
// //     <LoadScript googleMapsApiKey="YOUR_API_KEY">
// //       {currentPosition && (
// //         <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={10}>
// //           <Marker position={currentPosition} />
// //           <DirectionsService options={directionsOptions} callback={directionsCallback} />
// //           {directions && <DirectionsRenderer directions={directions} />}
// //         </GoogleMap>
// //       )}
// //     </LoadScript>
// //   );
// // };

// // export default GoogleMapComponent;
