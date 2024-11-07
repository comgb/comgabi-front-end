import React from "react";
import { Link } from "react-router-dom";

const Recommend = () => {
  return (
    <div className="justify-center p-6 border border-gray-300 rounded-lg mx-6">
      <h2 className="text-2xl font-bold">추천 상품</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="hover">
              <td className="border-b-2">
                <Link
                  to="/productList/ProductDetailsPage/productName"
                  className="flex items-center"
                >
                  <img
                    className="aspect-square w-20"
                    src="https://static.wixstatic.com/media/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg/v1/fill/w_480,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg"
                    alt="Product_Image"
                  />
                  <div className="font-bold w-full max-md:w-auto text-xl text-center px-3 border-x-2 ml-4">
                    Legion 7i(16", Gen9)
                  </div>
                  <div className="font-bold w-60 text-xl border-r-2 text-center">
                    판매처
                  </div>
                  <div className="font-bold w-60 text-xl ml-4">가격</div>
                </Link>
              </td>
            </tr>
            <tr className="hover">
              <td className="border-b-2">
                <Link
                  to="/productList/ProductDetailsPage/productName"
                  className="flex items-center"
                >
                  <img
                    className="aspect-square w-20"
                    src="https://static.wixstatic.com/media/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg/v1/fill/w_480,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg"
                    alt="Product_Image"
                  />
                  <div className="font-bold w-full max-md:w-auto text-xl text-center px-3 border-x-2 ml-4">
                    Legion 7i(16", Gen9)
                  </div>
                  <div className="font-bold w-60 text-xl border-r-2 text-center">
                    판매처
                  </div>
                  <div className="font-bold w-60 text-xl ml-4">가격</div>
                </Link>
              </td>
            </tr>
            <tr className="hover">
              <td className="border-b-2">
                <Link
                  to="/productList/ProductDetailsPage/productName"
                  className="flex items-center"
                >
                  <img
                    className="aspect-square w-20"
                    src="https://static.wixstatic.com/media/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg/v1/fill/w_480,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg"
                    alt="Product_Image"
                  />
                  <div className="font-bold w-full max-md:w-auto text-xl text-center px-3 border-x-2 ml-4">
                    Legion 7i(16", Gen9)
                  </div>
                  <div className="font-bold w-60 text-xl border-r-2 text-center">
                    판매처
                  </div>
                  <div className="font-bold w-60 text-xl ml-4">가격</div>
                </Link>
              </td>
            </tr>
            <tr className="hover">
              <td>
                <Link
                  to="/productList/ProductDetailsPage/productName"
                  className="flex items-center"
                >
                  <img
                    className="aspect-square w-20"
                    src="https://static.wixstatic.com/media/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg/v1/fill/w_480,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee254f_8e27e4c88ec34d8a945524c557c66863~mv2.jpg"
                    alt="Product_Image"
                  />
                  <div className="font-bold w-full max-md:w-auto text-xl text-center px-3 border-x-2 ml-4">
                    Legion 7i(16", Gen9)
                  </div>
                  <div className="font-bold w-60 text-xl border-r-2 text-center">
                    판매처
                  </div>
                  <div className="font-bold w-60 text-xl ml-4">가격</div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recommend;
