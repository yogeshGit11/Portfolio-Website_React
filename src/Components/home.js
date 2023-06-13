import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <>
      <div className="row home">
        <div className="col-sm-6">
          <div className="main">
            <div className="intro">
              <strong>
                I AM Yogesh Chaudhari <br />
                React Developer
              </strong>
            </div>
            <div className="col-sm-6 introtext">
              <p>
                Hello My name is Yogesh Chaudhari Student of RCP 
                IMRD college shirpur. currenly learning the new Technologies 
                in Web Developement.
              </p>
             <Link to='/about'> <button className="btn btn-danger btn-sm">About</button></Link>
              <Link to='/contact'><button className="btn btn-dark btn-sm ms-2">Contact</button></Link>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="mt-5">
            <img src="hr.png" />
          </div>
        </div>
      </div>

      
    </>
  );
}
