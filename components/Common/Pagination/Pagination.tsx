"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type PaginationProps = {
    totalPages?: number;
};

const Pagination = ({ totalPages = 7 }: PaginationProps) => {
    const [current, setCurrent] = useState(1);

    return (
        <div
            className="flex items-center justify-center flex-wrap"
            style={{ padding: "24px 16px", gap: "4px" }}
        >
            {/* Prev */}
            <button
                onClick={() => setCurrent((p) => Math.max(1, p - 1))}
                disabled={current === 1}
                className="flex items-center text-[var(--color-neutral-9)] hover:text-[var(--color-neutral-13)] disabled:opacity-30 transition"
                style={{ gap: "4px", fontSize: "12px", padding: "6px 6px" }}
            >
                <ChevronLeft size={12} />
                <span className="hidden sm:inline" style={{ fontSize: "13px" }}>Prev</span>
            </button>

            {/* Page numbers — show fewer on mobile */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // On mobile show: current, current±1, first and last
                const isMobileVisible =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - current) <= 1;

                return (
                    <button
                        key={page}
                        onClick={() => setCurrent(page)}
                        className={`flex items-center justify-center transition font-medium ${!isMobileVisible ? "hidden sm:flex" : "flex"
                            } ${page === current
                                ? "bg-[var(--color-primary-500)] text-neutral-1"
                                : "text-[var(--color-neutral-9)] border border-[var(--color-primary-300)] hover:bg-[var(--color-primary-100)]"
                            }`}
                        style={{
                            width: "28px",
                            height: "28px",
                            fontSize: "12px",
                            borderRadius: "4px",
                        }}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Next */}
            <button
                onClick={() => setCurrent((p) => Math.min(totalPages, p + 1))}
                disabled={current === totalPages}
                className="flex items-center text-[var(--color-neutral-9)] hover:text-[var(--color-neutral-13)] disabled:opacity-30 transition"
                style={{ gap: "4px", fontSize: "12px", padding: "6px 6px" }}
            >
                <span className="hidden sm:inline" style={{ fontSize: "13px" }}>Next</span>
                <ChevronRight size={12} />
            </button>
        </div>
    );
};

export default Pagination;