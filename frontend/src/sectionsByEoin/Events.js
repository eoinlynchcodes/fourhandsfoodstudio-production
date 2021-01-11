import React from "react";
import rose from "../imagesByEoin/rose.jpeg";
import margaux from "../imagesByEoin/margaux.jpeg";
import roseintro from "../imagesByEoin/roseintro.jpeg";

function Events() {
  return (
    <section className="aboutContainer">
      <div className="vl"></div>
      <div>
        <div className="coloredBox violet">
          <h2>Events</h2>
        </div>
        <br />
        <div>
          <h2 className="covid coloredBox">COVID statement</h2>
          <p className="aboutMainText">
            2020 saw big changes, our little world at 4 Hands Food Studio had to
            adjust! Cancelling our dinner events, we made changes to our
            business model. We were focusing on gathering people together in a
            communal dining experience, sharing our nourishing foods and all
            embarking on a discussion around sustainable eating and the future
            of food. We press pause for the moment on this but continue to share
            our knowledge and ethos in a different form.
            <br />
            <br />
            We wish to thank all of you who shared our dining experiences in
            2019 and early 2020, for those who missed out due to cancellations
            we are looking forward to feeding you again in the future!
            <br />
            <br />
            <br />
            <b>Rose &amp; Margaux</b>
          </p>
        </div>
        <br />
      </div>
      <div className="vl"></div>
    </section>
  );
}

export default Events;
