import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Destinations from '../components/Destinations'
import Offer from '../components/Offer'
import Tours from '../components/Tours'
import Testimonial from '../components/Testimonial'
import DownloadApp from '../components/DownloadApp'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <Services />
            <Destinations />
            <Offer />
            <Tours />
            <Testimonial />
            <DownloadApp />
            <Footer />

        </div>
    )
}

export default Home
