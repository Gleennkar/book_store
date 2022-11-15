import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container-fluid d-flex mt-2 w-90 navBar">
    <h1 className="logo color-primary">Bookstore CMS</h1>
    <ul className="d-flex nav-items">
      <li className="nav-item"><Link to="/">Books</Link></li>
      <li className="nav-item"><Link to="/categories">Categories</Link></li>
    </ul>
  </div>
);

export default Navbar;
