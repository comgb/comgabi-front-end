import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpPhone() {
  const [formData, setFormData] = useState({
    companyName: "",
    userId: "",
    idConfirmed: false,
    phoneNumber: "",
    phoneConfirmed: false,
    password: "",
    passwordConfirm: "",
    agreement: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 구현
  };

  return (
    <div className="flex flex-col items-center">
      <Link to="/">
        <img className="w-64 m-8" src="/img/comgabi-logo.png" alt="logo-img" />
      </Link>
      <form onSubmit={handleSubmit} className="w-96">
        <div className="form-control mb-4">
          <input
            type="text"
            name="companyName"
            placeholder="이름"
            className="input input-bordered"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="userId"
              placeholder="아이디"
              className="input input-bordered flex-1"
              value={formData.userId}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary">아이디 중복 확인</button>
          </div>
        </div>

        <div className="form-control mb-4">
          <div className="flex gap-2">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="전화번호"
              className="input input-bordered flex-1"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary">전화번호 확인</button>
          </div>
        </div>

        <div className="form-control mb-4">
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="input input-bordered"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control mb-4">
          <input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            className="input input-bordered"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label cursor-pointer">
            <span className="label-text">약관 동의</span>
            <input
              type="checkbox"
              name="agreement"
              className="checkbox"
              checked={formData.agreement}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="form-control mb-4">
          <button type="submit" className="btn btn-primary">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPhone;
