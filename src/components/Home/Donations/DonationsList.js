import DonationItem from './DonationItem';

import './DonationsList.css'

const DonationsList = (props)=> {
    const {list} = props;
    console.log(list);
    return (
        <div className="donations-list">
            { 
            list.map((item) => (
                <DonationItem item={item} />
            ))
            }
            
        </div>
    );
}

export default DonationsList;