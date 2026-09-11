"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <nav
      aria-label="Projects pagination"
      className="mt-12 flex flex-wrap items-center justify-end gap-4 border-t border-slate-200 pt-6"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#28564f] disabled:pointer-events-none disabled:opacity-35"
      >
        <ChevronLeft className="size-4" /> Previous
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${page === currentPage ? "bg-[#2d5d57] text-white" : "text-slate-600 hover:bg-[#eaf1ee] hover:text-[#28564f]"}`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#28564f] disabled:pointer-events-none disabled:opacity-35"
      >
        Next <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
