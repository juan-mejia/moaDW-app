import {useEffect, useState, useCallback} from 'react'
import { useParams } from 'react-router-dom'

import DetailHeader from './DetailHeader'
import DetailBody from './DetailBody'
import Button from '../UI/Button'
import './Detail.css'

const Detail = (props) => {
    let {slug} = useParams();
    let [item, setItem] = useState({});

    const fetchItem = useCallback(async ()=> {
        try {
            const response = await fetch(`http://moadw-challenge.herokuapp.com/api/find-one?id=${slug}`);
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            console.log(data);
            setItem(data);
        }
        catch(error){
            console.log(error.message)
        }
    },[slug]);
    useEffect(()=>{
        fetchItem();
    },[fetchItem]);

    return (
        <div className="detail">
            <DetailHeader firstName={item.first_name} lastName={item.last_name} description={item.description} image={item.image} />
            <DetailBody totalAmount={item.total} donations={item.donations} />
            <Button text="MAKE A DONATION" />
        </div>
    )
}

export default Detail;