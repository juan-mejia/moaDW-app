import React from 'react'

import DonationsHeader from './Donations/DonationsHeader'
import DonationsList from './Donations/DonationsList'
import Button from '../UI/Button'

import './Home.css'

const Home = (props)=> {
    return (
        <div className="home">
            <DonationsHeader />
            <DonationsList />
            <div className="home-actions">
                <Button text="prev" />
                <Button text="next" />
            </div>
        </div>
    );
}

export default Home;