import Card from "../components/Card";
import Showcase from "../components/ShowCase";
import "../../public/css/global.css";
import "../../public/css/About.css";

const AboutPage = () => {
  return (
    <>
      <Showcase
        heading="About EcoLife"
        text="Our mission is to help you live a more environmentally friendly lifestyle by providing tips, tools, and resources to reduce your carbon footprint and create a more sustainable world. Here, you will find information on how to conserve water and energy, reduce waste, and make smart, sustainable choices."
        showExtra={false}
      />
      <section className="page-content">
        <div className="container">
          <div className="about align">
            <h2>About EcoLife</h2>
            <p>
              EcoLife is a website dedicated to promoting a sustainable and
              eco-friendly lifestyle. At EcoLife, we believe that small actions can
              have a big impact on our planet, and we strive to provide practical
              tips and advice to help individuals make more environmentally
              conscious choices.
            </p>
          </div>

          <div className="team align">
            <h2>Our Team</h2>
            <p>
              EcoLife is designed by
              <b> Mayur Patil</b> 
              <br />to spread awareness and educate people about sustainable living.
            </p>
          </div>

          <div className="align" >
            <Card 
              title="EcoLife makes you live sustainably."
              body="Our content covers a range of topics, from reducing waste and conserving energy to sustainable fashion and ethical travel. We also feature interviews with experts in various fields related to sustainability, and we strive to stay up-to-date on the latest research and developments in the field."
            />
          </div>

          <div className="social align">
            <h3>Join our Community</h3>
            <p>
              Join us in the EcoLife Discord to share with and get help from an
              active, friendly community!
            </p>

            <ul>
              <li>💬 Say hi in our #introduce-yourself channel!</li>
              <li>💬 Ask our Support Squad a question in our #support-threads channel!</li>
              <li>💬 Share your blogs, new ideas in our #showcase channel!</li>
            </ul>
          </div>
        </div>
      </section>
      </>
  );
};

export default AboutPage;
