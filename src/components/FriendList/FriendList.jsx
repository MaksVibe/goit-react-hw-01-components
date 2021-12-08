import PropTypes from "prop-types";
import "./FriendList.css";

const FriendsList = (props) => {
  const { friends } = props;
  checkStatus();
  return (
    <ul className="Friend-list">
      {friends.map(({ avatar, id, isOnline, name }) => (
        <li className="Friend" key={id}>
          <span className="Status" data-online={isOnline}></span>
          <img className="Avatar" src={avatar} alt={name} width="48" />
          <p className="Name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

const checkStatus = () => {
  setTimeout(() => {
    const statuses = document.querySelectorAll("[data-online]");
    for (const item of statuses) {
      if (item.dataset.online === "true") {
        item.style.backgroundColor = "green";
      } else {
        item.style.backgroundColor = "red";
      }
    }
  }, null);
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
