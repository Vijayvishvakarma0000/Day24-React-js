import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span style={{ margin: "0 1rem" }}>
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
