import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <article className="flex max-md:flex-col h-auto gap-6 p-6 mt-6">
      <div className="flex-1 p-6 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">News</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr className="hover">
                <td className="border-b-2">
                  <Link
                    to="https://www.bbc.com/korean/articles/cwy9k9zz807o"
                    className="flex items-center gap-4 hover"
                  >
                    <img
                      className="aspect-square w-20"
                      src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4c92/live/331f42f0-9bd9-11ef-9260-19e6a950e830.png.webp"
                      alt="News_Photo"
                    />
                    <div className="font-bold w-full max-md:w-auto text-xl">
                      2024 미국 대선 개표 현황
                    </div>
                    <div className="font-bold w-40 text-xl">BBC</div>
                  </Link>
                </td>
              </tr>
              <tr className="hover">
                <td className="border-b-2">
                  <Link
                    to="https://www.bbc.com/korean/articles/cwy9k9zz807o"
                    className="flex items-center gap-4"
                  >
                    <img
                      className="aspect-square w-20"
                      src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4c92/live/331f42f0-9bd9-11ef-9260-19e6a950e830.png.webp"
                      alt="News_Photo"
                    />
                    <div className="font-bold w-full max-md:w-auto text-xl">
                      2024 미국 대선 개표 현황
                    </div>
                    <div className="font-bold w-40 text-xl">BBC</div>
                  </Link>
                </td>
              </tr>
              <tr className="hover">
                <td className="border-b-2">
                  <Link
                    to="https://www.bbc.com/korean/articles/cwy9k9zz807o"
                    className="flex items-center gap-4"
                  >
                    <img
                      className="aspect-square w-20"
                      src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4c92/live/331f42f0-9bd9-11ef-9260-19e6a950e830.png.webp"
                      alt="News_Photo"
                    />
                    <div className="font-bold w-full max-md:w-auto text-xl">
                      2024 미국 대선 개표 현황
                    </div>
                    <div className="font-bold w-40 text-xl">BBC</div>
                  </Link>
                </td>
              </tr>
              <tr className="hover">
                <td>
                  <Link
                    to="https://www.bbc.com/korean/articles/cwy9k9zz807o"
                    className="flex items-center gap-4"
                  >
                    <img
                      className="aspect-square w-20"
                      src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4c92/live/331f42f0-9bd9-11ef-9260-19e6a950e830.png.webp"
                      alt="News_Photo"
                    />
                    <div className="font-bold w-full max-md:w-auto text-xl">
                      2024 미국 대선 개표 현황
                    </div>
                    <div className="font-bold w-40 text-xl">BBC</div>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 border w-[30%] max-md:w-[100%] border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Youtube</h2>
        <div className="grid grid-rows-2 gap-6">
          <iframe
            className="aspect-video w-[100%]"
            src="https://www.youtube.com/embed/NMjhjrBIrG8?si=nwbgH35T3h7gsYO5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="aspect-video w-[100%]"
            src="https://www.youtube.com/embed/NMjhjrBIrG8?si=nwbgH35T3h7gsYO5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </article>
  );
};

export default News;
