import { NavLink } from "react-router-dom";

//___ Css ___//
import "./SideNav.css";

//___ Icons ___//
import { MdDashboard, MdEditDocument, MdOutlineEmail } from "react-icons/md";
import { FaUser, FaClipboardList } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";

const SideNav = (props) => {
  const { toggleVal, setToggleVal } = props;

  const closeSideNav = () => {
    setToggleVal((prev) => !prev);
  };

  return (
    <div className={toggleVal == false ? "SideNav" : "SideNav sideNavShow"}>
      <h3 className="logo">admin</h3>
      <ul className="menu">
        <div className="menuSection">
          <li>
            <NavLink to="/">
              <MdDashboard size={20} /> Dashboard
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/documentation">
              <MdEditDocument size={20} /> Documentaton
            </NavLink>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Accessibility</h4>
          <li onClick={closeSideNav}>
            <NavLink to="/profile">
              <FaUser size={18} /> Profile
            </NavLink>
          </li>
          {/* <li onClick={closeSideNav}>
            <NavLink to="/settings">
              <IoMdSettings size={20} /> Settings
            </NavLink>
          </li> */}
          <li onClick={closeSideNav}>
            <NavLink to="/emails">
              <MdOutlineEmail size={20} /> Emails
            </NavLink>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Sections</h4>
          <li onClick={closeSideNav}>
            <NavLink to="/home">
              <FaClipboardList size={18} /> Home
            </NavLink>
          </li>

          <li onClick={closeSideNav}>
            <NavLink to="/add-project">
              <FaClipboardList size={18} /> Projects
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/add-plot">
              <FaClipboardList size={18} />
              Plots
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/gallery">
              <FaClipboardList size={18} /> Gallery
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/honorable-client">
              <FaClipboardList size={18} /> Honorable client
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/news-and-event">
              <FaClipboardList size={18} /> News and Event
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/blog">
              <FaClipboardList size={18} /> Blog
            </NavLink>
          </li>
          <li onClick={closeSideNav}>
            <NavLink to="/about-us">
              <FaClipboardList size={18} /> About us
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
