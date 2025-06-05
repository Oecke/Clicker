class App extends React.Component {
  constructor(props) {
    super(props);
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    this.state = {
      users: savedUsers,
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, users } = this.state;

    if (password !== confirmPassword) {
      this.setState({ errorMessage: 'Passwords do not match' });
      return;
    }

    if (users.some(user => user.username === username)) {
      this.setState({ errorMessage: 'Username already exists' });
      return;
    }

    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    this.setState({
      users: updatedUsers,
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    });
  };

  render() {
    const { username, password, confirmPassword, errorMessage, users } = this.state;

    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Add User</button>
        </form>
        <h2>Users List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('body')
);