import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./AddUser/AddUser";
import { fetchUsersAsync } from "./usersSlice";

const Users = () => {
  console.log('1. program started and fetching initial data from store')
  const users = useSelector((state) => { // state is entire store data
    console.log(state);
    // picking up needed property from store obj 
    return state.users;
  })
  const dispatch =useDispatch();  // getting dispather function from store
  // console.log(dispatch);

  useEffect (() => {
  console.log('3. program ended with initial rendering')
    // dispatch an action from here

    dispatch(fetchUsersAsync());
  }, []);

  
  console.log('2. program ended with initial rendering')

  if(users.isLoading) {
    return (<div className="spinner-border"></div>)
  }

  if(users.isError) {
    return (<div className="alert alert-danger">{users.status}</div>)
  }

  return (
    <div className="container">
      <h1>User Management</h1>
      <div className="row">
        <div className="col-md-4">
          <AddUser />
        </div>
        <div className="col-md-8">
          <h2>List user</h2>
          <div className="row">
            {
              users.userList?.map ((user) => {
                return (
                  <div className="col-md-4" key={user.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {user.email}
                      </h6>
                      <p className="card-text">
                        {user.phone}
                      </p>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
