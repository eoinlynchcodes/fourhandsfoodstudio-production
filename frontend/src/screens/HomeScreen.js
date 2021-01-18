import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import '../sectionsByEoin/Homepage.css';
import { useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";

import fourhandshome from '../imagesByEoin/fourhandshome.png';

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);


  const buyTakeAway = (e) => {
    history.push("/takeaway");
  };

  const goToProducts = (e) => {
    history.push("/shop");
  };


  return (
    <div>
            <div className="homeImages">
        <div className="homepageContainer">
          <img src={fourhandshome} alt="4 Hands Food Studio's Food" />
        </div>
      </div>

      <div className="homepageContainer">
        <div>
          <div className="homepageFirstPiece">
          <div id="thisOneVL"></div>

            <section className="first homepageSection">
              <div className="violet">
                <h3>The Fermented Goods</h3>
              </div>
              <p className="paraforalignment">
                We currently offer a small range of fermented vegetables and
                drinks well known as sauerkraut, kimchi and kombucha aswell as
                fermented vegetable juices.
                <br />
                We focus on a starting point: the raw produce.
                <br /><br />
                The ingredients we use have to be alive, chemical free and
                ethically produced.
                <br />              
                We sell in <a className="linkToNormalise" href="#retailers"><u> shops</u></a>, through <a
                  className="linkToNormalise"
                  href="https://www.neighbourfood.ie/markets/mullingar/collection/2373"
                >
                  <u>Neighbourfood Mullingar</u>
                </a> and our  {" "}  
                 <a className="linkToNormalise" href="/shop"> 
                    <u>Online Store. </u>
                </a>
              </p>
              <div id="orangeButton" className="redButton" onClick={goToProducts}>
                <p>
                  <b>CHECK OUT HERE</b>
                </p>
              </div>
            </section>

            <div id="thisOneVL"></div>

            <section className="second homepageSection">
              <div  className="green">
                <h3>TAKE-AWAY Dinner</h3>
              </div>
              <p id="centeringTakeaway" className="paraforalignment">
                We offer a weekly takeaway dinner, in between fine and casual.
                An ideal choice when going out is not on your agenda and
                microwave food is not an option. Spaces are limited so click in
                to order!
              </p>
              <div onClick={buyTakeAway} id="greenButton" className="redButton">
                <b>
                  <p>ORDER</p>
                </b>
              </div>
            </section>
            <div id="thisOneVL"></div>
          </div>

          </div>
          </div>
          </div>
  );
}
