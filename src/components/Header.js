import logo from '../images/header-logo.svg';
export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип с надписью Место Россия" />
        </header>
    );
}
