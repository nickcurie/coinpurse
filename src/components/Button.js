import PropTypes from 'prop-types'

const Button = ({ color, text, textColor, onClick }) => {
    return (
        <button style={{ backgroundColor: color, color: textColor }} 
        className="btn" onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    textColor: 'white',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button
