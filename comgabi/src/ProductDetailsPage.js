import React from "react";
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
  ];

  return (
    <div className="relative flex flex-col items-center m-10">
      <FloatingBox />

      {/* Section 1: Carousel, Product Name/Price, and Price Comparison */}
      <section className="w-full max-w-6xl flex items-start mb-12 space-x-6">
        {/* Carousel (Image) - Left */}
        <div className="w-1/3">
          <Carousel images={images} />

          {/* Product Title and Price - Below Carousel */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold">삼성 노트북(상품명)</p>
            <p className="text-xl text-red-500 mt-2">₩ 1,200,000(가격)</p>
          </div>
        </div>

        {/* Price Comparison - Right with increased width */}
        <div className="w-2/3 bg-gray-100 p-4 rounded-lg h-auto flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-4 text-center">가격 비교</h3>
          <ul className="space-y-3">
            {priceComparisons.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center text-lg bg-white p-3 rounded shadow-sm"
              >
                <span className="font-semibold mr-2">{item.id}.</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2: Product Description and Product Details */}
      <section className="w-full max-w-4xl p-8 mb-10 bg-white rounded-lg">
        {/* Product Description */}
        <div className="border-solid border-black border-2 w-full p-8 mb-8">
          <h2 className="text-5xl mb-4 text-center">(제품 설명)</h2>
          <p className="text-lg leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            temporibus minus commodi, praesentium sequi mollitia expedita
            provident ducimus debitis est sapiente, animi reprehenderit aliquam!
            Ipsam, est! Dolore Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A temporibus minus commodi, praesentium sequi
            mollitia expedita provident ducimus debitis est sapiente, animi
            reprehenderit aliquam! Ipsam, est! Dolore Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. A temporibus minus commodi,
            praesentium sequi mollitia expedita provident ducimus debitis est
            sapiente, animi reprehenderit aliquam! Ipsam, est! Dolore Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. A temporibus
            minus commodi, praesentium sequi mollitia expedita provident ducimus
            debitis est sapiente, animi reprehenderit aliquam! Ipsam, est!
            Dolore Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            temporibus minus commodi, praesentium sequi mollitia expedita
            provident ducimus debitis est sapiente, animi reprehenderit aliquam!
            Ipsam, est! Dolore Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A temporibus minus commodi, praesentium sequi
            mollitia expedita provident ducimus debitis est sapiente, animi
            reprehenderit aliquam! Ipsam, est! Dolore Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. A temporibus minus commodi,
            praesentium sequi mollitia expedita provident ducimus debitis est
            sapiente, animi reprehenderit aliquam! Ipsam, est! Dolore Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. A temporibus
            minus commodi, praesentium sequi mollitia expedita provident ducimus
            debitis est sapiente, animi reprehenderit aliquam! Ipsam, est!
            Dolore Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            temporibus minus commodi, praesentium sequi mollitia expedita
            provident ducimus debitis est sapiente, animi reprehenderit aliquam!
            Ipsam, est! Dolore Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A temporibus minus commodi, praesentium sequi
            mollitia expedita provident ducimus debitis est sapiente, animi
            reprehenderit aliquam! Ipsam, est! Dolore
          </p>
        </div>

        {/* Product Details */}
        <div className="w-full bg-gray-400 p-8 rounded-lg">
          <h1 className="text-center text-2xl font-semibold mb-6">
            제품 상세정보
          </h1>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-2">
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              제품번호
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              12345678
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              제조사
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              삼성
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              모델명
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              GalaxyBook
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              색상
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              실버
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              CPU
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              Intel i7
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              RAM
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              16GB
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              저장 용량
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              512GB SSD
            </div>
            <div className="border border-gray-300 bg-gray-100 px-4 py-2 text-left text-lg">
              배터리 수명
            </div>
            <div className="border border-gray-300 bg-white px-4 py-2 text-lg truncate">
              최대 20시간
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailsPage;
