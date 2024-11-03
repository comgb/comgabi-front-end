import React from 'react';

const News = () => {
    return (
        <article className="flex h-96">
            <div className="basis-[60%]  mx-auto my-10 p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">News</h2>   
            </div>
            <div className="basis-[30%] mx-auto my-10 p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Youtube</h2>
            </div>
        </article>
    );
};

export default News;
