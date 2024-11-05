import React from 'react';

const News = () => {
    return (
        <article className="flex max-sm:flex-col h-auto gap-6 p-6 mt-6">
            <div className="p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">News</h2>
                <table>
                    <tr>
                        <td className="mr-4">img</td>
                        <td className="my-4 w-auto">headline</td>
                        <td className="my-4 w-auto">press</td>
                    </tr>
                </table>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Youtube</h2>
                <div className="grid grid-rows-2 gap-6">
                    <iframe width="100%" height="100%" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="100%" height="100%" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </article>
    );
};

export default News;
