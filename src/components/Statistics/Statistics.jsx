import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = (data) => {
  const { title, stats } = data;
  return (
    <section className="Statistics">
      <h3 className="Title">{title}</h3>
      <ul className="Stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="Statistics-Item" key={id}>
            <span className="Label">{label}</span>
            <br />
            <span className="Percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

setTimeout(() => {
  const items = document.querySelectorAll(".Statistics-Item");
  for (const item of items) {
    const color1 = Math.floor(Math.random() * 220) + 1;
    const color2 = Math.floor(Math.random() * 220) + 1;
    const color3 = Math.floor(Math.random() * 220) + 1;
    const color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    item.style.backgroundColor = `${color}`;
  }
}, null);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
