import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            TODO
          </span>
        </a>
        <div class="flex items-center md:order-2">
          {user ? (
            <span class="mr-3">Hi, {user?.username}</span>
          ) : (
            <span class="mr-3"></span>
          )}

          <button
            type="button"
            class="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img
              alt="profile"
              src="/profile.png"
              className="profileImage"
            />
          </button>
          <div
            class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown"
          >
            <div class="py-3 px-4">
              <span class="block text-sm text-gray-900 dark:text-white">
                {user?.firstname} {user?.lastname}
              </span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                {user?.email}
              </span>
            </div>
            <ul class="py-1" aria-labelledby="dropdown">
              <li>
                {user ? (
                  <span
                    onClick={logout}
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white pointer"
                  >
                    Logout
                  </span>
                ) : (
                  <Link
                    to="/login"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Login/Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
