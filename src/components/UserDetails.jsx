import React from "react";
import { contextExport } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";



function UserDetails() {
  const contextFetch = contextExport();
  const { id } = useParams();
  const data = contextFetch.user.filter((val) => +val.id === +id);

  return (
    <div>
      <h3>Name:</h3>
      {data[0]?.name}
      <h3>Email:</h3>
      {data[0].email}
      <h3>Phone:</h3>
      {data[0].phone}
      <h3>Country:</h3>
      {data[0].country}
      <br />
      <Link to={`/edituser/${data[0].id}`}>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
      </Link>
      <Link to={`/deleteuser/${data[0].id}`}>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </Link>
    </div>
  );
}

export default UserDetails;
