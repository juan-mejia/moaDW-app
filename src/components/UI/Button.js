import './Button.css'

const Button = (props)=> {
    return (
        <div className="button">
            <button><b>{props.text}</b></button>
        </div>
    )
}

export default Button;