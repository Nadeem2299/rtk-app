import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const productState = useSelector((state) => {
    return state.products;
  });
  console.log(productState.cartItems);
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
        <li>
          <Link to='/cart'><button className="btn btn-danger">Cart({productState.cartItems.length})</button></Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
