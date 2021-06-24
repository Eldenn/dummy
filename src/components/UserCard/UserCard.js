import PropTypes from "prop-types";

import "./UserCard.css";

function UsersList({ user, handleUpdateFav }) {
  return (
    <div
      className="card"
      onClick={() => handleUpdateFav(user.id)}
      style={{
        backgroundColor: user.fav ? "#65e6e1" : null,
      }}
    >
      <img className="avatar" src={user.picture} alt={user.username} />

      <div className="card-body">
        <div className="card-title">
          <h3>{user.username}</h3>
        </div>
      </div>
    </div>
  );
}

UsersList.propTypes = {
  user: PropTypes.object,
  handleUpdateFav: PropTypes.func,
};

export default UsersList;
