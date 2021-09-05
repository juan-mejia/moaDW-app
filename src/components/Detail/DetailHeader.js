import './DetailHeader.css'
const DetailHeader = (props) => {
    return (
        <div className="detail-header">
                <h2 className="title title-color">
                    {props.firstName} <br/>
                    {props.lastName}
                </h2>
                <div className="image">
                    <img src={props.image} alt=" "></img>
                </div>
                <p className="description">
                    {props.description}
                </p>
            </div>
    )
}

export default DetailHeader;