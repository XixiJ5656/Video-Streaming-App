import React from "react";
import "./LandingPage.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const LandingPage = (props) => {
  if (props.auth.uid) {
    return <Redirect to="/homepage" />;
  } else {
    return (
      <section className="landing-page">
        {/* <div className="background-picture-landing"></div> */}
        <div className="landing-page-top">
          <div className="center-piece">
            <h4>
              Watch thousands of shows and movies, with plans starting at
              $5.99/month.
            </h4>
            <h1 className="app-name">VaLa</h1>

            <Link to="/signup" className="free-trial">
              START YOUR FREE TRIAL
            </Link>
            <h6>Free trial for new & eligible returning subscribers only.</h6>
          </div>
        </div>
        <div className="join-in-plan">
          <div className="bottom-picture"></div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(LandingPage);
