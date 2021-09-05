import ArrowIcon from '../../UI/ArrowIcon'
import './DonationItem.css'

const DonationItem = (props)=> {
    return (
        <div className="donation-item background-gradient">
            <div className="item-container">
                <div className="item-header">
                    <div className="item-image">
                        <img src="https://robohash.org/excepturiconsequatureius.png?size=50x50&set=set1" alt=" "></img>
                    </div>
                    <div className="item-name">
                        <h3>
                        Tris<br/>
                        Cordenosa
                        </h3>
                    </div>
                </div>
                <div className="item-body">
                    <div className="total-donations">
                        <p><b>TOTAL DONATIONS</b></p>
                        <p><b>143</b></p>
                    </div>
                    <div className="item-button">
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationItem;