import React, { useState } from 'react';

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

                <div className={`bg-gray-300 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 w-64`}>
                    <nav className="flex flex-col items-center justify-center h-full">
                        <ul className="space-y-5 text-lg font-bold">
                            <li><a href="#" className="text-black">노트북</a></li>
                            <li><a href="#" className="text-black">모니터</a></li>
                            <li><a href="#" className="text-black">본체</a></li>
                            <li><a href="#" className="text-black">기타</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default CategoryMenu;
