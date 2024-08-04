import "../../public/css/global.css";
import "../../public/css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <h3>About EcoLife</h3>
                    <p>
                        EcoLife is a non-profit organization committed to promoting sustainable living and reducing carbon footprint. Our mission is to empower individuals, families, and communities to take actions that contribute to a healthier planet and a better future.
                    </p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
            </div>
            <p>
                Developed by <b>Mayur Patil</b>
            </p>
        </footer>
    );
};

export default Footer;
