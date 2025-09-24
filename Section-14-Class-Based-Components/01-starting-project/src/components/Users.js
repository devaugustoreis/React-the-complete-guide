import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// CLASS COMPONENT
class Users extends Component {
  constructor() {
    super()
    this.state = {
      showUsers: true,
      // moreState: "Test",
      // nested: {},
      // data: []
    };
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT how to update it.
    // this.setState({showUsers: false}) // This will NOT overwrite state, but will merge to it instead.
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// FUNCTIONAL COMPONENT
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
