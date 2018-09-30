import React from 'react';

export default () => (
  <div className="loader">
    <div className="loading-spinner">
      <svg className="circle-svg" viewBox="25 25 50 50">
        <circle
          className="circle-stroke"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  </div>
);
