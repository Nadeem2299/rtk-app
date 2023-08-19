// core stuffs here
// 1. initial state of this feature which will find its place in store
// 2. reducer function
// 3. actions associated with reducer functions

import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  user: {},
  status: "idle",
};

// rest api call to add User thru axios
export const addUserAsync = createAsyncThunk(
  "users/addUser", // action type prefix
  // complex code
  // () => {
  // axios.get('https://jsonplaceholder.typicode.com/users')
  // .then((res) => {

  // })
  // .catch((err) => {

  // })
  // simplified code
  async (formData) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      formData
    );
    // the value we return becomes the action payload
    console.log(response.data);
    return response.data;
  }
);


// rest api call to fetch Users thru axios
export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers", // action type prefix
  // complex code
  // () => {
  // axios.get('https://jsonplaceholder.typicode.com/users')
  // .then((res) => {

  // })
  // .catch((err) => {

  // })
  // simplified code
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // the value we return becomes the action payload
    console.log(response.data);
    return response.data;
  }
);

// Lets's create slice
// what's a slice?

// A function that accepts an initial state, [DONE]
// an object full of reducer functions,
// and a 'slice name', [DONE]
// and automatically generates action creators and action types
// that corresponds to the reducers and state.

export const userSlice = createSlice({
  name: "users",
  initialState,
  // Let's have the obj full of reducer function
  reducers: {
    // if you want to update store locally without connecting to rest api
    // write the logic here - this is meant for sync calls

    addUser: (state) => {
      // state is data from store of this feature
      // state.userList = [...state.userList, state.payload]
      debugger;
    },
    fetchUsers: (state) => {
      debugger;
    },
  },
  // extraReducers: A callback that receives a builder object
  // define case reducers
  // via calls to builder.addCase(actionCreatorOrType, reducer)
  // the extraReducers field lets the slice handle actions defined elsewhere in the app
  // including action displached by other slices also
  extraReducers: (builder) => {
    console.log(builder);
    // builder
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        console.log(state);
        // before promise is call either fullfilled/rejected
        state.isLoading = true;
        state.isError = false;
        state.status = "Loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = false;
        state.isError = false;
        state.status = "idle";
        state.userList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = false;
        state.isError = true;
        state.status = "Some error occured";
      })
      .addCase(addUserAsync.pending, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = true;
        state.isError = false;
        state.status = "Loading";
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = false;
        state.isError = false;
        state.status = "idle";
        state.userList = [...state.userList, action.payload];
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        console.log(state);
        // after promise is call either fullfilled/rejected
        state.isLoading = false;
        state.isError = true;
        state.status = "Unable to save data try again later";
      });
  },
});

export default userSlice.reducer;
