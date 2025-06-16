import React from "react";
import { Link } from "react-router-dom";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className={`wpo-site-footer ${props.ftClass}`}>
      <div className="wpo-upper-footer section-padding">
        <div className="container">
          <div className="quote">
            <span>Have an Idea?</span>
            <h2>Let’s Make Something Amazing Together. </h2>

            <form action="#" onSubmit={SubmitHandler}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Type your Message Here"
                  required
                />
                <button type="submit">Get A Quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <ul>
                <li>
                  Copyright &copy; 2023{" "}
                  <Link onClick={ClickHandler} to="/">
                    Gigerly
                  </Link>
                  . All rights reserved.
                </li>
                <li>
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-twitter-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
