import Logo from "../../public/images/logo.png";
import "../../public/css/global.css";
import "../../public/css/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="/" className="logo-link">
                        <img src={Logo} alt="logo" />
                        <span className="logo-txt">EcoLife</span>
                    </a>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="/about" className="nav-link">About</a></li>
                        <li><a href="/blog" className="nav-link">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
