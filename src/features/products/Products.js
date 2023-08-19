import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "./productsSlice";

const Products = () => {
  const productState = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  if (productState.isLoading) {
    return <div className="spinner-border"></div>;
  }

  if (productState.isError) {
    return <div className="alert alert-danger">{productState.status}</div>;
  }

  return (
    <>
      <h1>Shop Our Products</h1>
      <div className="row">
        {productState.productList?.map((product) => {
          return (
            <div className="col-md-3" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="300"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title} | {product.category}
                  </h5>
                  <p className="card-text">{product.description}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    // onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
