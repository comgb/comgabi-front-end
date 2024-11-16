import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showToast, setShowToast] = useState(false);

  const handleFindId = () => {
    setShowToast(true);
  };

  return (
    <div className="flex flex-col">
      <Link to="/">
        <img
          className="w-64 m-10 place-self-center"
          src="img/comgabi-logo.png"
          alt="logo-img"
        />
      </Link>
      <label className="input input-bordered flex items-center gap-2 mb-4 w-96 place-self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-4 w-96 place-self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow" placeholder="password" />
      </label>
      <button className="btn btn-primary p-4 w-96 place-self-center">
        로그인
      </button>
      <div className="flex self-center">
        <div
          className="text-gray-400 mt-4 border-r border-gray-400 px-2 cursor-pointer"
          onClick={handleFindId}
        >
          아이디 찾기
        </div>
        <div
          className="text-gray-400 mt-4 border-r border-gray-400 px-2 cursor-pointer"
          onClick={handleFindId}
        >
          비밀번호 찾기
        </div>
        <Link to="/signUp" className="text-gray-400 mt-4 px-2">
          회원가입
        </Link>
      </div>
      <div class="flex self-center items-center my-4 w-96">
        <div class="flex-grow border-t border-gray-300" />
        <span class="mx-4 text-gray-500">or</span>
        <hr class="flex-grow border-t border-gray-300" />
      </div>
      <div className="flex gap-4 w-56 self-center">
        <img
          className="aspect-square w-16"
          src="img/web_neutral_rd_na@3x.png"
          alt="google"
        />
        <img
          className="aspect-square w-16"
          src="img/btnG_아이콘원형.png"
          alt="naver"
        />
        <img className="aspect-square w-16" src="img/i_kakao.png" alt="naver" />
      </div>

      {showToast && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[600px] p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">전화번호로 찾기</h3>
              <button
                onClick={() => setShowToast(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <span>전화번호</span>
                <div className="flex justify-s gap-1 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                  <button className="w-32 btn btn-primary px-3 py-1 rounded text-sm">
                    인증번호 발송
                  </button>
                </div>
                <span>인증번호</span>
                <div className="flex justify-s gap-1 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                  <button className="btn w-32 btn-primary px-3 py-1 rounded text-sm">
                    인증
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>이메일로 찾기</span>
                </div>
                <span>이메일</span>
                <div className="flex justify-s gap-1 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                  <button className="w-32 btn btn-primary px-3 py-1 rounded text-sm">
                    인증번호 발송
                  </button>
                </div>
                <span>인증번호</span>
                <div className="flex justify-s gap-1 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                  <button className="btn w-32 btn-primary px-3 py-1 rounded text-sm">
                    인증
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
