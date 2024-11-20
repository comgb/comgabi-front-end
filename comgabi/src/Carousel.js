import React, { useState, useEffect, useRef } from "react";

function Carousel({ images }) {
  const [pageNum, setPageNum] = useState(1);
  const carouselRef = useRef(null);
  const isAutoScrolling = useRef(false); // 자동 스크롤 상태 추적

  // 다음 페이지로 스크롤
  const nextPage = () => {
    if (pageNum < images.length) {
      const nextPageNum = pageNum + 1;
      setPageNum(nextPageNum);
      scrollToImage(nextPageNum);
    }
  };

  // 이전 페이지로 스크롤
  const prevPage = () => {
    if (pageNum > 1) {
      const prevPageNum = pageNum - 1;
      setPageNum(prevPageNum);
      scrollToImage(prevPageNum);
    }
  };

  // 특정 이미지로 스크롤 이동
  const scrollToImage = (page) => {
    const carousel = carouselRef.current;
    const targetImage = document.getElementById(`img${page}`);
    if (carousel && targetImage) {
      isAutoScrolling.current = true; // 자동 스크롤 중임을 표시
      carousel.scrollTo({
        left: targetImage.offsetLeft - carousel.offsetLeft,
        behavior: "auto", // smooth 대신 auto로 바로 이동
      });
      // 스크롤 완료 후 자동 스크롤 상태 해제
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 100); // 100ms 후 자동 스크롤 해제
    }
  };

  // 수동 스크롤을 감지하고 페이지 번호 업데이트 (디바운스 적용)
  const handleScroll = () => {
    if (isAutoScrolling.current) return; // 자동 스크롤 중에는 동작하지 않음

    const carousel = carouselRef.current;
    const images = document.querySelectorAll(".carousel-item");

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

  // 디바운스 적용하여 스크롤 이벤트 빈도 조절
  const debounceScroll = () => {
    if (isAutoScrolling.current) return;
    clearTimeout(isAutoScrolling.current);
    isAutoScrolling.current = setTimeout(() => handleScroll(), 100);
  };

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", debounceScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", debounceScroll);
      }
    };
  }, []);

  // 첫 번째나 마지막 페이지에 도달했을 때 버튼 disabled 여부
  const isFirstPage = pageNum === 1;
  const isLastPage = pageNum === images.length;

  return (
    <div className="carousel-container overflow-hidden">
      {/* Carousel 이미지들 */}
      <div
        ref={carouselRef}
        className="carousel carousel-center bg-neutral rounded-2xl max-w-md space-x-4 p-4 overflow-x-auto"
      >
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
          <span className="material-symbols-outlined">keyboard_arrow_left</span>
        </button>
        <p className="items-center text-xl m-3">{pageNum}</p>
        <button
          onClick={nextPage}
          className="btn rounded-full"
          disabled={isLastPage}
        >
          <span className="material-symbols-outlined">
            keyboard_arrow_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
