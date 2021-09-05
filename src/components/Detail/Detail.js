import React from 'react'

import DetailHeader from './DetailHeader'
import './Detail.css'

const Detail = (props) => {
    return (
        <div className="detail">
            <DetailHeader />
            <div className="detail-body background-gradient">
                <div className="body-container ">
                    <div className="total-donations">
                        <p>TOTAL DONATIONS</p>
                        <p>210</p>
                    </div>
                    <span className="line" />
                    <div className="total-amount">
                        <p>TOTAL DONATIONS</p>
                        <p>$210</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;