import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { li } from "framer-motion/client";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const scrollToAnchor = (anchor) => {
    const element = document.querySelector(`#${anchor}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`$${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={logo} alt="Logo" className="w-9 h-9 object-contain"/> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Aarush &nbsp; <span className="sm:block hidden"> Asthana </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                }hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                scrollToAnchor(link.id);
              }}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    }font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    scrollToAnchor(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;