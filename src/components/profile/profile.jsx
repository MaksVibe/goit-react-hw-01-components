import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className="Profile">
      <div className="Description">
        <img src={avatar} alt={username} className="Avatar"></img>
        <p className="Name">{username}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>
      <ul className="Statistics-list">
        <li className="Stat-item">
          <span className="Label">Followers</span>
          <br />
          <span className="Quantity">{followers}</span>
        </li>
        <li className="Stat-item">
          <span className="Label">Views</span>
          <br />
          <span className="Quantity">{views}</span>
        </li>
        <li className="Stat-item">
          <span className="Label">Likes</span>
          <br />
          <span className="Quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
