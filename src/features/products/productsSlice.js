import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  productList: [],
  cartItems: [],
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
  reducers: {
    // fetchProducts: (state, action) => {
    //     console.log(state); // product feature data from store
    //     // directly update the store
    //     state.productList = action.payload  
    // }
    // todo learn error handling in this approach

    // the functuons added here will be available to export from actions
    addToCart: (state, action) => {
        console.log(state); // entire store data relevent to this feature
        console.log(action);
        state.cartItems = [...state.cartItems, action.payload];
    }
  },
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
      })
}
});

export const { addToCart } = productSlice.actions;
// export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// export const getProducts = () => {
//     return async function getProductsAsync(dispatch, getState){
//         const response = await axios.get('https://fakestoreapi.com/products')
//         console.log(response);
//         dispatch(fetchProducts(response.data));
//     }
// }
