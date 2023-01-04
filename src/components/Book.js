import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks,deleteBook } from '../store/BookSlice';

const BooksContainer = () => {
  const [selectBooks,setSelectBooks] = useState()
  const{isLoading,books} =useSelector((state)=>state.books)
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getBooks());
  },[]);
  const getBookId =(id)=>{
    const selectBooks =books.find((item) =>  item.id === id)
   setSelectBooks((prv)=>{
    return {...prv,...selectBooks}
   })

  }
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading} 
          books={books}
          deleteBook={deleteBook}
          dispatch={dispatch}
          getBookId ={getBookId}
           />
        </div>
        <div className='col side-line'>
          <BookInfo info ={selectBooks}/>
        </div>
      </div>
    </Fragment>
  );
};

export default  BooksContainer ;
