import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import { getTakeaway } from "../actions/takeawayActions";
import { useHistory } from "react-router-dom";

function TakeawayContainer(props) {
  const [takeawayDetails, setTakeawayDetails] = useState([]);
  const history = useHistory();

  const [takeawayProduct, setTakeawayProduct] = useState([]);
  const [detailsOnline, setDetailsOnline] = useState([]);

  useEffect(() => {
    axios.get("/api/products/")
      .then(response => {
        console.log(response.data.products);
        setTakeawayProduct(response.data.products);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  useEffect(() => {
    axios.get("/api/takeaway/")
      .then((response) => {
        setDetailsOnline(response.data);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  const orderTakeaway = (id) => {
    history.push("/cart/" + id);
  };

  return (
    <div className="menuTakeawaySection">
      <div>
        <h2>This week's takeaway menu:</h2>
        <p>
          <u>Collection Date:</u>
          <br /> {detailsOnline.collectionDate}
        </p>

        <p>
          <u>Collection Point:</u>
          <br /> {detailsOnline.pickupPoints}
        </p>

        <p>** {detailsOnline.otherinfo}</p>
      </div>

      {/* For Details */}
      {/* {takeawayData.map((takeaway) => {
        console.log(takeaway);
        if (takeaway.isTakeaway === true) {
          return (
            <div>
              <div>
                {takeaway.collectionDate ? (
                  <p>
                    <u className="yellowText">Collection Date:</u>
                    <br /> {takeaway.collectionDate}
                  </p>
                ) : null}
                {takeaway.pickupPoints ? (
                  <p>
                    <u className="yellowText">Pick-up points:</u>
                    <br /> {takeaway.pickupPoints}
                    <br />
                    <br />
                  </p>
                ) : null}
              </div>
              {takeaway.otherinfo ? (
                <p>
                  <u className="yellowText">Other Information:</u>
                  <br /> {takeaway.otherinfo}
                </p>
              ) : null}
            </div>
          );
        } else {
          return null;
        }
      })} */}

      {/* For Menu */}
      {takeawayProduct.map((takeaway) => {
        if (takeaway.category === 'Takeaway') {
          return (
            <div>
              <div>
                <p className="yellowText">
                  <u>{takeaway.category}</u>
                </p>
                <p>{takeaway.name}</p>
                <p>{takeaway.description}</p>
              </div>
              <div>
                <p>
                  <u className="yellowText">{takeaway.courseTitle}</u>
                  <p> {takeaway.courseText}</p>

                  {takeaway.price ? (
                    <p>
                      <u>Price:</u> €{takeaway.price}{" "}
                    </p>
                  ) : null}
                </p>
              </div>
              <div>
                {takeaway.price ? (
                  <div
                    onClick={() => orderTakeaway(takeaway._id)}
                    className="orderButton"
                  >
                    <b>
                      <p>ORDER</p>
                    </b>
                  </div>
                ) : null}
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default TakeawayContainer;
