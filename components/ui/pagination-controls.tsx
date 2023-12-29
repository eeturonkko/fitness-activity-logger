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
import { usePathname, useSearchParams, useRouter } from "next/navigation";
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
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!Number.isInteger(totalPages) || totalPages < 1) {
    totalPages = 1; // default value or handle it as you see fit
  }

  return (
    <>
      {isClient && (
        <Pagination>
          <PaginationContent>
            {
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`${pathname}?page=${currentPage - 1}`);
                  }}
                  href={`${pathname}?page=${currentPage - 1}`}
                />
              </PaginationItem>
            }

            {[...Array(totalPages).keys()].map((page) => (
              <PaginationItem key={page + 1}>
                <PaginationLink
                  href={`${pathname}?page=${page + 1}`}
                  isActive={currentPage === page + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`${pathname}?page=${page + 1}`);
                  }}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {
              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`${pathname}?page=${currentPage + 1}`);
                  }}
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
