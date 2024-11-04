import React from 'react';

const News = () => {
    return (
        <article className="grid grid-cols-1  sm:grid-cols-2 sm:h-auto h-96 gap-6 p-6 mt-6">
            <div className="p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">News</h2>
                <table>
                    <tr>
                        <td rowSpan={3}>img</td>
                    </tr>
                    <tr>
                        <td className="my-4 w-auto">headline</td>
                    </tr>
                    <tr>
                        <td className="my-4 w-auto">press</td>
                    </tr>
                </table>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Youtube</h2>
            </div>
        </article>
    );
};

export default News;
