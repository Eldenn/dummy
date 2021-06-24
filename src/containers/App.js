import { useState } from "react";
import { PropTypes } from "prop-types";
import { UsersList, SearchBar } from "../components";

import "./App.css";

function App({ data }) {
  const [state, setState] = useState({
    text: "",
    users: data,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      text: e.target.value,
    });
  };

  const handleReset = () => {
    setState({
      ...state,
      text: "",
    });
  };

  const handleUpdateFav = (userId) => {
    //Je peux faire user.id - 1 pour trouver l'utilisateur dans le tableau, mais je choisis d'utiliser les méthodes d'itération de Javascript
    const users = [...state.users];
    const user = state.users.find((user) => user.id === userId);
    const index = state.users.findIndex((user) => user.id === userId);
    user.fav = !user.fav;
    users[index] = user;

    console.log(users);

    setState({
      ...state,
      users,
    });
  };

  return (
    <div className="app">
      <SearchBar
        parentState={state}
        handleChange={handleChange}
        handleReset={handleReset}
      />
      <UsersList parentState={state} handleUpdateFav={handleUpdateFav} />
    </div>
  );
}

App.propTypes = {
  data: PropTypes.array,
};

export default App;
