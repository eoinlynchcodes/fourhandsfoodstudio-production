import React, { useState } from "react";
import axios from "axios";

function MainTakeMenuEdit(props) {

  console.log('Menu Editing: ' + props);

  const [main, setMain] = useState({
    isTakeaway: true,
    mainCourse: true,
    price: "",
    mainTitle: "",
    mainItems: "",
  });

  const handleChangeMain = (event) => {
    setMain({
      ...main,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitMain = (event) => {
    debugger
    event.preventDefault();
    axios.post("/api/products/", main)
      .then(response => {
        setMain(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={(event) => handleSubmitMain(event)}
        className="editTakeawayForm"
      >
        <h2>Add Main Course</h2>
        <label>Main Course Price:</label>
        <input
          name="price"
          placeholder="Price in €"
          type="number"
          onChange={(event) => handleChangeMain(event)}
        />
        <br />

        <label>Number Available:</label>
        <input
          name="countInStock"
          type="number"
          placeholder="Number Available:"
          onChange={(event) => handleChangeMain(event)}
        />
        <br />

        <label>Main Course Title:</label>
        <textarea
          name="mainTitle"
          placeholder="Course Name:"
          onChange={(event) => handleChangeMain(event)}
        />
        <br />

        <label>Main Course Items/Text:</label>
        <textarea
          name="mainItems"
          placeholder="Course Contents:"
          rows="6"
          onChange={(event) => handleChangeMain(event)}
        />
        <button type="submit">Add Main Course</button>
      </form>
    </div>
  );
}

export default MainTakeMenuEdit;
