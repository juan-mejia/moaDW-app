import {React, useEffect, useState, useCallback} from 'react'

import DonationsHeader from './Donations/DonationsHeader'
import DonationsList from './Donations/DonationsList'
import Button from '../UI/Button'

import './Home.css'

const Home = (props)=> {
    const [indexList, setIndexList] = useState(0);
    const [itemList, setItemList] = useState([]);
    const [pageList, setPageList] = useState([]);

    const nextPageHandler = ()=> {
        let tempIndex = indexList;
        let tempList = [];
        let pageSize = 3;
        do {
            tempList.push(itemList[tempIndex]);
            tempIndex++;
            pageSize--;
        } while(tempIndex < itemList.length && pageSize > 0);
        setPageList(tempList);
        setIndexList(tempIndex);
    }
    const prevPageHandler = ()=> {
        if(indexList <= 3){return}
        let tempIndex = indexList - 6;
        let tempList = [];
        let pageSize = 3;
        do {
            tempList.push(itemList[tempIndex]);
            tempIndex++;
            pageSize--;
        } while(tempIndex < itemList.length && pageSize > 0);
        setPageList(tempList);
        setIndexList(tempIndex);
    }

    const fetchList = useCallback(async () => {
            const response = await fetch('https://moadw-challenge.herokuapp.com/api/find-many?skip=0&limit=1000&sort=name');
            const data = await response.json();
            setItemList(data);
        }, [])

    useEffect(()=>{
        fetchList();
    },[fetchList]);

    useEffect(() => {
        if(itemList.length > 0){
            let tempIndex = 0;
            let tempList = [];
            let pageSize = 3;
            do {
                tempList.push(itemList[tempIndex]);
                tempIndex++;
                pageSize--;
            } while(tempIndex < itemList.length && pageSize > 0);
            setPageList(tempList);
            setIndexList(tempIndex);
        }
    }, [itemList])

    return (
        <div className="home">
            <DonationsHeader />
            {/* <DonationsList list={pageList} /> */}
            {pageList.length > 0 ? <DonationsList list={pageList} /> : ''}
            <div className="home-actions">
                <Button text="prev" onClick={prevPageHandler}/>
                <Button text="next" onClick={nextPageHandler} />
            </div>
        </div>
    );
}

export default Home;