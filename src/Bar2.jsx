import React, { useState, useEffect } from "react";
import "./App.css";
import CircleProgressBar from "./Progress";
const Bar2=()=>{
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
    
    return(
        <div>
            <div class="card-group">
                <div class="card" id="get1">
                    <div class="card-body">
                        <h4 class="card-title">  Overview <br />
                <h6 style={{ color: "silver" }}>Monthly Earning</h6></h4>
                        <p class="card-text" id="no">
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
                <div class="card" id="get">
                    <div class="card-body">
                        <h4 class="card-title">Customer<br />
                <h6 style={{ color: "silver" }}>customers that buy products</h6></h4>
                        <p class="card-text"><CircleProgressBar progress={65}/></p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="other">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Product Sell</h4>
                  <p class="card-text">
                    <div className="oscor">
                      <div className="grid1">Product Name <br /><hr />
                       <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" alt="" srcset="" width={"20%"} />
                       Audi Q3 <br />
                       
                      </div>
                      <div className="grid1">Stock <br /><hr />
                      <p>32 in stock</p><br/>
                      
                      </div>
                      <div className="grid1">Price <br /><hr />
                      <h6>$35,400</h6> <br />
                      
                      </div>
                      <div className="grid1">Total <br/><hr/>
                      <p>20</p>
                      
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            
        </div>
    )
}
export default Bar2