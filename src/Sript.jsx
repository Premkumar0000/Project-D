import React from "react";
const Script = ()=>{
    const divStyle = {
        color: 'green',
      }
      const write = {
        color: 'black',
        fontStyle:"normal"
      }
      const icon = {
        color: 'green',
        fontStyle:"normal"
      };
      const wow = {
        color: 'red',
        fontStyle:"normal"
      };

   
    return(
        <div>
            
           <div class="card-group">
           
            <div class="card">
                <div class="card-body">
                    <p class="card-text">
                        <div className="com">
                            <div className="com1">
                            <div className="circle"><i class="fa-solid fa-hand-holding-dollar" id="hand" style={icon}></i></div>
                            </div>
                            <div className="com1">
                                <h6 id="text">Earning</h6>
                                <h3>$198K</h3>
                                <h6 id="text" style={divStyle}>37.8%<i style={write}>thismonth</i></h6>
                            </div>
                        </div>
                       
                    </p>
                </div>
            </div>
            <div class="card" id="ro">
                <div class="card-body">
                    <p class="card-text">
                    <div className="com">
                            <div className="com1">
                            <div className="circle1"><i class="fa-regular fa-file-lines" id="hand1"></i></div>
                            </div>
                            <div className="com1">
                                <h6 id="text">Order</h6>
                                <h3>$2.4K</h3>
                                <h6 id="text" style={wow}>2%<i style={write}>thismonth</i></h6>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            <div class="card" id="ro">
                <div class="card-body">
                    <p class="card-text">
                    <div className="com">
                            <div className="com1">
                            <div className="circle2"><i class="fa-solid fa-wallet" id="hand2"></i></div>
                            </div>
                            <div className="com1">
                                <h6 id="text">Balance</h6>
                                <h3>$2.4K</h3>
                                <h6 id="text" style={wow}>2%<i style={write}>thismonth</i></h6>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            <div class="card" id="ro">
                <div class="card-body">
                    <p class="card-text">
                    <div className="com">
                            <div className="com1">
                            <div className="circle3"><i class="fa-solid fa-bag-shopping" id="hand3"></i></div>
                            </div>
                            <div className="com1">
                                <h6 id="text">TotalSales</h6>
                                <h3>$89k</h3>
                                <h6 id="text" style={divStyle}>11%<i style={write}>thismonth</i></h6>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
           </div>
           
        </div>
    )
}
export default Script;