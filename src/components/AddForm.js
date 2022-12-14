import React from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { insertBook } from '../store/BookSlice';

function AddForm() {
  const title = useRef(null);
  const price = useRef(null);
  const Description = useRef(null);

  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    const data ={
        title: title.current.value,
        price: price.current.value,
        Description: Description.current.value,
      };
    dispatch(insertBook(data));
    title.current.value = null;
    price.current.value = null;
    Description.current.value = null;
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={formSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control'
           
             id='title' required 
             ref={title}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control'
           
             id='price' required 
             ref={price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
             
              id='Description'
              rows='3'
              required
              ref={Description}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
