import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/belcorp.png";
import avatar from "../assets/avatar.png";
import home from "../assets/home.svg";
import pedidos from "../assets/shopping-cart.svg";
import ico from "../assets/ico.svg";

const Header = () => {
  const header = useRef();
  const modal = useRef();

  const showMenu = () => {
    console.log("open");
    header.current.classList.add("header--menu");
    header.current.classList.add("right-50");
    modal.current.classList.add("modal--show");
  };

  const hideMenu = () => {
    console.log("close");
    header.current.classList.remove("header--menu");
    header.current.classList.remove("right-50");
    modal.current.classList.remove("modal--show");
  };

  return (
    <header className="sidebar" ref={header}>
      <nav className="nav">
        <div className="container f-elements f-elements--header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <br />

          <div className="admin-user">
            <img className="avatar" src={avatar} alt="" />
            <h5>Mónica Fernández</h5>
          </div>

          <div className="modal modal--header" ref={modal} onClick={hideMenu}>
            <ul
              className="list list--header f-elements--responsive f-elements--center gap-md"
              onClick={(e) => e.stopPropagation()}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "list__link list__link--active" : "list__link"
                  }
                  onClick={hideMenu}
                >
                  <img src={home} alt="" /> Inicio
                </NavLink>
              </li>
              <li className="icon icon-close" onClick={hideMenu}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "list__link list__link--active" : "list__link"
                  }
                  onClick={hideMenu}
                >
                  <img src={pedidos} alt="" /> Mis pedidos
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="bagde">
            <img src={ico} alt="" /> Chatea con BelAi
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
