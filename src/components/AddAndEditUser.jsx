import React, { useEffect, useState } from "react";
import { contextExport } from "../context/Context";
import { Link, useParams } from "react-router-dom";

function AddAndEditUser() {
  const contextFetch = contextExport();
  const [data, setData] = useState({});
  const param = useParams();

  useEffect(() => {
    if (param.id) {
      const newdata = contextFetch.user.filter((val) => +val.id === +param.id);
      console.log(newdata);
      setData({
        id: newdata[0]?.id,
        name: newdata[0]?.name,
        email: newdata[0].email,
        phone: newdata[0]?.phone,
        country: newdata[0]?.country,
      });
    }
  }, [param.id]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <br />
      Name:
      <br />
      <input type="text" name="name" onChange={handleInput} value={data.name} />
      <br />
      Email:
      <br />
      <input
        type="email"
        name="email"
        onChange={handleInput}
        value={data.email}
      />
      <br />
      Phone Number:
      <br />
      <input
        type="tel"
        name="phone"
        onChange={handleInput}
        value={data.phone}
      />
      <br />
      Country:
      <br />
      <input
        type="text"
        name="country"
        onChange={handleInput}
        value={data.country}
      />
      <br />
      <br />
      <button className="btn btn-success"
        type="button"
        onClick={() => {
          param.id
            ? contextFetch.editUser(+data.id, data)
            : contextFetch.addUser(data);
        }}
      >
        Submit
      </button>
      <Link to="/viewuser">
        <button type="button" className="btn btn-secondary">Back</button>
      </Link>
    </>
  );
}

export default AddAndEditUser;
