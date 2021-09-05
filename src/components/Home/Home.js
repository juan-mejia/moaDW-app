import React from 'react'

import DonationsHeader from './Donations/DonationsHeader'
import DonationsList from './Donations/DonationsList'

import './Home.css'

const Home = (props)=> {
    return (
        <div className="home">
            <DonationsHeader />
            <DonationsList />
        </div>
    );
}

export default Home;