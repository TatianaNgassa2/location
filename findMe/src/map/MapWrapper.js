import React, { useRef, useEffect, useState, useCallback } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { getAllPoints } from "../api/point";


export default function MapWrapper() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const cmr = { lng: 11.501346, lat: 3.844119 };
  const [zoom] = useState(14);
  const [points,setPoints] = useState()
  const [loading,setLoading] = useState(true)
  maptilersdk.config.apiKey = "py2mRiDBGYV0b8dNTnjo";

  const handlePoints = async ()=>{
    const {data,error} = await getAllPoints()
    if(!data || error) return;
    setPoints(data)
    setLoading(false)
  }
  const handleDisplayData = ()=>{
    if(loading)
    handlePoints()
    console.log(points)
   
       
  }
  useEffect(() => {
   // stops map from intializing more than once

   if(!points)handleDisplayData()
  
   console.log(points)
   if(!loading){
    if (map.current) return; 
  map.current = new maptilersdk.Map({
    container: mapContainer.current,
    center: [cmr.lng, cmr.lat],
    zoom: zoom,
  });
 
 
  map.current.on('load',function(){
   
    map.current.addSource('points',
  {
    type:'geojson',
    data:points,

  })
  map.current.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'points',
    'layout': {
      'icon-image':   'Airport_icon'  ,
      'icon-size': 0.05
  },
 
  });
   
   
  })
 
 
  map.current.on('styledata', function() {
    console.log('A styledata event occurred.');
    });
}
  }, [cmr.lng, cmr.lat, zoom,handleDisplayData]);

 
  return (
  <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>)

}
// 7.3696495 12.3445856
