import { useNavigate, Link, Outlet } from "react-router-dom"
export const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  }
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
      <Link to="welcome">
        Ir a welcome
      </Link> <br />
      <Link to="goodbye">
        Ir a goodbye
      </Link> <br />
      <button onClick={logout}>
        Logout
      </button>
    </>
  )
}