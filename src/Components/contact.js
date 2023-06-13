import React from "react";

export default function contact() {
  return (
    <div className="row contact">
      <h1 className="text-center fw-bold">CONTACT US</h1>
      <div className="col-sm-5">
        <div className="form-class p-3 bg-dark text-light">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control "
            placeholder="Name"
          />{" "}
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />{" "}
          <br />
          <label>Massage:</label>
          <textarea
            name="massage"
            className="form-control"
            rows={5}
            placeholder="Massage"
          />{" "}
          <br />
          <input type="button" value="Submit" className="btn btn-success" />
        </div>
      </div>
    </div>
  );
}
