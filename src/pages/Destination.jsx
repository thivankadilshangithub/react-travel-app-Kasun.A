import React, {useEffect} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../config/mapboxConfig';

const Destination = () => {
    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const map = new mapboxgl.Map({
          container: 'map-container', // ID of a div element where the map will be rendered
          style: 'mapbox://styles/mapbox/streets-v11', // Map style
          center: [-74.006, 40.7128], // Initial map center (longitude, latitude)
          zoom: 12, // Initial zoom level
        });
    
        // Clean up the map when the component unmounts
        return () => map.remove();
      }, []);
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <h1>Destination</h1>
            <div id="map-container" style={{ width: '100%', height: '400px' }}></div>
            <Footer />

        </div>
    )
}

export default Destination
