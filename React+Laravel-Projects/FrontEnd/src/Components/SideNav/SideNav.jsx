//___ Css ___//
import "./SideNav.css";

//___ Icons ___//
import { MdDashboard, MdEditDocument } from "react-icons/md";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbDeviceRemote } from "react-icons/tb";

const SideNav = () => {
  return (
    <div className="SideNav">
      <h3 className="logo">admin</h3>
      <ul className="menu">
        <div className="menuSection">
          <li>
            <a href="">
              <MdDashboard size={20} /> Dashboard
            </a>
          </li>
          <li>
            <a href="">
              <MdEditDocument size={20} /> Documentaton
            </a>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Accessibility</h4>
          <li>
            <a href="">
              <FaUser size={18} /> Profile
            </a>
          </li>
          <li>
            <a href="">
              <IoMdSettings size={20} /> Settings
            </a>
          </li>
        </div>

        <div className="menuSection">
          <h4 className="menuTitle">Projects</h4>
          <li>
            <a href="">
              <FaClipboardList size={18} /> ToDo App
            </a>
          </li>
          <li>
            <a href="">
              <TbDeviceRemote size={20} /> Temp Remote
            </a>
          </li>

          <li>
            <a href="">
              <FaClipboardList size={18} /> ToDo App
            </a>
          </li>
          <li>
            <a href="">
              <TbDeviceRemote size={20} /> Temp Remote
            </a>
          </li>
          <li>
            <a href="">
              <FaClipboardList size={18} /> ToDo App
            </a>
          </li>
          <li>
            <a href="">
              <TbDeviceRemote size={20} /> Temp Remote
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
