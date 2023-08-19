import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        {/* loop thru here */}
        {/* {productsState.cartItems?.map((cartItem) => { */}
          {/* return ( */}
            <div className="card border shadow-none" >
              <div className="card-body">
                <div className="d-flex align-items-start pb-3">
                  <div className="me-4">
                    {/* <img
                      src={cartItem.image}
                      alt={cartItem.title}
                      className="avatar-lg rounded"
                      height="100px"
                    /> */}
                  </div>
                  <div className="flex-grow-1 align-self-center overflow-hidden">
                    <div className="col-md-9">
                      <h5 className="text-truncate font-size-18">
                        <a href="#" className="text-dark">
                          title
                        </a>
                      </h5>
                      <p className="mb-0 mt-1">
                        Category :{" "}
                        <span className="fw-medium">category</span>
                      </p>
                      <div className="mt-3">
                        <p className="text-muted mb-2">Price</p>
                        <h5 className="mb-0 mt-2">
                          <span className="text-muted me-2">
                            price
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        {/* })} */}

        {/* end card */}
        <div className="row my-4">
          <div className="col-sm-6">
            <Link to="/products" className="btn btn-link text-muted">
              <i className="mdi mdi-arrow-left me-1" /> Continue Shopping{" "}
            </Link>
          </div>{" "}
          <div className="col-sm-6">
            <div className="text-sm-end mt-2 mt-sm-0">
              <Link to="/" className="btn btn-success">
                <i className="mdi mdi-cart-outline me-1" /> Checkout{" "}
              </Link>
            </div>
          </div>
        </div>
        {/* end row*/}
      </div>
    </div>
  );
};

export default Cart;
