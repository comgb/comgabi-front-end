import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    className="fixed top-4 left-5 focus:outline-none z-50"
                >
                    <span className="material-symbols-outlined icon">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>

                <div className={`bg-blue-500 text-white fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 w-64`}>
                    <nav className="flex flex-col items-center justify-center h-full">
                        <Link to="/notebook" className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-white last:border-b-0 transition-colors duration-300 hover:bg-white hover:text-blue-500">
                            노트북
                        </Link>
                        <Link to="/monitor" className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-white last:border-b-0 transition-colors duration-300 hover:bg-white hover:text-blue-500">
                            모니터
                        </Link>
                        <Link to="/desktop" className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-white last:border-b-0 transition-colors duration-300 hover:bg-white hover:text-blue-500">
                            본체
                        </Link>
                        <Link to="/etc" className="w-48 text-center font-bold text-xl px-16 py-4 border-b border-white last:border-b-0 transition-colors duration-300 hover:bg-white hover:text-blue-500">
                            기타
                        </Link>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default CategoryMenu;
