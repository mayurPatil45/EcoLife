import { useState } from 'react';
import "../../public/css/global.css";
import "../../public/css/CarbonFpCalc.css";

const CarbonFpCalc = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [carbonFootprint, setCarbonFootprint] = useState(null);

    const calculateCarbonFootprint = (e) => {
        e.preventDefault();
        const electricity = parseFloat(e.target.electricity.value) || 0;
        const gas = parseFloat(e.target.gas.value) || 0;
        const fuel = parseFloat(e.target.fuel.value) || 0;
        const waste = parseFloat(e.target.waste.value) || 0;
        const water = parseFloat(e.target.water.value) || 0;

        const result =
            electricity * 0.82 +
            gas * 2.75 +
            fuel * 2.35 +
            waste * 0.02 +
            water * 0.001;

        setCarbonFootprint(result.toFixed(2));
        setModalVisible(true);
    };

    const closeModal = () => setModalVisible(false);

    return (
        <div className="carbonFpCalc-container container">
            <div className="right">
                <form className="carbon-form" onSubmit={calculateCarbonFootprint}>
                    <h2>Carbon Footprint Calculator</h2>
                    <iframe width="500" height="500" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no" src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>
                    {/* <div>
                        <label htmlFor="electricity">Electricity Consumption (kWh/month):</label>
                        <input type="number" id="electricity" name="electricity" required />
                    </div>
                    <div>
                        <label htmlFor="gas">Natural Gas Consumption (m3/month):</label>
                        <input type="number" id="gas" name="gas" required />
                    </div>
                    <div>
                        <label htmlFor="fuel">Transportation Fuel Consumption (liters/month):</label>
                        <input type="number" id="fuel" name="fuel" required />
                    </div>
                    <div>
                        <label htmlFor="waste">Waste Generation (kg/month):</label>
                        <input type="number" id="waste" name="waste" required />
                    </div>
                    <div>
                        <label htmlFor="water">Water Consumption (liters/month):</label>
                        <input type="number" id="water" name="water" required />
                    </div>
                    <button type="submit">Calculate</button> */}
                </form>
            </div>

            {modalVisible && (
                <div id="carbonModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Your Carbon Footprint:</h2>
                        <p id="carbonResult">{carbonFootprint} metric tonnes CO2e per year.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarbonFpCalc;
