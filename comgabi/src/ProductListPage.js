import React from "react";
import ProductFilter from "./ProductFilter";
import { Link } from "react-router-dom";

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
        <section className="p-5 bg-gray-200 rounded shadow w-full max-w-6xl mx-auto">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between p-4 bg-white rounded shadow text-gray-800 font-medium">
              <span className="flex-1 text-left">상품 사진</span>
              <span className="flex-1 text-center">제품명</span>
              <span className="flex-1 text-center">판매처 개수</span>
              <span className="flex-1 text-right">제품 가격(최저가)</span>
            </div>
            {/* 추가 상품 리스트가 여기에 들어갈 수 있습니다 */}
          </div>
        </section>

        <table className="min-w-full bg-white rounded shadow border border-gray-300">
          <thead>
            <tr>
              <th
                rowSpan="2"
                className="w-40 h-28 p-0 border border-gray-300 text-center"
              >
                <Link
                  to="/productList/ProductDetailsPage/productName"
                  className="text-blue-500 underline"
                >
                  <img
                    src="https://static.wixstatic.com/media/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg/v1/fill/w_480,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg"
                    alt="Product Image"
                    className="w-36 h-28 object-cover"
                  />
                </Link>
              </th>
              <th
                rowSpan="2"
                className="w-90 py-2 px-1 border border-gray-300 text-center"
              >
                <Link
                  to="/productList/ProductDetailsPage/productName"
                  className="text-blue-500 underline"
                >
                  Legion 7i (16", Gen 9)
                </Link>
              </th>
              <th
                colSpan="2"
                className="w-10 h-10 py-2 px-2 border border-gray-300 text-center"
              >
                판매처
              </th>
              <th
                rowSpan="2"
                className="py-2 px-4 border border-gray-300 text-center"
              >
                가격
              </th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </main>
    </div>
  );
}

export default ProductListPage;
