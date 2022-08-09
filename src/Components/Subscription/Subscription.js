import React from "react";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div className="subsContainer">
      <h4 className="py-4 text-center">
        <span className="highlight">Subscription Plans</span>
      </h4>
      <h6 id="subNote">
        *Note That these plans are for people who are not in the program which
        is given by Medical Centers.
      </h6>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="pricingTable10">
            <div className="pricingTable-header">
              <h3 className="heading">Standard Life Saving Plan</h3>
              <span className="price-value">
                <span className="currency">$</span> 9.99
                <span className="month">/mo</span>
              </span>
            </div>
            <div className="pricing-content">
              <ul>
                <li>1 Medical Staff Visit a Week.</li>
                <li>24/7 Technical Support.</li>
                <li>25% Discount on Medical Supplies.</li>
                <li>24/7 Medical Support.</li>
              </ul>
              <a href="#" className="read">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="pricingTable10">
            <div className="pricingTable-header">
              <h3 className="heading">Full Life Saving Plan</h3>
              <span className="price-value">
                <span className="currency">$</span> 19.99
                <span className="month">/mo</span>
              </span>
            </div>
            <div className="pricing-content">
              <ul>
                <li>3 Medical Staff Visits a Week.</li>
                <li>24/7 Technical Support.</li>
                <li>50% Discount on Medical Supplies.</li>
                <li>24/7 Medical Support.</li>
              </ul>
              <a href="#" className="read">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
