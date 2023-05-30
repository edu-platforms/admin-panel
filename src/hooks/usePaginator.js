import { useState } from "react";

export default function usePaginator() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleShowSizeChange = (current, size) => {
    setLimit(size);
    setPage(current);
  };

  return { page, limit, handlePageChange, handleShowSizeChange };
}
