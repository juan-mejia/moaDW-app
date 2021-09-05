import { Link } from 'react-router-dom';

import ArrowIcon from '../../UI/ArrowIcon'
import './DonationItem.css'

const DonationItem = (props)=> {
    let {item} = props;
    return (
        <div className="donation-item background-gradient">
            <div className="item-container">
                <div className="item-header">
                    <div className="item-image">
                        <img src={item.image} alt=" "></img>
                    </div>
                    <div className="item-name">
                        <h3>
                        {item.first_name}<br/>
                        {item.last_name}
                        </h3>
                    </div>
                </div>
                <div className="item-body">
                    <div className="total-donations">
                        <p><b>TOTAL DONATIONS</b></p>
                        <p><b>{item.donations}</b></p>
                    </div>
                    <div className="item-button">
                        <Link to={`/detail/${item.id}`}>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationItem;