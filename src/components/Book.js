import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks,deleteBook } from '../store/BookSlice';

const BooksContainer = () => {
  const{isLoading,books} =useSelector((state)=>state.books)
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getBooks());
  },[]);
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading} 
          books={books}
          deleteBook={deleteBook}
          dispatch={dispatch}
           />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default  BooksContainer ;
