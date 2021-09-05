import DonationItem from './DonationItem';

import './DonationsList.css'

const DonationsList = (props)=> {
    const {list} = props;
    return (
        <div className="donations-list">
            { 
            list.map((item) => (
                <DonationItem 
                    item={item}
                    key={item.id}
                 />
            ))
            }
            
        </div>
    );
}

export default DonationsList;