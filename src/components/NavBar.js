import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const activeLink = (isActive) => {
    return isActive ? "active" : "blue";
  }
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => activeLink(isActive)}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => activeLink(isActive)}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
