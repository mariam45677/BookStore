import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
export const getBooks =createAsyncThunk(
    'book/getBooks',async(_, thunkAPI)=>{
    try{
        const res =await fetch('http://localhost:9000/books')
        const data =await res.json();
        return data;

    }catch(error){
        console.log(error);
    }

})
export const insertBook = createAsyncThunk(
  'book/insertBook',
  async (bookData, thunkAPI) => {
    const { rejectWithValue} = thunkAPI;
    

    try {
      const res = await fetch(' http://localhost:9000/books', {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:9000/books/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
     
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getBook = createAsyncThunk(
  'book/getBook',
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:9000/books/${item.id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
     
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const bookSlice =createSlice({
    name: "book",
    initialState: {books: [],isLoading :false,bookInfo:null},
  extraReducers: {
     //getBook
    [getBooks.pending]: (state,action)=>{
        state.isLoading =true;
        

    },
   
    [getBooks.fulfilled]: (state,action)=>{
        state.isLoading =false;
      state.books = action.payload;

  },
  [getBooks.rejected]: (state,action)=>{
    state.isLoading =false;
    

  },
  //insert
  [insertBook.pending]: (state,action)=>{
    state.isLoading =true;
    

},

[insertBook.fulfilled]: (state,action)=>{
  state.books.push(action.payload);
    state.isLoading =false;
  

},
[insertBook.rejected]: (state,action)=>{
state.isLoading =false;


},
//Delete
  [deleteBook.pending]: (state,action)=>{
    state.isLoading =true;
    state.error=null
    

},

[deleteBook.fulfilled]: (state,action)=>{
  
    state.isLoading =false;
    state.books = state.books.filter((el) => el.id !== action.payload.id);
    // console.log(action.payload);
  

},
[deleteBook.rejected]: (state,action)=>{
state.isLoading =false;
state.error=action.payload;


},
[getBook.fulfilled]: (state,action)=>{
  
  state.isLoading =false;
  state.bookInfo = action.payload;
}

},
})
export default bookSlice.reducer;