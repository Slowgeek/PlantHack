import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const userlogged = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();

  const NavOption = () => {
    if (userlogged) {
      return (
        <div className={` mr-0`}>
          <Link
            to="/profile"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Profile
          </Link>
          <Link
            to="/forum"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Forum
          </Link>
          <Link
            to="/leader"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Leaderboard
          </Link>
          <Link
            to="/store"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Mini Store
          </Link>
          <button
            className=" bg-pink-300 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 border  rounded`}
            "
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            LogOut
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Link
            to="/login"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Login
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
            className=" bg-pink-300 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 border  rounded`}
            "
          >
            Signup
          </button>
        </>
      );
    }
  };
  useEffect(() => {}, [userlogged]);

  return (
    <header className="bg-gray-800 text-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="ml-3 text-xl title-font font-medium text-red mb-4 md:mb-0"
          to={"/"}
        >
          <Link to={"/"}>
            <h1 className="text-2xl"> 🌳Plant Hack</h1>
          </Link>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"></nav>

        <div className={` mr-0`}>
          <NavOption />
          {/* <Link
            to="#"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Forum
          </Link>
          <Link
            to="#"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Leaderboard
          </Link>
          <Link
            to="#"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Login
          </Link>
          <button
            className=" bg-pink-300 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 border  rounded`}
            "
          >
            Signup
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
