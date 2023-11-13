import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import hotelone from '../assets/new/hotel01.webp'

const Hotels = () => {
    const hotelsData = [
        {
            name: 'Swissotel Al Maqam Makkah',
            price: '$212',
            ratings: 8.4,
            image: hotelone,
            city: 'Cit',
            description: 'Description of Hotel A',
        },
        {
            name: 'Hotel B',
            price: '$120',
            ratings: 4.0,
            image: 'hotel-b.jpg',
            city: 'City B',
            description: 'Description of Hotel B',
        },
        // Add more hotel objects here
    ];
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <h1>Hotels</h1>
            <div className="hotel-list">
                {hotelsData.slice(0, 9).map((hotel, index) => (
                    <div className="hotel-card" key={index}>
                        <img src={hotel.image} alt={hotel.name} />
                        <h2>{hotel.name}</h2>
                        <p>City: {hotel.city}</p>
                        <p>Price: {hotel.price}</p>
                        <p>Ratings: {hotel.ratings}</p>
                        <p>{hotel.description}</p>
                        <button>Book</button>
                    </div>
                ))}
            </div>
            <Footer />

        </div>
    )
}

export default Hotels
