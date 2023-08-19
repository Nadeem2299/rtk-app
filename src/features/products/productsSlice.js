import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  productList: [],
  status: "idle",
};

// fetching products array from rest api
export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    console.log(builder);
    // builder
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        console.log(state);
        // before promise is call either fullfilled/rejected
        state.isLoading = true;
        state.isError = false;
        state.status = "Loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = false;
        state.isError = false;
        state.status = "idle";
        state.productList = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = false;
        state.isError = true;
        state.status = "Some error occured";
      });
  },
});

export default productSlice.reducer;
