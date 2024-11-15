import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
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
        to="/signup/phone"
        className="btn btn-primary mb-4 text-lg p-4 w-96 h-16 place-self-center"
      >
        <button>전화번호로 회원가입</button>
      </Link>
      <Link
        to="/signup/email"
        className="btn btn-primary text-lg p-4 w-96 h-16 place-self-center"
      >
        <button>이메일로 회원가입</button>
      </Link>
    </div>
  );
}

export default SignUpPage;
