import plantImg from "../../public/images/plant.png";
import recycleImg from "../../public/images/recycle.png";
import susenergyImg from "../../public/images/sus-energy.png";
import waterImg from "../../public/images/water.png";
import windTurbineImg from "../../public/images/wind-turbine.png";
import "../../public/css/global.css";
import "../../public/css/ImageBar.css";

function ImageBar() {
    return (
        <div className="imagebar-container container">
            <a href="https://www.bhg.com/gardening/yard/lawn-care/10-tips-for-sustainable-gardening/">
                <img src={plantImg} alt="plant" className="imgbar-img" />
            </a>
            <a href="https://www.conservation.org/act/sustainable-living-tips">
                <img src={recycleImg} alt="recycle" className="imgbar-img" />
            </a>
            <a href="https://www.biologicaldiversity.org/programs/population_and_sustainability/sustainability/live_more_sustainably.html">
                <img src={susenergyImg} alt="sustainable energy" className="imgbar-img" />
            </a>
            <a href="https://www.culligannation.com/10-ways-to-conserve-water-sustainable-living">
                <img src={waterImg} alt="water conservation" className="imgbar-img" />
            </a>
            <a href="https://www.energy.gov/eere/wind/advantages-and-challenges-wind-energy">
                <img src={windTurbineImg} alt="wind turbine" className="imgbar-img" />
            </a>
        </div>
    );
}

export default ImageBar;
