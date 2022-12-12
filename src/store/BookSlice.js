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

const bookSlice =createSlice({
    name: "book",
    initialState: {books: [],isLoading :false},
  extraReducers: {
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
},
})
export default bookSlice.reducer;