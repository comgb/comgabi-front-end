import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../services/api";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  // API 호출
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await getNews(10); // 10개의 데이터를 요청
        setNewsList(response); // 뉴스 데이터를 상태에 저장
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <article className="flex max-md:flex-col h-auto gap-6 p-6 mt-6">
      <div className="flex-1 items-center p-6 border border-gray-300 rounded-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">뉴스</h2>
        <div className="overflow-x-auto overflow-y-scroll h-96">
          <table className="table">
            <tbody>
              {newsList.map((news) => (
                <tr key={news.newsId} className="hover">
                  <td className="border-b-2">
                    <Link
                      to={news.url}
                      className="flex items-center gap-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-full max-md:w-auto">
                        <div className="font-bold text-xl">{news.title}</div>
                        <div className="text-base opacity-50">
                          {new Date(news.createdDate).toLocaleString()}{" "}
                        </div>
                      </div>
                      <div className="font-bold w-40 text-xl">
                        {news.publisher}
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 border w-[30%] max-md:w-[100%] border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">유튜브</h2>
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
