import { NavLink } from "react-router-dom";

//___ Css ___//
import "./SideNav.css";

//___ Icons ___//
import { MdDashboard, MdEditDocument } from "react-icons/md";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

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
            <NavLink to="/documentation">
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
          <h4 className="menuTitle">Sections</h4>
          <li>
            <NavLink to="/home">
              <FaClipboardList size={18} /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/add-project">
              <FaClipboardList size={18} /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-plot">
              <FaClipboardList size={18} />
              Plots
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery">
              <FaClipboardList size={18} /> Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/honorable-client">
              <FaClipboardList size={18} /> Honorable client
            </NavLink>
          </li>
          <li>
            <NavLink to="/news-and-event">
              <FaClipboardList size={18} /> News and Event
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              <FaClipboardList size={18} /> About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <FaClipboardList size={18} /> Blog
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
