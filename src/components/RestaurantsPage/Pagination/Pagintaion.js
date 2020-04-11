import React, { useState, useEffect } from 'react';
import s from './pagination.module.scss';
import PropTypes from 'prop-types';

const Pagination = ({ arr, pageSize, setArrPage, currentPage, setPage }) => {

    const [pageNumber, setPageNumber] = useState(currentPage);

    const pagesCount = Math.floor(arr.length / pageSize);
    const pages = [];

    for(let i = 0; i <= pagesCount; i++){
        pages.push(i + 1);
    }

    useEffect(() => {
        setArrPage(arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize))
        setPage(pageNumber);
    }, [setArrPage, arr, pageNumber, pageSize, setPage])

    return (
        <div className={s.pagination}>
            <ul>
                {pages.map((count, index) => (
                    <li key={index}>
                        <span className={pageNumber === count ? s.activeCount : s.count} 
                                onClick={() => setPageNumber(count)}
                        >{count}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    arr: PropTypes.array,
    pageSize: PropTypes.number,
    setArrPage: PropTypes.func,
    currentPage: PropTypes.number,
    setPage: PropTypes.func

}

export default Pagination;