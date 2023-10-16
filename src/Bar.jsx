import React, { useState, useEffect } from "react";
import "./App.css";

const Bar = () => {
  const [bars, setBars] = useState([
    { label: '', height: 100 ,color: 'silver'},
    { label: '', height: 150 ,color: 'silver' },
    { label: '', height: 140  ,color: 'silver'},
    { label: '', height: 120  ,color: 'silver'},
    { label: '', height: 150  ,color: 'silver'},
    { label: '', height: 90  ,color: 'silver'},
    { label: '', height: 190  ,color: 'silver'},
    { label: '', height: 250,color:'#170a52' },
    { label: '', height: 200  ,color: 'silver'},
    { label: '', height: 180 ,color: 'silver'},
    { label: '', height: 210  ,color: 'silver'},
    { label: '', height: 180  ,color: 'silver'},
  ]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setBars((prevBars) =>
        prevBars.map((bar) => ({ ...bar, height: bar.height }))
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="conn">
        <div className="conn1">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Overview <br />
                <h6 style={{ color: "silver" }}>Monthly Earning</h6>
              </h4>
              <p class="card-text">
                <div className="bar-chart">
                  {bars.map((bar, index) => (
                    <div
                      className="bar"
                      key={index}
                      style={{
                        height: bar.height + "px",
                        backgroundColor: bar.color,
                      }}
                    >
                      <div className="bar-label">{bar.label}</div>
                    </div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="conn1" id="or">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
