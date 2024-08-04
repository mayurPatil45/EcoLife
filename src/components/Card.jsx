import "../../public/css/global.css";
import "../../public/css/Card.css";

const Card = ({ title, body, dark = false }) => {
    console.log('Card props:', { title, body, dark });
    return (
        <div className={`card ${dark ? 'dark' : ''}`}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Card;
