import { useState, useEffect } from "react";
import { SortByVoteTypes, IVoteItem } from "interfaces";

export const usePagination = (
  data: IVoteItem[] = [],
  limit = 5,
  fakeLoadingMs = 1000,
  activeSortType: SortByVoteTypes
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<IVoteItem[]>([]);
  const [isLoading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    const startIndex = limit * (currentPage - 1);
    const endIndex = limit * currentPage;

    setPaginatedData(data.slice(startIndex, endIndex));
  }, [data, currentPage, limit, activeSortType]);

  useEffect(() => {
    setCurrentPage(1);
  }, [data.length, activeSortType]);

  // Triggers fetch for new page
  const handlePagination = (page: number) => {
    startLoading();
    setTimeout(() => {
      stopLoading();
      setCurrentPage(page);
    }, fakeLoadingMs);
  };

  return {
    handlePagination,
    isLoading,
    currentPage,
    paginatedData,
  };
};
