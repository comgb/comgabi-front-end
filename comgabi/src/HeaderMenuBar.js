import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function HeaderMenuBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaChange = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleMediaChange);
        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

    return (
        <>
            <header className='flex items-center justify-center h-14 bg-gray-300'>
                {/* <Link to="/main"> */}
                <img
                    src="img/comgabi-logo.png"
                    alt="logo-img"
                    className='h-8'
                />
                {/* </Link> */}
                <form action="#" className='ml-5 justify-center ' style={{ width: '40%' }}>
                    <input
                        type="text"
                        placeholder="  검색어를 입력해 주세요."
                        className='p-1 text-base'
                        style={{ width: '90%', borderBottomLeftRadius: '50px', borderTopLeftRadius: '50px' }}
                    />
                    <button
                        type="submit"
                        className='p-1 bg-blue-500 text-white active:bg-blue-700 cursor-pointer whitespace-nowrap'
                        style={{ width: '10%', borderBottomRightRadius: '50px', borderTopRightRadius: '50px', height: '32px', fontSize: '16px' }}
                    >{!isMobile ? "검색" : <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>search</span>}</button>
                </form>
            </header>
        </>
    )
}

export default HeaderMenuBar;