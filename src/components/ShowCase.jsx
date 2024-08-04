import ImageBar from './ImageBar';
import "../../public/css/global.css";
import "../../public/css/Showcase.css";

const Showcase = ({ heading = "Welcome to EcoLife - the ultimate resource for sustainable living!", text = "Our mission is to help you live a more environmentally friendly lifestyle by providing tips, tools, and resources to reduce your carbon footprint and create a more sustainable world. Here, you will find information on how to conserve water and energy, reduce waste, and make smart, sustainable choices.", showExtra = false }) => {
    return (
        <section className="showcase">
            <div className="showcase-text">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>

            {showExtra && (
                <div className="showcase-img">
                    <ImageBar />
                </div>
            )}
        </section>
    );
};

export default Showcase;
