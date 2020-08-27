import React from "react";

class AddUser extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
    },
    userExists: false,
  };

  checkUserExists = (currUsername) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  allFields = () => {
    return (
      this.state.user.firstName === "" ||
      this.state.user.lastName === "" ||
      this.state.user.username === ""
    );
  };

  submitHandler = (event) => {
    event.preventDefault();
    const userExists = this.checkUserExists(this.state.user.username);
    if (!userExists) {
      this.props.onAddUser(this.state.user);
    } else {
      this.setState(() => ({
        userExists,
      }));
    }
  };

  render() {
    const { firstName, lastName, username } = this.state.user;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.handleChange}
            name="firstName"
            type="text"
            value={firstName}
            placeholder="Enter First Name"
          />
          <input
            onChange={this.handleChange}
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Enter Last Name"
          />
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            value={username}
            placeholder="Enter Username"
          />
          <button disabled={this.allFields()}>Add User</button>
        </form>
        <div>
          <ol>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{username}</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default AddUser;
