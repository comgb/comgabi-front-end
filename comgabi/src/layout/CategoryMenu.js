import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-5 focus:outline-none z-50 text-base-content"
        >
          {isOpen ? (
            <span className="material-symbols-outlined icon">close</span>
          ) : (
            <span className="material-symbols-outlined icon">menu</span>
          )}
        </button>

        <div
          className={`bg-primary text-primary-content fixed inset-y-0 left-0 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40 w-64`}
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <Link
              to="/notebook"
              className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-primary-content last:border-b-0 transition-colors duration-300 hover:bg-primary-content hover:text-primary"
            >
              노트북
            </Link>
            <Link
              to="/monitor"
              className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-primary-content last:border-b-0 transition-colors duration-300 hover:bg-primary-content hover:text-primary"
            >
              모니터
            </Link>
            <Link
              to="/desktop"
              className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-primary-content last:border-b-0 transition-colors duration-300 hover:bg-primary-content hover:text-primary"
            >
              본체
            </Link>
            <Link
              to="/etc"
              className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-primary-content last:border-b-0 transition-colors duration-300 hover:bg-primary-content hover:text-primary"
            >
              기타
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default CategoryMenu;
