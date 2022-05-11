import React from "react";
import img from "../../image/no-profile.png";
export default function AboutUs() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-12">
          <figure
            className="image is-96x96 is-round  "
            style={{ verticalAlign: "top", marginBottom: "200px" }}
          >
            <p>
              <img src={img} />
            </p>
          </figure>
          <h3>Name -Arvind kumar</h3>
          <h3>Email - arvind.intellial@gmail.com</h3>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
          <figure
            className="image is-96x96 is-round  "
            style={{ verticalAlign: "top", marginBottom: "200px" }}
          >
            <p>
              <img src={img} />
            </p>
          </figure>
          <h3>Name -Vijay Raj</h3>
          <h3>Email - vijay@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}
