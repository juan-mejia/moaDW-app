import './Button.css'

const Button = (props)=> {
    return (
        <div className="button">
            <button onClick={props.onClick}><b>{props.text}</b></button>
        </div>
    )
}

export default Button;