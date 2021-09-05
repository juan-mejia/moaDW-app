import React from 'react'

import DetailHeader from './DetailHeader'
import DetailBody from './DetailBody'
import Button from '../UI/Button'
import './Detail.css'

const Detail = (props) => {
    return (
        <div className="detail">
            <DetailHeader />
            <DetailBody />
            <Button text="MAKE A DONATION" />
        </div>
    )
}

export default Detail;