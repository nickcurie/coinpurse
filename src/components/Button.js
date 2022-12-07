import PropTypes from 'prop-types'

const Button = ({ color, text, textColor, onClick, shape}) => {
    return (
        <button style={{ backgroundColor: color, color: textColor }} 
        className={"btn-"+shape} onClick={onClick}>
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
