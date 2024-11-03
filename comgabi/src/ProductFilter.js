// Filter.js
import React, { useState } from "react";
import "./ProductFilter.css";
import { Range } from "react-range";

function ProductFilter() {
  const [filters, setFilters] = useState({
    제조사별: [],
    화면크기대: [],
    CPU종류: [],
    램용량: [],
    운영체제: [],
    무게: [],
    가격대: [0, 5000],
  });

  const handleCheckboxChange = (category, option) => {
    setFilters((prevFilters) => {
      const selectedOptions = prevFilters[category];
      const isSelected = selectedOptions.includes(option);

      return {
        ...prevFilters,
        [category]: isSelected
          ? selectedOptions.filter((item) => item !== option)
          : [...selectedOptions, option],
      };
    });
  };

  const handlePriceChange = (values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      가격대: values,
    }));
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <h4>제조사별</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("제조사별", "MSI")}
            />{" "}
            MSI
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("제조사별", "ASUS")}
            />{" "}
            ASUS
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("제조사별", "레노버")}
            />{" "}
            레노버
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("제조사별", "에이서")}
            />{" "}
            에이서
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("제조사별", "HP")}
            />{" "}
            HP
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>화면 크기대</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("화면크기대", "18인치 이상")}
            />{" "}
            18인치 이상
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("화면크기대", "17인치대")}
            />{" "}
            17인치대
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("화면크기대", "16인치대")}
            />{" "}
            16인치대
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("화면크기대", "15인치대")}
            />{" "}
            15인치대
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("화면크기대", "14인치대")}
            />{" "}
            14인치대
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>CPU 종류</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("CPU종류", "라이젠 9 HX")}
            />{" "}
            라이젠 9 HX
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("CPU종류", "코어 울트라7")}
            />{" "}
            코어 울트라7
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("CPU종류", "코어9-14세대")}
            />{" "}
            코어9-14세대
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("CPU종류", "코어7-14세대")}
            />{" "}
            코어7-14세대
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>램 용량</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("램용량", "128GB")}
            />{" "}
            128GB
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("램용량", "64GB")}
            />{" "}
            64GB
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("램용량", "32GB")}
            />{" "}
            32GB
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("램용량", "16GB")}
            />{" "}
            16GB
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>운영체제(OS)</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheckboxChange("운영체제", "미포함(프리도스)")
              }
            />{" "}
            미포함(프리도스)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheckboxChange("운영체제", "윈도우11(설치)")
              }
            />{" "}
            윈도우11(설치)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheckboxChange("운영체제", "윈도우10(설치)")
              }
            />{" "}
            윈도우10(설치)
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>무게</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("무게", "1.4~1.7kg")}
            />{" "}
            1.4~1.7kg
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("무게", "1.7~2.0kg")}
            />{" "}
            1.7~2.0kg
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("무게", "2.0~2.3kg")}
            />{" "}
            2.0~2.3kg
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("무게", "2.3~2.5kg")}
            />{" "}
            2.3~2.5kg
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("무게", "2.5~2.8kg")}
            />{" "}
            2.5~2.8kg
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>가격대</h4>
        <div className="slider-container">
          <span>최소 가격: {filters.가격대[0]}만원</span>
          <span>최대 가격: {filters.가격대[1]}만원</span>
          <Range
            step={50}
            min={0}
            max={5000}
            values={filters.가격대} // 배열 형태로 전달
            onChange={handlePriceChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  background: "#ccc",
                  width: "100%",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  backgroundColor: "#999",
                  borderRadius: "50%",
                }}
              />
            )}
          />
        </div>
      </div>

      <button className="search-button">검색</button>
    </div>
  );
}

export default ProductFilter;
