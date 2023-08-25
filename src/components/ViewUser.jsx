import React, { useEffect, useState } from "react";
import { contextExport } from "../context/Context";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import ReactPaginate from "react-paginate";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ViewUser() {
  const navigate = useNavigate();
  const contextFetch = contextExport();
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  console.log(location);
  const [search, searchedData] = useState(contextFetch.user);

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;
  const pagesVisited = pageNumber * userPerPage;

  const displayUser = search
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((item, index) => {
      return (
        <div>
          <div key={index}>
            <h2>Name:{item.name}</h2>
            <Link to={`/viewuser/${item.id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      );
    });

  useEffect(() => {
    if (!isEmpty(id) && location.pathname !== "/viewuser") {
      const confirm = window.confirm("Confirm to Delete User");
      if (confirm) {
        contextFetch.deleteUser(id);
      }
      navigate("/viewuser");
    }
  }, [id]);

  const pageCount = Math.ceil(search.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (contextFetch.user === undefined || contextFetch.user.length === 0) {
    return (
      <>
        <h1>No Data Available!!!!</h1>
      </>
    );
  } else {
    return (
      <>
        <br />
        <br />
        <input
          type="text"
          placeholder="Search Name"
          onChange={(e) => {
            if (e.target.value === "") {
              searchedData(contextFetch.user);
            } else {
              const seachParameter = [];
              for (const x of contextFetch.user) {
                if (x.name.includes(e.target.value)) {
                  seachParameter.push(x);
                }
              }
              searchedData(seachParameter);
            }
          }}
        />
        {displayUser}
        <div>
          <br />
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            pageClassName={"page-link"}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"page-item disabled"}
            activeClassName={"page-item active"}
          />
        </div>
      </>
    );
  }
}

export default ViewUser;

/* <div>
            {search.map((item, index) => (
              <div key={index}>
                <h2>Name:{item.name}</h2>
                <Link to={`/viewuser/${item.id}`}>
                  <button>Details</button>
                </Link>
              </div>
            ))}
          </div> */
