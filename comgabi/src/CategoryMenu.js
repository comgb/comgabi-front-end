import React from 'react';

const categories = ['노트북', '모니터', '본체', '기타'];

const CategoryMenu = () => {
    return (
        <aside className="bg-blue-500 text-white w-64 p-5">
            <h2 className="text-xl font-bold p-4 border-b border-white">카테고리</h2>
            {categories.map((category, index) => (
                <div key={index} className="p-4 border-b border-white last:border-b-0 transition-colors duration-300 hover:bg-white hover:text-blue-500"> {/* 이예준 aside를 햄버거 메뉴로 하는건 어떨까요?*/}
                    {category}
                </div>
            ))}
        </aside>
    );
};

export default CategoryMenu;
