import { configureStore } from "@reduxjs/toolkit";
import books from './BookSlice'
export default configureStore({
    reducer: {
        books,

    }
})