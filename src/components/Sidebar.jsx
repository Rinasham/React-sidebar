import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import {
  BiHomeAlt,
  BiUser,
  BiMedal,
  BiLogInCircle,
  BiLogOutCircle
} from "react-icons/bi";

export const Sidebar = () => {
  return (
    <Menu>
      <p className="memu-title">Menu</p>
      <a className="menu-item" href="/">
        <BiHomeAlt />
        Home
      </a>
      <a className="menu-item" href="/user">
        <BiUser />
        User
      </a>
      <a className="menu-item" href="/result">
        <BiMedal />
        Result
      </a>
      <a className="menu-item" href="/login">
        <BiLogInCircle />
        Log in
      </a>
      <a className="menu-item logout" href="/logout">
        <BiLogOutCircle />
        Log out
      </a>
    </Menu>
  );
};
