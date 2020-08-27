import React from "react";

const User = (props) => {
  return (
    <li>
      <p>Username: {props.user.username}</p>
      <p>
        Number of Games Played:
        {props.showGamesPlayed ? props.user.numGames : "*"}
      </p>
    </li>
  );
};

export default User;
