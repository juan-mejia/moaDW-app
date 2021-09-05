import React  from 'react'

import './DonationsHeader.css'
const DonationsHeader = ()=> {
    return (
        <div className="donations-header">
            <h2 className="title title-color">Donations</h2>
            <div className="donations-filter">
                <select name="cars" id="cars">
                    <option value="volvo">Sort By Donations</option>
                    <option value="volvo">Sort By Donations</option>
                    <option value="volvo">Sort By Donations</option>
                    <option value="volvo">Sort By Donations</option>
                </select>
            </div>
        </div>
    );
}

export default DonationsHeader;