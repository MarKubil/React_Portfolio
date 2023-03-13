import { NavLink } from 'react-router-dom';


function NavTabs() {

  return (
    <nav size="col-2">
    <ul className="d-block nav nav-pills nav-fill bg-transparent justify-content-center" style={{fontFamily: "'Fredoka One', cursive", fontSize: "2.5rem"}}>
      <li className="nav-item ptb-2">
        <NavLink
          to="/"
          end
          className={( { isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
        &lt;About&gt;
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          &lt;Projects&gt;
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          &lt;Contacts&gt;
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Learn
        </NavLink>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
