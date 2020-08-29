import React, { useState } from "react";

export default function Modal() {
  const [query, setQuery] = useState({
    bookmarkName: "",
    bookmarkUrl: "",
  });
  const [displayArray, setDisplayArray] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookmark = {
      name: query.bookmarkName,
      url: query.bookmarkUrl,
    };

    setQuery({
      bookmarkUrl: "",
      bookmarkName: "",
    });
    setDisplayArray((oldArray) => [...oldArray, bookmark]);
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
        {displayArray.map((item) => (
          <div className="bookmark-item">
            <a href={item.url}>{item.name}</a>
            <i className="far fa-trash-alt"></i>
          </div>
        ))}
      </div>
    </>
  );
}
