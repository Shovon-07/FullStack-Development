import { NavLink } from "react-router-dom";

//___ Css ___//
import "./SideNav.css";

//___ Icons ___//
import { MdDashboard, MdEditDocument } from "react-icons/md";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbDeviceRemote } from "react-icons/tb";

const SideNav = (props) => {
  const { toggleVal } = props;

  return (
    <div className={toggleVal == false ? "SideNav" : "SideNav sideNavHide"}>
      <h3 className="logo">admin</h3>
      <ul className="menu">
        <div className="menuSection">
          <li>
            <NavLink to="/">
              <MdDashboard size={20} /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/documentaton">
              <MdEditDocument size={20} /> Documentaton
            </NavLink>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Accessibility</h4>
          <li>
            <NavLink to="/profile">
              <FaUser size={18} /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <IoMdSettings size={20} /> Settings
            </NavLink>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Projects</h4>
          <li>
            <NavLink to="/todo-app">
              <FaClipboardList size={18} /> ToDo App
            </NavLink>
          </li>
          <li>
            <NavLink to="/temperature-remote">
              <TbDeviceRemote size={20} /> Temp Remote
            </NavLink>
          </li>

          <li>
            <NavLink to="/null">
              <FaClipboardList size={18} /> ToDo App
            </NavLink>
          </li>
          <li>
            <NavLink to="/null">
              <TbDeviceRemote size={20} /> Temp Remote
            </NavLink>
          </li>
          <li>
            <NavLink to="/null">
              <FaClipboardList size={18} /> ToDo App
            </NavLink>
          </li>
          <li>
            <NavLink to="/null">
              <TbDeviceRemote size={20} /> Temp Remote
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
