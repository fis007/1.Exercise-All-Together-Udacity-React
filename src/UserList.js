import React from "react";
import User from "./User";

class UserList extends React.Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState((prevState) => ({
      showGamesPlayed: !prevState.showGamesPlayed,
    }));
  };

  render() {
    const { showGamesPlayed } = this.state;
    const { users } = this.props;

    const gamesPlayedButton = (
      <div>
        <button onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? "Hide " : " Show "}
          the Number of Games Played
        </button>
      </div>
    );
    return (
      <div>
        <h1>Users</h1>
        {users && users.length > 0 ? gamesPlayedButton : ""}
        <ol>
          {users.map((user) => (
            <User
              key={user.username}
              user={user}
              showGamesPlayed={showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default UserList;
