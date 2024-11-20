import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import FloatingBox from "./FloatingBox";

function ProductDetailsPage() {
  const images = [
    {
      src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    },
  ];

  const priceComparisons = [
    { id: 1, price: "₩1,150,000" },
    { id: 2, price: "₩1,200,000" },
    { id: 3, price: "₩1,250,000" },
    { id: 4, price: "₩1,300,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
    { id: 5, price: "₩1,350,000" },
  ];

  const [isOpen, setIsOpen] = useState(false); // 펼치기/접기 상태 관리
  const contentRef = useRef(null); // div의 크기를 확인할 ref
  const [isLaptop, setIsLaptop] = useState(window.innerWidth < 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleContent = () => {
    setIsOpen(!isOpen); // 버튼 클릭 시 펼치기/접기 상태 토글
  };

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > 1000) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }, []);

  useEffect(() => {
    if (priceComparisons.length > 6) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleMediaChange = (e) => {
      setIsLaptop(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Section 1: Carousel, Product Name/Price, and Price Comparison */}
      <section
        className={
          !isMobile
            ? "w-full max-w-6xl flex flex-row items-start m-10"
            : "w-full flex flex-col items-center m-10"
        }
      >
        <div className={!isMobile ? "w-1/3" : "flex flex-col items-center"}>
          <Carousel images={images} />

          {/* Product Title and Price - Below Carousel */}
          <div
            className={
              !isMobile
                ? "mt-4 bg-base-200 p-4 rounded-lg text-center"
                : "w-11/12 mt-4 mb-4 bg-base-200 p-4 rounded-lg text-center"
            }
          >
            <p className="text-2xl font-semibold">삼성 노트북(상품명)</p>
            <p className="text-xl text-red-500 mt-2">₩ 1,200,000(가격)</p>
          </div>
        </div>

        {/* Price Comparison - Right */}
        <div
          className={
            !isMobile
              ? "w-2/3 bg-neutral p-4 rounded-2xl flex flex-col max-h-96 overflow-y-auto ml-5"
              : "w-11/12 bg-neutral p-4 rounded-2xl flex flex-col max-h-96 overflow-y-auto"
          }
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-neutral-content">
            가격 비교
          </h3>
          <ul className="space-y-3">
            {priceComparisons.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center text-lg bg-base-100 p-3 rounded"
              >
                <span className="font-semibold mr-2">{item.id}.</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-row justify-center">
        <section
          className={
            !isLaptop
              ? "justify-center flex flex-col items-center p-8 border-neutral border-[1px] rounded-lg w-[60%] ml-[20%]"
              : "justify-center flex flex-col items-center p-8 border-neutral border-[1px] rounded-lg w-[80%]"
          }
        >
          {isLaptop ? (
            <div className="w-full ml-2 mr-2">
              <FloatingBox />
            </div>
          ) : (
            ""
          )}
          <div
            ref={contentRef}
            className={`transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-full" : "max-h-[1000px]"
            }`}
          >
            <h2 className="text-5xl mb-4 text-center">(제품 설명)</h2>
            <p className="text-lg leading-relaxed text-justify">
              {Array.from({ length: 50 }, (_, i) => (
                <p key={i}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  porro molestiae dolor omnis ipsum nemo labore ab quidem
                  expedita tempora libero ullam, nisi reiciendis quos enim
                  voluptate aut, minima in?{i + 1}
                </p>
              ))}
            </p>
          </div>
          {isButtonVisible && (
            <button
              onClick={toggleContent}
              className="btn btn-primary mt-4 mb-4 w-full"
            >
              {isOpen ? "접기" : "펼치기"}
            </button>
          )}
          <div
            colSpan="2"
            className="text-2xl text-center font-bold mb-2 pb-2 border-b-2 border-black w-full"
          >
            제품 상세정보
          </div>
          <table className="w-full">
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                제품번호
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                123456
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                제조사
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                삼성
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                모델명
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                갤럭시 북
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                색상
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                실버
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                CPU
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                Intel i7
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                RAM
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                16GB
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                저장용량
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                152GB SSD
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
                배터리 수명
              </td>
              <td className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
                최대 20시간
              </td>
            </tr>
          </table>
        </section>
        {!isLaptop ? (
          <div className="w-[20%] ml-2 mr-2">
            <div className="sticky top-20">
              <FloatingBox />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
