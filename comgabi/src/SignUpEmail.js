import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignUpEmail() {
  const [formData, setFormData] = useState({
    companyName: "",
    userId: "",
    idConfirmed: false,
    emailNumber: "",
    emailConfirmed: false,
    password: "",
    passwordConfirm: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
  });

  // 폼 입력값 처리
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 비밀번호 일치 여부 확인
  const checkPasswordMatch = () => {
    if (formData.password !== formData.passwordConfirm) {
      setErrors((prev) => ({ ...prev, passwordMismatch: true }));
    } else {
      setErrors((prev) => ({ ...prev, passwordMismatch: false }));
    }
  };

  // 회원가입 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("약관에 동의해야 회원가입이 가능합니다.");
      return;
    }
    if (errors.passwordMismatch) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // 회원가입 로직 구현
    alert("회원가입이 완료되었습니다.");
  };

  // 비밀번호 확인 onChange 이벤트 및 onBlur 처리
  useEffect(() => {
    checkPasswordMatch();
  }, [formData.password, formData.passwordConfirm]);

  // 입력값이 모두 채워졌는지 확인하는 함수
  const isFormValid = () => {
    return (
      formData.companyName &&
      formData.userId &&
      formData.emailNumber &&
      formData.password &&
      formData.passwordConfirm &&
      formData.agreement &&
      !errors.passwordMismatch
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Link to="/">
        <img className="w-64 m-8" src="/img/comgabi-logo.png" alt="logo-img" />
      </Link>
      <form onSubmit={handleSubmit} className="w-96">
        {/* 회사 이름 입력 */}
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

        {/* 아이디 입력 */}
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
            <button type="button" className="btn btn-primary">
              아이디 중복 확인
            </button>
          </div>
        </div>

        {/* 전화번호 입력 */}
        <div className="form-control mb-4">
          <div className="flex gap-2">
            <input
              type="email"
              name="emailNumber"
              placeholder="이메일"
              className="input input-bordered flex-1"
              value={formData.emailNumber}
              onChange={handleInputChange}
            />
            <button type="button" className="btn btn-primary">
              이메일 확인
            </button>
          </div>
        </div>

        {/* 비밀번호 입력 */}
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

        {/* 비밀번호 확인 입력 */}
        <div className="form-control mb-4">
          <input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            className="input input-bordered"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
          />
          {errors.passwordMismatch && (
            <p className="text-red-500 text-sm">
              비밀번호가 일치하지 않습니다.
            </p>
          )}
        </div>

        {/* 약관 동의 체크박스 */}
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

        {/* 회원가입 버튼 */}
        <div className="form-control mb-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid()}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpEmail;
