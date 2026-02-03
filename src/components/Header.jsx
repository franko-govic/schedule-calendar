import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

function Header() {
  const { toggleAuth, setToggleAuth } = useContext(AuthContext);

  return (
    <div className="bg-amber-300 p-4 flex justify-between items-center">
      <p className="text-2xl text-shadow-md text-shadow-black">LOGO</p>

      <Link
        onClick={() => setToggleAuth(!toggleAuth)}
        to={toggleAuth ? "/" : "/auth"}
        className="border px-2 py-1 bg-white shadow-sm shadow-black rounded cursor-pointer"
      >
        {toggleAuth ? "<--" : "Profile"}
      </Link>
    </div>
  );
}

export default Header;
