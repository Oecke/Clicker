let UserList = [
    {

    }
]

const Login = (username, password) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const user = UserList.find(user => user.username === username && user.password === password);
                if (user) {
                    localStorage.setItem('username', username);
                    alert('Login successful!');
                    window.location.reload();
                } else {
                    alert('Invalid username or password');
                }
            }}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => username = e.target.value} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => password = e.target.value} required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

const rootElement = document.querySelector("body");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Login />
)