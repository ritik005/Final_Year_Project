import React from "react";

const Pagination = ({ postsPerPage, profiles, paginate }) => {
  console.log(profiles);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(profiles / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <nav>
      <div className="row">
        <div className="col-lg-5 col-md-5 col-xs-6"></div>
        <div className="col-lg-7 col-md-7 col-xs-6 mt-5 ">
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item ">
                <a
                  onClick={() => paginate(number)}
                  className="page-link "
                  style={{
                    background: "#304160",
                    cursor: "pointer",
                    color: "white"
                  }}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;
