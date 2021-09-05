import {React, useEffect, useState, useCallback} from 'react'

import DonationsHeader from './Donations/DonationsHeader'
import DonationsList from './Donations/DonationsList'
import Button from '../UI/Button'

import './Home.css'

const Home = (props)=> {
    const [itemList, setItemList] = useState([]);

    const fetchList = useCallback(async () => {
            const response = await fetch('https://moadw-challenge.herokuapp.com/api/find-many?skip=0&limit=5&sort=name');
            const data = await response.json();
            setItemList(data);
        }, [])

    useEffect(()=>{
        fetchList();
    },[fetchList]);

    return (
        <div className="home">
            <DonationsHeader />
            <DonationsList list={itemList} />
            <div className="home-actions">
                <Button text="prev" />
                <Button text="next" />
            </div>
        </div>
    );
}

export default Home;