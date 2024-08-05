import CountUp from 'react-countup';
import { Footprints, Leaf, Medal, WeightIcon } from 'lucide-react';
import "../../public/css/global.css";
import "../../public/css/Stats.css";

const statsData = [
  { icon: <Footprints />, end: 4500, label: 'Footprints calculated' },
  { icon: <Leaf />, end: 4000, label: 'Organisations helped with CO2 reduction' },
  { icon: <WeightIcon />, end: 20, suffix: 'M +', label: 'Tonnes of CO2 offset' },
  { icon: <Medal />, end: 60, suffix: 'M +', label: 'Climate Neutral Certified products sold' }
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-box-inner">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-count">
                <CountUp end={stat.end} duration={2} />{stat.suffix || '+'}
              </div>
            </div>
            <div className="stat-label"><h3>{stat.label}</h3></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
