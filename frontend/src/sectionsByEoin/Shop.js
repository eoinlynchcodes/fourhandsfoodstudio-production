import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function Shop(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  const handleAddToCart = (product) => {
    props.history.push("/cart/" + product._id + "?qty=" + 1);
  };

  return (
    <section className="aboutContainer">
      <div className="vl"></div>
        {/* <div className="coloredBox violet">
          <h2>Products</h2>
        </div> */}
        <br />
        <div className="">
          {/* <h1 id="products">Products</h1> */}
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div id="products" className="">
              {products.map((product) => (
                <div className="product-padding-section" key={product._id}>
                  {product ? (
                    <div>
                      <Link to={"/product/" + product._id}>
                        <img
                          className="product-image"
                          src={product.image}
                          alt="product"
                        />
                      </Link>
                      <div className="product-data">
                        <div className="product-name pad">
                          <Link
                            className="product-actual-name"
                            to={"/product/" + product._id}
                          >
                            {product.name}
                          </Link>
                        </div>

                        <div className="product-price pad">
                          {" "}
                          {product.price ? `€ ${product.price}` : null}
                        </div>

                        <div className="buttonDivHomepageProduct">
                          <div className="button primary fifty">More Info</div>
                          {product.countInStock > 0 ? (
                            <div
                              onClick={(product) => handleAddToCart(product)}
                              id="greenButton"
                              className="whitetext button fifty"
                            >
                              Add to Cart
                            </div>
                          ) : (
                            <div className="">
                              <a href="#contact" className="whitetext">
                                Email Us For Orders
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2>
                        Products will soon be available for purchase here.
                      </h2>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <br />
        <hr/>
        <br />

        <section id="stockists" className="stockists">
          <div className="coloredBox violet">
            <h3>Stockists</h3>
          </div>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foxes Fruit and Veg</td>
                <td>Mullingar, Westmeath</td>
              </tr>
              <tr>
                <td>Lowe and Co.</td>
                <td>Athlone, Westmeath</td>
              </tr>
              <tr>
                <td>Marlowe and Co</td>
                <td>Dublin</td>
              </tr>
              <tr>
                <td>Lennox Street Grocers</td>
                <td>Howth Dublin</td>
              </tr>
              <tr>
                <td>Mamo Restaurant</td>
                <td>Howth, Dublin</td>
              </tr>
              <tr>
                <td>Margadh Specialty Shop</td>
                <td>Howth, Dublin</td>
              </tr>
              <tr>
                <td>The Dublin Food Co-Op.</td>
                <td>Dublin</td>
              </tr>
              <tr>
                <td>The Fumbally Shop</td>
                <td>Dublin</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </section>
      <div className="vl"></div>
    </section>
  );
}

export default Shop;
