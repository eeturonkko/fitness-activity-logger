"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

export function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!Number.isInteger(totalPages) || totalPages < 1) {
    totalPages = 1;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {isClient && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                scroll={false}
                href={`${pathname}?page=${currentPage - 1}`}
              />
            </PaginationItem>
            {pages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  scroll={false}
                  href={`${pathname}?page=${page}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                scroll={false}
                href={`${pathname}?page=${currentPage + 1}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
