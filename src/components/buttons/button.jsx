import React from "react";

const Button = ({ children, grey = false, ...props }) => {
  return (
    <button
      {...props}
      className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm ${
        grey
          ? "bg-gray-200 hover:bg-gray-300 text-indigo-600"
          : "bg-indigo-600 hover:bg-indigo-700 text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
