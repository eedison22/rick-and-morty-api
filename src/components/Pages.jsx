import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pages = ({ quantyPages, page, setPage }) => {
  return (
    <div className='py-5 flex content-center justify-center gap-5 text-white'>
      <div>
        {page > 1 && (
          <>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => setPage(page - 1)}
            />
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => setPage(page - 1)}
            />
          </>
        )}
      </div>
      <p>
        {page} de {quantyPages}
      </p>
      <div>
        {page < quantyPages && (
          <>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => setPage(page + 1)}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => setPage(page + 1)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Pages;