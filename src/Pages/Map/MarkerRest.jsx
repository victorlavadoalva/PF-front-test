import React, { useEffect, useState } from 'react';
import { Marker,InfoWindow } from '@react-google-maps/api';

export const MarkersRest = ({ restaurants }) => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    async function buscarDireccion() {
      try {
        const markers = [];
        for (const restaurant of restaurants) {
          const address = `${restaurant.address}, ${restaurant.city}, ${restaurant.country}`;

          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
              address
            )}&key=AIzaSyAR96I2GcOFCVlWMer5l_WtCRrSnAJK8DM`
          );

          if (response.ok) {
            const data = await response.json();

            if (data.status === 'OK') {
              const { lat, lng } = data.results[0].geometry.location;
              console.log('Dirección encontrada:', { lat, lng });
              markers.push({ lat, lng, info: restaurant });
            } else {
              console.error('Error al buscar dirección:', data.status);
            }
          } else {
            console.error('Error al buscar dirección:', response.status);
          }
        }
        setMarkers(markers);
      } catch (error) {
        console.error('Error al buscar dirección:', error);
      }
    }

    buscarDireccion();
  }, [restaurants]);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <>
      {markers.map((mark) => (
        <Marker
          key={mark.name}
          position={{ lat: mark.lat, lng: mark.lng }}
          onClick={() => handleMarkerClick(mark)}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={handleCloseInfoWindow}
        >
          <div>
            <h4>{selectedMarker.info.name}</h4>
            <p>{selectedMarker.info.address}</p>
            </div>
        </InfoWindow>
      )}
    </>
  );
};