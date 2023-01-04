import React from 'react';

const BooksList = ({isLoading,books,dispatch,deleteBook,getBookId}) => {
  const bookList =books.map((item)=>(
    <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
    <div>{item.title}</div>
    <div className='btn-group' role='group'>
      <button type='button' className='btn btn-primary'
      onClick={()=>getBookId(item.id)}
      >
        Read
      </button>
      <button type='button' className='btn btn-danger'
      onClick={()=>dispatch(deleteBook(item)).then((data)=>{
        console.log(data);
      })}
      >
        Delete
      </button>
    </div>
  </li>

  ))
  return (
    <div>
      <h2>Books List</h2>
      {
        isLoading ? (
          
          'loading...'
          ) :(
        <ul className='list-group'>{bookList}
    
      </ul>
     ) }
     
    </div>
  );
};

export default BooksList;
