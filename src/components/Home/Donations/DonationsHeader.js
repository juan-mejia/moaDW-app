import {useState}  from 'react'

import './DonationsHeader.css'
const DonationsHeader = (props)=> {
    const [sortBy, setSortBy] = useState('donations');

    const dropdownHandler = (e)=> {
        let option = e.target.options.selectedIndex;
        if(option === 0){
            setSortBy('donations');
            props.onSortBy('donations');
        } else if (option === 1) {
            setSortBy('name');
            props.onSortBy('name');
        } else if (option === 2) {
            setSortBy('total');
            props.onSortBy('total');
        }
    }

    return (
        <div className="donations-header">
            <h2 className="title title-color">Donations</h2>
            <div className="donations-filter">
                <select name="donations" id="donations" selected={sortBy} onChange={dropdownHandler}>
                    <option value="donations">Sort By Donations</option>
                    <option value="name">Sort By Name</option>
                    <option value="total">Sort By Total</option>
                </select>
            </div>
        </div>
    );
}

export default DonationsHeader;