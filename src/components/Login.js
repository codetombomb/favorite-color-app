import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function handleSubmit() {
    // Authenticate user
    navigate("/home");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" placeholder="Enter Username"></input>
      <input type="password" placeholder="Enter password"></input>
      <input type="submit"></input>
    </form>
  );
}
export default Login;
