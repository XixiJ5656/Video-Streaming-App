import React from "react";
import "./LandingPage.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import logo from "";

const LandingPage = (props) => {
  if (props.auth.uid) {
    return <Redirect to="/homepage" />;
  } else {
    return (
      <section className="landing-page">
        <div className="background-picture-landing"></div>
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
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(LandingPage);
