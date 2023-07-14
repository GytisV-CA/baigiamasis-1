import React from 'react';
import SegmentedButtons from '../../atoms-md/SegmentedButtons';

interface IPaginationProps {
  setCurrentPage: (pageNum: React.SetStateAction<number>) => void;
  displayDataLength: number;
  currentPage?: number;
  itemsPerPage?: number;
}

export default function Pagination({
  setCurrentPage,
  displayDataLength,
  currentPage = 1,
  itemsPerPage = 5,
}: IPaginationProps) {
  return (
    <SegmentedButtons>
      {Array(Math.ceil(displayDataLength / itemsPerPage))
        .fill(0)
        .map((_, i) => i + 1)
        .filter((x, _, arr) => {
          if (
            x === 1 ||
            x === arr.length ||
            x === currentPage ||
            (x <= Math.max(4, currentPage + 1) &&
              x >= Math.min(arr.length - 3, currentPage - 1))
          ) {
            return x;
          }
        })
        .map((x) => (
          <button
            key={x}
            onClick={() => {
              setCurrentPage(x);
            }}
            className={currentPage === x ? 'selected' : ''}
          >
            {x}
          </button>
        ))}
    </SegmentedButtons>
  );
}
