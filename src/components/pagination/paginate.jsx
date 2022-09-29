import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Paginate = () => {
  const generate = (totalPages, currentPage) => {
    let pagination = [],
      i = 1;

    while (i <= totalPages) {
      if (
        i <= 3 ||
        i >= totalPages - 2 ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pagination.push(
          <Link href={`?page=${i}`} key={i}>
            <a
              className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 ${
                i === currentPage
                  ? "border-indigo-500 bg-indigo-50 text-indigo-600 z-10"
                  : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {i}
            </a>
          </Link>
        );
        i++;
      } else {
        pagination.push(
          <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            ...
          </span>
        );
        i = i < currentPage ? currentPage - 1 : totalPages - 2;
      }
    }
    return pagination;
  };
  return (
    <div>
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </a>
        {generate(100, 50)}
        <a
          href="#"
          className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
};

export default Paginate;
