import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-end py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/counter" className="nav-link">
            Counter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/users" className="nav-link">
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
