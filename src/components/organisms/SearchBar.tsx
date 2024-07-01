import React, { FunctionComponent, Fragment } from 'react';

export type SearchBarProps = {};

const SearchBar: FunctionComponent<SearchBarProps> = ({}) => (
  <div>
    <div className="relative">
      <input
        type="text"
        placeholder="맛집 이름을 검색해보세요"
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 shadow-md"
      />
      <svg
        className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 "
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  </div>
);

export default SearchBar;
