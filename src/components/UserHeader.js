import React from 'react';
import { getUserData } from '../utils/getUserData.js';
import '../../public/style.css';
import RepoList from "./repoList";

export default class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    }
  }

  componentDidMount() {
    const username = "tspeed90";
    getUserData(`https://api.github.com/users/${username}`).then(data => this.setState({ userData: data }));
  }

  render() {
    if (!this.state.userData) {
      return <h3>...Loading</h3>;
    }
    const { avatar_url, html_url, login, followers, repos_url } = this.state.userData;
    return (
      <header className="user-header">
        <div className="user">
          <img src={avatar_url} alt={"profile photo of user " + login} />
          <div className="user-details">
            <h1>User: {login}</h1>
            <p className="followers">Followers: {followers}</p>
          </div>
        </div>
        {repos_url ? <RepoList url={repos_url} /> : null}
      </header>
    )
  }
}