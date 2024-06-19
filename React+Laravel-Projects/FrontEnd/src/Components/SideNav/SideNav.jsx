//___ Css ___//
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="SideNav">
      <h3 className="logo">admin</h3>
      <ul className="menu">
        <div className="menuSection">
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Documentaton</a>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Accessibility</h4>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Projects</h4>
          <li>
            <a href="">ToDo App</a>
          </li>
          <li>
            <a href="">Temp Remote</a>
          </li>

          <li>
            <a href="">ToDo App</a>
          </li>
          <li>
            <a href="">Temp Remote</a>
          </li>
          <li>
            <a href="">ToDo App</a>
          </li>
          <li>
            <a href="">Temp Remote</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
