import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/users">Users</Link>
    </>
  )
}