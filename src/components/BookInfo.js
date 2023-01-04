import React, { Fragment } from 'react';

const BookInfo = ({info}) => {
 
  return (
    <Fragment>
      <h2>Book Details</h2>
      {info ?(
         <div>
         <p className='fw-bold'>Title:{info.title}</p>
         <p className='fw-light'>Description:{info.Description}</p>
         <p className='fst-italic'>Price: {info.price}</p>
       </div>
      ):
      (
      <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
