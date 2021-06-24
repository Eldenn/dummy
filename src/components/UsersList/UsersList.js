import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import UserCard from "../UserCard/UserCard";
import Spinner from "../Spinner/Spinner";
import "./UsersList.css";

function UsersList({ parentState, handleUpdateFav }) {
  const [show, setShow] = useState(false);
  const usersFilter = parentState.text
    ? parentState.users.filter((user) =>
        user.username.match(new RegExp(parentState.text))
      )
    : parentState.users;

  const usersFilterNoFav = usersFilter.filter((user) => !user.fav);
  const usersFilterFav = usersFilter.filter((user) => user.fav);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  return (
    <>
      {show ? (
        <div className="wrapper">
          {usersFilterFav.map((user) => (
            <UserCard user={user} handleUpdateFav={handleUpdateFav} />
          ))}
          {usersFilterNoFav.map((user) => (
            <UserCard user={user} handleUpdateFav={handleUpdateFav} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

UsersList.propTypes = {
  parentState: PropTypes.object,
  handleUpdateFav: PropTypes.func,
};

export default UsersList;
