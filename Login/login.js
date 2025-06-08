const App = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('login_username', username);
    localStorage.setItem('login_password', password);
    setUsername('');
    setPassword('');
    alert('Login data saved!');
  };

  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <App />, 
  document.querySelector('body')
);