import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex gap-2 items-center justify-center lg:py-5">
      <Link
        href={{
          pathname: "/",
          query: {
            page: currentPage > 1 ? currentPage - 1 : 1,
          },
        }}
        className={
          currentPage === 1 || totalPages === 0
            ? "pointer-events-none opacity-50"
            : "bg-red-500 px-2 rounded"
        }
      >
        prev
      </Link>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Link
        href={{
          pathname: "/",
          query: {
            page: currentPage < totalPages ? currentPage + 1 : totalPages,
          },
        }}
        className={
          currentPage === totalPages || totalPages === 0
            ? "pointer-events-none opacity-50"
            : "bg-red-500 px-2 rounded"
        }
      >
        next
      </Link>
    </div>
  );
};
