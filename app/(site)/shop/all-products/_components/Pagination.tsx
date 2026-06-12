type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex justify-center mt-12 gap-2 text-sm">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              px-4 py-2 border transition
              ${
                currentPage === page
                  ? "bg-black text-neutral-1 border-black"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
