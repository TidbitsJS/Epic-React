import React, { Component } from "react";
import UserList from "./components/user-list/user-list.component";
import UserProfile from "./components/user-profile/user-profile.component";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
        <UserProfile
          name="Yihua"
          email="yihuazhang@gmail.com"
          dataSource="https://jsonplaceholder.typicode.com/posts"
        />
      </div>
    );
  }
}

export default App;
