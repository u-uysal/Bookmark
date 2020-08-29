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
              <form>
                <div className="form-group">
                  <label for="InputText">Bookmark Name</label>
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
                  <label for="InputUrl">Website Url</label>
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

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  data-dismiss="modal"
                >
                  {query.bookmarkName},{query.bookmarkUrl}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
