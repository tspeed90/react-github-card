import React from 'react';
import { getUserData } from "../utils/getUserData.js";
import "../../public/style.css";


const Repo = props => {
  return (
    <li className="single-repo">
      <h3 className="repo-names"><a href={props.html_url}>{props.name}</a></h3>
      {props.description && <p>Description: {props.description}</p>}
    </li>
  )
}

export default class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoData: null,
    }
  }
  componentDidMount() {
    const username = "tspeed90";
    getUserData(this.props.url).then(data => this.setState({ repoData: data }));
  }

  render() {
    if (!this.state.repoData) {
      return <h3>...Loading</h3>;
    }
    return (
      <div>
        <h2>Repositories</h2>
        <ul className="repos">
          {this.state.repoData.map(singleRepo => <Repo key={singleRepo.id} {...singleRepo} />)}
        </ul>
      </div>
    )
  }
}