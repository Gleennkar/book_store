import { Link } from 'react-router-dom';

const Navbar = () => { //eslint-disable-line
  return (
    <div className="navBar">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="navItems">
        <li className="navItem"><Link to="/">Book</Link></li>
        <li className="navItem"><Link to="/calculate">Categories</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
