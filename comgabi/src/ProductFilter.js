// ProductFilter.js
import React, { useState } from "react";
import { Range } from "react-range";

const filterOptions = {
  제조사별: ["MSI", "ASUS", "레노버", "에이서", "HP"],
  화면크기대: ["18인치 이상", "17인치대", "16인치대", "15인치대", "14인치대"],
  CPU종류: ["라이젠 9 HX", "코어 울트라7", "코어9-14세대", "코어7-14세대"],
  램용량: ["128GB", "64GB", "32GB", "16GB"],
  운영체제: ["미포함(프리도스)", "윈도우11(설치)", "윈도우10(설치)"],
  무게: ["1.4~1.7kg", "1.7~2.0kg", "2.0~2.3kg", "2.3~2.5kg", "2.5~2.8kg"],
};

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
    <div className="w-full max-w-2xl mx-auto p-4 border border-gray-300 rounded-lg bg-gray-50">
      🔍 상세 검색 (필터링)
      <hr className="w-full h-1 bg-gray-500 border-0" />
      {/* 필터 그룹을 동적으로 렌더링 */}
      {Object.keys(filterOptions).map((category) => (
        <div key={category} className="flex flex-col gap-1">
          <h4 className="text-md font-bold text-gray-800 mb-1">{category}</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions[category].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters[category].includes(option)}
                  onChange={() => handleCheckboxChange(category, option)}
                  className="form-checkbox h-4 w-4 text-green-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      {/* 가격대 슬라이더 */}
      <div className="flex flex-col gap-1 mt-4">
        <h4 className="text-md font-bold text-gray-800">가격대</h4>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-600">
            최소 가격: {filters.가격대[0]}만원
          </span>
          <span className="text-xs text-gray-600">
            최대 가격: {filters.가격대[1]}만원
          </span>
        </div>
        <Range
          step={50}
          min={0}
          max={5000}
          values={filters.가격대}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div {...props} className="w-full h-1 bg-gray-300 rounded">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-3 w-3 bg-green-500 rounded-full shadow-md"
            />
          )}
        />
      </div>
      <button className="mt-4 py-1 px-3 text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300 text-sm">
        검색
      </button>
    </div>
  );
}

export default ProductFilter;
