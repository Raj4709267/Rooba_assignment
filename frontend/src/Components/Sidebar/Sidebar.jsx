import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  HiHome,
  HiFire,
  HiUserGroup,
  HiBookmark,
  HiDocumentText,
} from "react-icons/hi2";
import {
  IoSearch,
  IoSettingsSharp,
  IoHelpCircle,
  IoLogOut,
} from "react-icons/io5";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  const pageMenus = [
    {
      name: "Overview",
      path: "/",
      icon: <HiHome />,
    },
    {
      name: "Opportunities",
      path: "/opportunities",
      icon: <HiFire />,
    },
    {
      name: "My competitors",
      path: "/mycompetitors",
      icon: <HiUserGroup />,
    },
    {
      name: "Briefs",
      path: "/briefs",
      icon: <HiDocumentText />,
    },
    {
      name: "Saved",
      path: "/saved",
      icon: <HiBookmark />,
    },
  ];

  const optionsMenus = [
    {
      name: "Setting",
      path: "/setting",
      icon: <IoSettingsSharp />,
    },
    {
      name: "Help",
      path: "/help",
      icon: <IoHelpCircle />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <IoLogOut />,
    },
  ];

  return (
    <div className="sidebar-container">
      <div>
        <div className="sidebar-search-container">
          <div>
            <IoSearch />
          </div>
          <p>Concured</p>
        </div>

        <div className="sidebar-menus-container">
          {pageMenus?.map((item) => {
            return (
              <Link
                className={`sidebar-link-container ${
                  selectedMenu === item.name ? "sidebar-link-selected" : ""
                }`}
                to={item.path}
                onClick={() => {
                  setSelectedMenu(item.name);
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sidebar-menus-container" style={{ marginTop: "60px" }}>
        {optionsMenus?.map((item) => {
          return (
            <Link
              className={`sidebar-link-container ${
                selectedMenu === item.name ? "sidebar-link-selected" : ""
              }`}
              to={item.path}
              onClick={() => {
                setSelectedMenu(item.name);
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
