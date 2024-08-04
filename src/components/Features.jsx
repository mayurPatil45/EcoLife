import Card from './Card'
import "../../public/css/global.css";
import "../../public/css/Features.css";

const featuresData = [
    {
        title: "Reduce Your Carbon Footprint",
        body: "Discover practical tips for reducing your carbon footprint and living a more environmentally friendly lifestyle.",
    },
    {
        title: "Conserve Resources",
        body: "Find ways to conserve resources like water and energy through simple changes in your habits and lifestyle.",
    },
    {
        title: "Live Sustainably",
        body: "Explore the many benefits of sustainable living, from reducing waste and pollution to supporting local communities and economies.",
    },
];

const Features = () => {
    return (
        <section className="features">
            <h2 className="container">Features</h2>
            <div className="container">
                {featuresData.map((feature, index) => (
                    <Card key={index} title={feature.title} body={feature.body} />
                ))}
            </div>
        </section>
    );
};

export default Features;