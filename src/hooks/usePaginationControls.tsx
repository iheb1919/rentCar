import { useState, useMemo } from "react";

interface UsePaginationOptions {
  siblingCount?: number; // how many pages to show around current
  className?: string;
  buttonClassName?: string;
  activeClassName?: string;
  disabledClassName?: string;
}

export function usePagination<T>(
  data: T[],
  itemsPerPage: number = 6,
  options?: UsePaginationOptions
) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data.length, itemsPerPage]);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = (page: number) => setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const siblingCount = options?.siblingCount ?? 1;

  const PaginationControls = () => {
    const className = options?.className ?? "flex justify-center w-full items-center mt-6 gap-2";
    const buttonClass = options?.buttonClassName ?? "rounded-full w-12 h-12 transition-all duration-500 hover:-translate-y-2";
    const activeClass = options?.activeClassName ?? "bg-primary text-white";
    const disabledClass = options?.disabledClassName ?? "bg-[#999] cursor-not-allowed";

    return (
      <div className={className}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`${buttonClass} ${currentPage === 1 ? disabledClass : "dark:bg-[#222] bg-[#f2f2f2]"}`}
        >
          {"<"}
        </button>

        {Array.from({ length: siblingCount * 2 + 1 }).map((_, i) => {
          const page = currentPage - siblingCount + i;
          if (page < 1 || page > totalPages) return null;

          return (
            <button
              key={i}
              onClick={() => goToPage(page)}
              disabled={currentPage === page}
              className={`${buttonClass} ${
                currentPage === page ? activeClass : "dark:bg-[#222] bg-[#f2f2f2]"
              } ${currentPage === page ? "cursor-not-allowed" : ""}`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`${buttonClass} ${currentPage === totalPages ? disabledClass : "dark:bg-[#222] bg-[#f2f2f2]"}`}
        >
          {">"}
        </button>
      </div>
    );
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    PaginationControls,
    setCurrentPage,
    goToPage,
    nextPage,
    prevPage,
  };
}

