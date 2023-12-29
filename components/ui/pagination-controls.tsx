"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!Number.isInteger(totalPages) || totalPages < 1) {
    totalPages = 1;
  }

  return (
    <>
      {isClient && (
        <Pagination>
          <PaginationContent>
            {
              <PaginationItem>
                <PaginationPrevious
                  scroll={false}
                  href={`${pathname}?page=${currentPage - 1}`}
                />
              </PaginationItem>
            }

            {
              <PaginationItem>
                <PaginationNext
                  scroll={false}
                  href={`${pathname}?page=${currentPage + 1}`}
                />
              </PaginationItem>
            }
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
