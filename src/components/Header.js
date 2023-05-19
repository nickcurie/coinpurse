import logo from './coinpurse.png'

const Header = ({ title }) => {
    return (
        <header>
            <img src={logo} alt=''></img>
            <h1 id='header-title'>{title}</h1>
        </header>
    )
}

export default Header
