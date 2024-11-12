import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderMenuBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <header className="sticky top-0 z-50 flex items-center justify-between h-14 bg-base-300">
        <div className="w-16"></div>
        <Link to="/">
          {!isMobile ? (
            <img
              src="img/comgabi-logo.png"
              alt="logo-img"
              className="w-32 mr-5"
            />
          ) : (
            <img
              src="img/comgabi-icon.png"
              alt="logo-img"
              className="w-10 ml-auto mr-5"
            />
          )}
        </Link>
        <form
          action="#"
          className="ml-auto justify-center flex-grow flex items-center"
          style={{ width: "50%" }}
        >
          <input
            type="text"
            placeholder="검색어를 입력해 주세요."
            className="p-1 pl-2 text-base"
            style={{
              width: !isMobile ? "90%" : "85%",
              borderBottomLeftRadius: "50px",
              borderTopLeftRadius: "50px",
            }}
          />
          <button
            type="submit"
            className="p-1 bg-primary text-primary-content active:bg-blue-700 cursor-pointer whitespace-nowrap flex items-center justify-center"
            style={{
              width: !isMobile ? "10%" : "15%",
              borderBottomRightRadius: "50px",
              borderTopRightRadius: "50px",
              height: "32px",
              fontSize: "16px",
            }}
          >
            {!isMobile ? (
              "검색"
            ) : (
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                search
              </span>
            )}
          </button>
        </form>
        <div className="ml-5 mr-5 flex items-center">
          <Link to="/shopping-cart" className="flex items-center">
            <span className="material-symbols-outlined text-base-content">
              shopping_cart
            </span>
          </Link>
          <p className="ml-5 text-base-content flex items-center">
            {!isMobile ? (
              <div className="whitespace-nowrap">
                <Link to="/login" className="underline hover:text-gray-900">
                  로그인
                </Link>
                ⎟
                <Link to="/sign-up" className="underline hover:text-gray-900">
                  회원가입
                </Link>
              </div>
            ) : (
              <>
                <span class="material-symbols-outlined" onClick={toggleMenu}>
                  login
                </span>
              </>
            )}
          </p>
        </div>
        <div
          className={`flex flex-col p-4 fixed top-14 right-4 z-50 text-primary-content bg-primary ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          <Link to="/login">로그인</Link>
          <Link to="/sign-up">회원가입</Link>
        </div>
      </header>
    </>
  );
}

export default HeaderMenuBar;
