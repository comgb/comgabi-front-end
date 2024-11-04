import React from 'react';

const News = () => {
    return (
        <article className="grid gird-cols-1  sm:grid-cols-2 sm:h-auto h-96 gap-6 p-6 my-6">
            <div className=" my-10 p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">News</h2>   
            </div>
            <div className=" my-10 p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Youtube</h2>
            </div>
        </article>
    );
};

export default News;
