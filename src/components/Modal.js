import React, { useState } from "react";

export default function Modal() {
  const [query, setQuery] = useState({
    bookmarkName: "",
    bookmarkUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    /* check if localstorage has a item or not */

    if (localStorage.getItem("bookmarks") == undefined) {
      let concatArray = [];
      concatArray.push(query);
      localStorage.setItem("bookmarks", JSON.stringify(concatArray));
    } else {
      let storagedArray = JSON.parse(localStorage.getItem("bookmarks"));

      localStorage.setItem(
        "bookmarks",
        JSON.stringify(storagedArray.concat([query]))
      );
    }

    /* to show empty input field after submitting */
    setQuery({
      bookmarkName: "",
      bookmarkUrl: "",
    });
    event.preventDefault();
  };

  /* get item from localstorage */
  let displayArray = JSON.parse(localStorage.getItem("bookmarks"));

  console.log(displayArray);

  const deleteItem = (e) => {
    let getId = e.target.parentNode.id;
    let restArray = displayArray.filter((item) => item.bookmarkName != getId);

    localStorage.setItem("bookmarks", JSON.stringify(restArray));
    window.history.go(0);
  };
  return (
    <>
      <button
        type="button"
        className="modal-button"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add Bookmark
      </button>

      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="modal"
        id="myModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="bookmark-form">
                <div className="form-group">
                  <label htmlFor="InputText">Bookmark Name</label>
                  <input
                    type="text"
                    name="bookmarkName"
                    value={query.bookmarkName}
                    onChange={handleChange}
                    className="form-control"
                    id="InputText"
                    aria-describedby="TextHelp"
                    placeholder="Enter bookmark name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputUrl">Website Url</label>
                  <input
                    type="text"
                    name="bookmarkUrl"
                    value={query.bookmarkUrl}
                    onChange={handleChange}
                    className="form-control"
                    id="InputUrl"
                    placeholder="Enter website url"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  data-dismiss="modal"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bookmark-container">
        {displayArray === null || displayArray.length == 0 ? (
          <p className="no-items">
            There is nothing to show.Please add bookmarks
          </p>
        ) : (
          displayArray.map((item, i) => (
            <div key={i} id={item.bookmarkName} className="bookmark-item">
              <a target="_blank" href={item.bookmarkUrl}>
                {item.bookmarkName}
              </a>
              <i
                value={item.bookmarkName}
                onClick={deleteItem}
                className="far fa-trash-alt"
              ></i>
            </div>
          ))
        )}
      </div>
    </>
  );
}
