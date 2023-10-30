import React from 'react'

export default function Pagination({paginationData,paginationButton}) {
  return (
    <div className="btn-container">
        {paginationData?.map(
        (ele, index) => {
            return (
            <div
                key={`btn${index}`}
                onClick={() => {
                paginationButton(index + 1);
                }}
            >
                {index + 1}
            </div>
            );
        }
        )}
    </div>
  )
}
