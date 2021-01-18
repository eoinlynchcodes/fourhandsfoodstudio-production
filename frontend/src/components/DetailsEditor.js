import React, { useState, useEffect } from "react";
import axios from "axios";

function DetailsEditor() {
  const [postDetails, setDetails] = useState({
    collectionDate: "",
    pickupPoints: "",
    otherinfo: "",
  });

  const [detailsOnline, setDetailsOnline] = useState([]);

  useEffect(() => {
    axios.get("/api/takeaway/")
      .then((response) => {
        setDetailsOnline(response.data);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  const handleChangeDetails = (event) => {
    setDetails({
      ...postDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitDetails = (event) => {
    event.preventDefault();
    axios.post("/api/takeaway/", postDetails)
      .then((response) => {
        setDetails(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHandler = (detailsOnline) => {
    axios.delete(`/api/takeaway/${detailsOnline._id}`);
    window.location.reload();
  };

  return (
    <div>
      <div>
        <h3 className="violet">Details online now:</h3>
        <p> Collection Into:<br/> {detailsOnline.collectionDate}</p>
        <p>Pickup points:<br/> {detailsOnline.pickupPoints}</p>
        <p>Other info:<br/>{detailsOnline.otherinfo}</p>
        <button onClick={() => deleteHandler(detailsOnline)} >Remove</button>
      </div>
      <form
        onSubmit={(event) => handleSubmitDetails(event)}
        className="editTakeawayForm"
      >
        <h2 className="violet">Add Details</h2>
        <label>Collection Date:</label>
        <input
          name="collectionDate"
          placeholder="Date:"
          onChange={(event) => handleChangeDetails(event)}
        />
        <br />

        <label>Pick-Up Points:</label>
        <textarea
          name="pickupPoints"
          placeholder="Where can it be collected?"
          rows="6"
          onChange={(event) => handleChangeDetails(event)}
        />
        <br />

        <label>Other Information to Add:</label>
        <textarea
          name="otherinfo"
          placeholder="Any other information to add:"
          rows="8"
          onChange={(event) => handleChangeDetails(event)}
        />
        <br />
        <button type="submit">Add Details</button>
        <br />
      </form>
    </div>
  );
}

export default DetailsEditor;
