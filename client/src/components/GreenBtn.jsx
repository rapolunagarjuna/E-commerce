import React from 'react';

export default function GreenBtn({ name, func, isLoading }) {
  return (
    <button
      className={`transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 drop-shadow-2xl bg-green-600 w-fit h-fit text-2xl text-slate-100 hover:bg-green-800 py-3 px-16 sm:px-10 sm:text-sm sm:py-2 ${
        isLoading ? 'animate-spin' : ''
      }`}
      onClick={func}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin inline-block h-5 w-5 mr-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
        </svg>
      ) : (
        <span className="text-base 2xl:text-2xl">{name}</span>
      )}
    </button>
  );
}
