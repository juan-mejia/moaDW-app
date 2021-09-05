import './DetailBody.css'

const DetailBody = (props)=> {
    return (
        <div className="detail-body background-gradient">
            <div className="body-container ">
                <div className="total-donations">
                    <p>TOTAL DONATIONS</p>
                    <p>{props.donations}</p>
                </div>
                <span className="line" />
                <div className="total-amount">
                    <p>TOTAL DONATIONS</p>
                    <p>${props.totalAmount}</p>
                </div>
            </div>
        </div>
    );
}
export default DetailBody;