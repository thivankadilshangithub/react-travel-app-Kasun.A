import React, { useEffect, useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mapboxgl from 'mapbox-gl';
import { MAPBOX_TOKEN } from '../config/mapboxConfig';
import Map, { Marker } from 'react-map-gl';
import blackhat from './../assets/events/blackhat.jpg'
import winterland from './../assets/events/winterland.jpg'
import boulevard from './../assets/events/boulevard.jpg'
import earch from './../assets/events/earth.jpg'
import formula1 from './../assets/events/formula1.jpg'

const Destination = () => {
  const festivalsData = [
    {
      name: 'Black Hat',
      startDate: '2023-07-15',
      city: 'Beach City',
      latitude: 34.0522,
      longitude: -118.2437,
      description: 'Join us for a fun-filled summer celebration!',
      image: blackhat,
    },
    {
      name: 'Winter Land',
      startDate: '2023-08-20',
      city: 'Grooveville',
      latitude: 40.7128,
      longitude: -74.0060,
      description: 'Experience the best music from around the world!',
      image: winterland,
    },
    {
      name: 'Boulevard World',
      startDate: '2023-09-10',
      city: 'Heritage Town',
      latitude: 41.8781,
      longitude: -87.6298,
      description: 'Celebrate diversity through art, food, and performances!',
      image: boulevard,
    },
    {
      name: 'Earth exhibition',
      startDate: '2023-10-05',
      city: 'Taste City',
      latitude: 37.7749,
      longitude: -122.4194,
      description: 'Satisfy your taste buds with a variety of delicious cuisines!',
      image: earch,
    },
    {
      name: 'Formula 1',
      startDate: '2023-11-15',
      city: 'Maplewood',
      latitude: 40.7128,
      longitude: -74.0060,
      description: 'Enjoy the beauty of autumn with games, crafts, and more!',
      image: formula1,
    },
  ];

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
      <div style={{ marginTop: '40px', marginBottom: '60px' }}>
        <Map
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            longitude: 46.671142261681176,
            latitude: 24.768648991782555,
            zoom: 8
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
      ) : null}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {festivalsData.map((festival, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              width: '70%',
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '20px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            }}
          >
            <img
              src={festival.image} // Using images from the imported array
              alt={festival.name}
              style={{
                maxWidth: '200px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: index % 2 === 0 ? '8px 0 0 8px' : '0 8px 8px 0',
              }}
            />
            <div style={{ flex: 1, padding: '20px' }}>
              <h2
                style={{
                  marginBottom: '10px',
                  color: index % 2 === 0 ? '#2196F3' : '#FF5722',
                }}
              >
                {festival.name}
              </h2>
              <p style={{ color: '#777' }}>{festival.startDate}</p>
              <p style={{ color: '#555' }}>{festival.city}</p>
              <p style={{ color: '#444' }}>{festival.description}</p>
              <button
                style={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  border: 'none',
                  padding: '10px 15px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '14px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                See on Map
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />

    </div>
  )
}

export default Destination
