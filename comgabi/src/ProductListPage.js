import React from "react";
import ProductFilter from "./ProductFilter";

function ProductListPage() {
  return (
    <div className="container mx-auto p-5">
      {/* Main Content */}
      <main className="flex flex-col gap-5">
        {/* 상세 검색 필터 섹션 */}
        <section className="bg-gray-100 p-4 rounded shadow text-center text-lg font-semibold text-gray-700">
          🔍 상세 검색 (필터링)
        </section>

        {/* 필터링 컴포넌트 */}
        <section>
          <ProductFilter />
        </section>

        {/* 상품 리스트 섹션 */}
        <section className="p-5 bg-gray-200 rounded shadow">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between p-4 bg-white rounded shadow text-gray-800 font-medium">
              <span>상품 사진</span>
              <span>제품명</span>
              <span>제품 가격(최저가)</span>
            </div>
            {/* 추가 상품 리스트가 여기에 들어갈 수 있습니다 */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductListPage;
