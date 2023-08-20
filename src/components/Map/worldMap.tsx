import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { useQuery } from "@tanstack/react-query";
import MarkerClusterGroup from 'react-leaflet-cluster';
import "./Map.css"
import axios from "axios";
import {Icon} from "leaflet"

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: {
    _id: number,
    lat: number;
    long: number;
    flag:string
  };
}




const WorldMap = () => {
    const { data } = useQuery<CountryData[]>(["countries"], async () => {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
      
        return response.data;
      });
  return (
    <>
    <div className='headlineWM'>World Map</div>
    <div className='mapParent'>
     <MapContainer  style={{ height: '80vh',width:'75vw' }}center={[ 44.0479,40.6197]} zoom={3} >
    <TileLayer   

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  

  <MarkerClusterGroup>
  {data?.map((country) => (

      <Marker
      key={country.countryInfo._id}
      icon={new Icon({
        iconUrl: country.countryInfo.flag,
        iconSize:[15,15]
      })}
      position={[country.countryInfo.lat, country.countryInfo.long]}
      
      
      >
            <Popup>
              <h3>{country.country}</h3>
              <p>Total Cases: {country.cases}</p>
              <p>Total Deaths: {country.deaths}</p>
              <p>Total Recovered: {country.recovered}</p>
            </Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>
       
  </MapContainer>
</div>
        </>
  )
}

export default WorldMap