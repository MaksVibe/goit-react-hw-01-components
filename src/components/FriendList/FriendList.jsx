import PropTypes from "prop-types";

const FriendsList = (props) => {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, id, isOnline, name }) => (
        <li className="item" key={id}>
          <span className="status"></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
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
