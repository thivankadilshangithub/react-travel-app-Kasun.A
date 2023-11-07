import React, { useEffect, useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../config/mapboxConfig';
import Map, { Marker } from 'react-map-gl';

const Destination = () => {
  // const coordinates = [
  //     { lng: 24.72142873518393, lat: 46.6711565259167 },
  //     // { lng: 24.739450364301547, lat: 46.65938083571023 },
  //   ];
  // useEffect(() => {
  //     mapboxgl.accessToken = MAPBOX_TOKEN;
  //     const map = new mapboxgl.Map({
  //       container: 'map-container', 
  //       style: 'mapbox://styles/mapbox/streets-v11', 
  //       center: [24.72142873518393, 46.6711565259167],
  //       zoom: 10,
  //     });

  //     coordinates.forEach(coord => {
  //         new mapboxgl.Marker()
  //           .setLngLat([coord.lng, coord.lat])
  //           .addTo(map);
  //     });

  //     return () => map.remove();
  //   }, []);
  const [newPlace, setNewPlace] = useState(null)
  const [viewPort, setViewPort] = useState({
    latitude: 46.6711565259167,
    longitude: 24.72142873518393,
    zoom: 6,
  })
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      {/* <h1>Destination</h1> */}
     <div  style={{ marginTop: '40px', marginBottom: '60px' }}>
     <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: localStorage.getItem('longitude'),
          latitude: localStorage.getItem('latitude'),
          zoom: 14
        }}
        style={{ width: 1200, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
     </div>
      {newPlace ? (
        <>
         <Marker
          latitude={newPlace?.lat}
          longitude={newPlace?.long}
          // offsetLeft={}
         >
         </Marker>
        </>
      ): null}
      <Footer />

    </div>
  )
}

export default Destination
