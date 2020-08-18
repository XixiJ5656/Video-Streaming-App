import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
// import logo from "";
const LandingPage = () => (
  <section className="landing-page">
    <div className="background-picture"></div>
    <div className="landing-page-top">
      <div className="center-piece">
        <h3>
          Watch thousands of shows and movies, with plans starting at
          $5.99/month.
        </h3>
        <Link to="/signup" className="free-trail">
          START YOUR FREE TRAIL
        </Link>
        <h6>Free trial for new & eligible returning subscribers only.</h6>
      </div>
    </div>
    {/* <div className="center-logo">{logo}</div> */}
    <div className="hulu-picture"></div>
  </section>
);

export default LandingPage;
