import PropTypes from 'prop-types'

const Button = ({ color, text, textColor, onClick, shape, propId}) => {
    return (
        <button style={{ backgroundColor: color, color: textColor }} 
        className={"btn-"+shape} onClick={onClick} id={propId}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    textColor: 'black',
    shape: 'square',
}

Button.propTypes = {
    text: PropTypes.string,
    shape: PropTypes.string,
}
export default Button
