import logo from './coinpurse.png'

const Header = ({ title }) => {
    return (
        <header className="header">
            <img src={logo} alt=''></img>
            <h1>{title}</h1>
        </header>
    )
}

export default Header
