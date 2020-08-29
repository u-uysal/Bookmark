import React from "react";

export default function Modal() {
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

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="InputText">Bookmark Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputText"
                    aria-describedby="TextHelp"
                    placeholder="Enter bookmark name"
                  />
                </div>
                <div className="form-group">
                  <label for="InputUrl">Bookmark Url</label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputUrl"
                    placeholder="Enter bookmark url"
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
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
