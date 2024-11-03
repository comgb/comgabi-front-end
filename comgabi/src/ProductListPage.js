import React from "react";
import "./ProductListPage.css";
import ProductFilter from "./ProductFilter";

function ProductListPage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <button className="logo">로고</button>
        <input type="text" placeholder="검색창" className="search-bar" />
        <button className="search-btn">검색</button>
        <button className="cart-btn">장바구니</button>
        <button className="login-btn">login</button>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <p>
          카테고리
          {/* 이건 가져오기 */}
        </p>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="filter-section">
          {/* 필터링 부분은 제외하고 레이아웃만 */}
          <div className="filter-box">🔍 상세 검색 (필터링)</div>
        </section>
        <section className="filtering">
          <ProductFilter />
        </section>
        <section className="product-section">
          <div className="product-table">
            <div className="product-item">
              <span>상품 사진</span>
              <span>제품명</span>
              <span>제품 가격(최저가)</span>
            </div>
            {/* 상품 리스트는 여기 추가 가능 */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>사업자 정보 // 고객센터</p>
      </footer>
    </div>
  );
}

export default ProductListPage;
