import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { MarkersRest } from './MarkerRest';

//*******************************DATA PRUEBA******************************************** */
let restaurantsArr = [{address:"misiones 856",city:"Rio Cuarto", country:"Argentina",name:"Algún nombre de restaurante"},{address:"Mariquita Sanchez de Thompson 764",city:"Rio Cuarto", country:"Argentina",name:"Restaurante Piola"},{address:"Francisco Muñiz 864",city:"Rio Cuarto", country:"Argentina",name:"Restaurante mas copado"},{address:"Presidente Peron 690",city:"Villa Mercedes", country:"Argentina",name:"Algún nombre de restaurante"},{address:"Presidente Peron 895",city:"Villa Mercedes", country:"Argentina",name:"Restaurante Piola"},{address:"Presidente Peron 943",city:"Villa Mercedes", country:"Argentina",name:"Restaurante mas copado"}]
let userLocation = {address:"Mariquita Sanchez de Thompson 856",city:"Rio Cuarto", country:"Argentina"}
//********************************************************************************* */


export default function Map() {
    const [coordenadas, setCoordenadas] = useState({lat:null,lng:null})
    const [addressSearch, setAddressSearch] = useState({city:userLocation.city, country:userLocation.country})
    useEffect(() => {
        async function buscarDireccion() {
          try {
            const address = `${addressSearch.city}, ${addressSearch.country}`;
    
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyAR96I2GcOFCVlWMer5l_WtCRrSnAJK8DM`
            );
    
            if (response.ok) {
              const data = await response.json();
    
              if (data.status === 'OK') {
                const { lat, lng } = data.results[0].geometry.location;
                console.log('Dirección encontrada:', { lat, lng });
                setCoordenadas({lat:lat,lng:lng})
              } else {
                console.error('Error al buscar dirección:', data.status);
              }
            } else {
              console.error('Error al buscar dirección:', response.status);
            }
          } catch (error) {
            console.error('Error al buscar dirección:', error);
          }
        }
    
        buscarDireccion();
      }, [addressSearch]);

    const containerStyle = {
      width: '100%',
      height: '40rem'
    };
  
    let center = coordenadas;

    let zoom 
    if (addressSearch.city==""&&addressSearch.country!==""){zoom = 4}
    else if (addressSearch.country==""&&addressSearch.city==""){
      zoom = 3;
      center = {lat:0,lng:0}
    }
    else{zoom=13}

    const handleSelectChange = (event) => {
        setAddressSearch({...addressSearch, [event.target.name]:event.target.value});
      };

    let arrControllerCity = []
    let arrControllerCountry = []
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAR96I2GcOFCVlWMer5l_WtCRrSnAJK8DM">
        <div>
            <label>City</label>
         <select value={addressSearch.city} name="city" onChange={handleSelectChange}>
         <option value={""}>City</option>
           {
             restaurantsArr.map((rest)=>{
                if(arrControllerCity.includes(rest.city))return;
                else{
                    arrControllerCity.push(rest.city)
                return(<option value={rest.city}>{rest.city}</option>)}
             })
           }
        </select>

        <label>Country</label>
        <select value={addressSearch.country} name="country" onChange={handleSelectChange}>
         <option value={""}>Country</option>
           {
             restaurantsArr.map((rest)=>{
                if(arrControllerCountry.includes(rest.country))return;
                else{
                    arrControllerCountry.push(rest.country)
                return(<option value={rest.country}>{rest.country}</option>)}
             })
           }
        </select>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          <MarkersRest restaurants={restaurantsArr} />
        </GoogleMap>
      </LoadScript>
    );
  }