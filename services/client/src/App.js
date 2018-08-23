import React, { Component } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
      .then(res => {
        this.setState({ users: res.data.data.users });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addUser = event => {
    event.preventDefault();
    console.log("sanity check!");
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              {" "}
              {/* new */}
              <br />
              <h1 className="title is-1">All Users</h1>
              <hr />
              <br />
              <AddUser addUser={this.addUser} />
              <br />
              <br /> {/* new */}
              <UsersList users={this.state.users} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
