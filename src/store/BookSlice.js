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


const bookSlice =createSlice({
    name: "book",
    initialState: {books: [],isLoading :false},
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

},
})
export default bookSlice.reducer;