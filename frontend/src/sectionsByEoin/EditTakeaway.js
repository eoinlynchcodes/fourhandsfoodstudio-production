import "./sectionsbyEoin.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { getTakeaway, deleteTakeawayData } from "../actions/takeawayActions";
import {
  deleteProduct,
} from "../actions/productActions";
import DetailsEditor from '../components/DetailsEditor';

function EditTakeaway(props) {

  const dispatch = useDispatch();
  const [takeawayData, setTakeawayData] = useState([]);

  // For handling main courses.
  const [main, setMain] = useState({
    isTakeaway: true,
    isMainCourse: true,
    countInStock: null,
    price: null,
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
    console.log(main);
    event.preventDefault();
    axios.post("/api/products/", main)
      .then((response) => {
        setMain(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // For Handling other courses.

  const [course, setCourse] = useState({
    isTakeaway: true,
    isMainCourse: false,
    countInStock: null,
    price: null,
    takeTitle: "",
    takeItems: "",
  });

  const handleCourseChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitCourses = (event) => {
    event.preventDefault();
    axios.post("/api/products/", course)
      .then((response) => {
        setCourse(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // For Handling Details - Date, Pickup Location, etc.

  // Get takeaways.
  useEffect(() => {
    axios.get("/api/products")
      .then((response) => {
        console.log(response.data.products);
        setTakeawayData(response.data.products);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  // Delete takeaway
  const deleteHandler = (takeaway) => {
    dispatch(deleteProduct(takeaway._id));
    window.location.reload();
  };

  return (
    <section className="editTakeawayPage">
      <hr />
      <div>
        <h2 className="violet" >Menu currently online</h2>
        {takeawayData.map((takeaway) => {
          if (takeaway.category === 'Takeaway') {
            return (
              <div className="menuTakeawaySection">
                <div>
                  <h5>{takeaway.collectionDate}</h5>
                  <h4>
                    <u>{takeaway.mainTitle}</u>
                  </h4>
                  <h4>
                    <u>{takeaway.courseTitle}</u>
                  </h4>
                  <p> {takeaway.mainITems}</p>
                  <p> {takeaway.courseText}</p>
                  {takeaway.name ? <p>{takeaway.name}</p> : null}
                  {takeaway.price ? <p>Price: <u>€{takeaway.price}</u></p> : null}
                  {takeaway.countInStock ? <p>Quantity available: <u>{takeaway.countInStock}</u></p> : null}
                  { takeaway.description ? <p> {takeaway.description} </p> : null }
                  
                  <p>{takeaway.mainItems}</p>
                </div>
                {takeaway.pickupPoints ? (
                  <div>Pick-up Points: {takeaway.pickupPoints}</div>
                ) : null}
                {takeaway.otherinfo ? (
                  <div>Other Info: {takeaway.otherinfo}</div>
                ) : null}
                <button onClick={() => deleteHandler(takeaway)}>
                    Delete
                  </button>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

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

        <form
          onSubmit={(event) => handleSubmitCourses(event)}
          className="editTakeawayForm"
        >
          <h3>Add Other Course</h3>
          <label>Course Price:</label>
          <input
            name="price"
            placeholder="Price in €"
            type="number"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />

          <label>Number Available:</label>
          <input
            name="countInStock"
            type="number"
            placeholder="Number Available:"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />

          <label>Course Title:</label>
          <textarea
            name="courseTitle"
            placeholder="Course Name:"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />

          <label>Course Text:</label>
          <textarea
            name="courseText"
            placeholder="Course Contents:"
            rows="6"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />
          <button type="submit">Add</button>
          <br />
        </form>
        <DetailsEditor/>
      </div>
    </section>
  );
}

export default EditTakeaway;
