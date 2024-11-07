import React, { useState, useEffect } from "react";

function Carousel({ images }) {
  const [pageNum, setPageNum] = useState(1);

  // 다음 페이지로 스크롤
  const nextPage = () => {
    if (pageNum < images.length) {
      const nextPageNum = pageNum + 1;
      setPageNum(nextPageNum);
      const nextImage = document.getElementById(`img${nextPageNum}`);
      const carousel = document.querySelector(".carousel");
      carousel.scrollLeft = nextImage.offsetLeft - carousel.offsetLeft;
    }
  };

  // 이전 페이지로 스크롤
  const prevPage = () => {
    if (pageNum > 1) {
      const prevPageNum = pageNum - 1;
      setPageNum(prevPageNum);
      const prevImage = document.getElementById(`img${prevPageNum}`);
      const carousel = document.querySelector(".carousel");
      carousel.scrollLeft = prevImage.offsetLeft - carousel.offsetLeft;
    }
  };

  // 수동 스크롤을 감지하고 페이지 번호 업데이트
  const handleScroll = () => {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel-item");

    // 현재 스크롤 위치에서 가장 가까운 이미지 계산
    let closestIndex = 0;
    let closestDistance = Number.MAX_VALUE;

    images.forEach((image, index) => {
      const distance = Math.abs(carousel.scrollLeft - image.offsetLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    // closestIndex에 따라 pageNum 설정
    if (closestIndex + 1 !== pageNum) {
      setPageNum(closestIndex + 1);
    }
  };

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    // 컴포넌트가 unmount 될 때 이벤트 리스너 제거
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // 첫 번째나 마지막 페이지에 도달했을 때 버튼 disabled 여부
  const isFirstPage = pageNum === 1;
  const isLastPage = pageNum === images.length;

  return (
    <div className="carousel-container overflow-hidden">
      {/* Carousel 이미지들 */}
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 overflow-x-auto">
        {images.map((image, index) => (
          <div className="carousel-item" id={`img${index + 1}`} key={index}>
            <img
              src={image.src}
              alt={`img${index + 1}`}
              className="rounded-box"
            />
          </div>
        ))}
      </div>
      {/* 버튼들 */}
      <div className="items-center flex">
        <button
          onClick={prevPage}
          className="btn rounded-full"
          disabled={isFirstPage}
        >
          <span class="material-symbols-outlined">keyboard_arrow_left</span>
        </button>
        <p className="items-center text-xl m-3">{pageNum}</p>
        <button
          onClick={nextPage}
          className="btn rounded-full"
          disabled={isLastPage}
        >
          <span class="material-symbols-outlined">keyboard_arrow_right</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
