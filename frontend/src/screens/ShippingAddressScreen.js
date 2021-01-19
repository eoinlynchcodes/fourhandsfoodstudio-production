import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { savePaymentMethod } from "../actions/cartActions";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push("/signin");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [additional, setAdditional] = useState(shippingAddress.additional);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        postalCode,
        country,
        additional
      })
    );
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <div>
      {/* <CheckoutSteps step1 step2></CheckoutSteps> */}
      <div>
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Delivery Address</h2>
            </li>

            <li>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder=""
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              ></input>
            </li>

            <li>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="city">Town:</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="country">County:</label>
              <input
                type="text"
                name="country"
                id="country"
                value={country}
                placeholder="County:"
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </li>

            <li>
              <label htmlFor="postalCode">
                Eircode:{" "}
                <a className="black-text" href="https://finder.eircode.ie/#/">
                  <i className="red-text">*Click here to Find Your Eircode</i>
                </a>
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              ></input>
            </li>

            <li>
              <label htmlFor="additional">
                Optional Notes for Takeaway Orders:
              </label>
              <textarea
                type="text"
                name="additional"
                id="additional"
                rows="8"
                value={additional}
                placeholder="Eg. Vegan Option for takeaway please."
                onChange={(e) => setAdditional(e.target.value)}
              ></textarea>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
      <br />
    </div>
  );
}
