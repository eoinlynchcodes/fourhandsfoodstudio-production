import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../App.css";
import { useSelector } from "react-redux";
import { signout } from "../actions/userActions";

function Navigation(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div>
      <header className="flexTheHeader">
        <div className="navmenu">
          {userInfo && userInfo.isAdmin ? (
            <Link className="spacebetween" to="/orderlist">
              Orders
            </Link>
          ) : null}
           {userInfo && userInfo.isAdmin ? (
            <Link className="spacebetween" to="/edittakeaway">
            Takeaway
          </Link>
          ) : null}
          {userInfo && userInfo.isAdmin ? (
            <Link className="spacebetween" to="/productlist">
            Products
          </Link>
          ) : null}
          {userInfo ? (
            <Link
              className="spacebetween"
              to="#signout"
              onClick={signoutHandler}
            >
              Sign Out
            </Link>
          ) : null}
        </div>
        <div className="header">
          <div id="noMargin" className="brand burgerMenu">
            <button onClick={openMenu}>&#9776;</button>
          </div>

          <div className="fourHandsHeading">
            <Link to="/">
              <h3 className="fourHandsHeadingText">
                <span className="headingColours">4 Hands</span>Food Studio
              </h3>
            </Link>
          </div>

            <Link className="" to="/cart/:id?">
              <h5 className="black-text">
                {cart.cartItems.length ? (
                  <h5>CART ( {cart.cartItems.length} ) </h5>
                ) : 'CART' }{" "}
              </h5>
            </Link>
        </div>
        <hr />

        <div className="theActualNav">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/shop">
            <h2>Products</h2>
          </Link>
          <Link to="/takeaway">
            <h2>Takeaway</h2>
          </Link>
          <Link to="/blog">
            <h2>Blog</h2>
          </Link>
          <Link to="/events">
            <h2>Events</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </header>
      {/* <hr/> */}

      <aside className="sidebar">
        <h3>Navigation</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/shop" onClick={closeMenu}>Shop</Link>
            <Link to="/takeaway" onClick={closeMenu}>Takeaway</Link>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/events" onClick={closeMenu}>Events</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navigation;
