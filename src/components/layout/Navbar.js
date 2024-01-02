import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/"> Adotar </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Login"> Entrar </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Register"> Registrar </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
