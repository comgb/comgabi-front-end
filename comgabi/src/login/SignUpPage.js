import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 flex-col">
        <h1 className="font-bold text-3xl text-white mb-4">
          현재 서비스 준비 중입니다.
        </h1>
        <Link to="/" className="text-white font underline">
          메인으로 돌아가기
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 my-6 self-center">
          <Link to="/">
            <img
              className="w-32 place-self-center"
              src="img/comgabi-logo.png"
              alt="logo-img"
            />
          </Link>
          <div className="text-3xl font-bold w-64">회원가입</div>
        </div>
        <Link
          to="/sign_up/phone"
          className="btn btn-primary mb-4 text-lg p-4 w-96 h-16 place-self-center"
        >
          <button>전화번호로 회원가입</button>
        </Link>
        <Link
          to="/sign_up/email"
          className="btn btn-primary text-lg p-4 w-96 h-16 place-self-center"
        >
          <button>이메일로 회원가입</button>
        </Link>
      </div>
    </>
  );
}

export default SignUpPage;
