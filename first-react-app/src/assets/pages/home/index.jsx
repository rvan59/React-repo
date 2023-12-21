import React from "react"
import "./index.css"
import elektirik from "../../img/electirik.jpeg"

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="section">
          <div className="write">
            <h1>
              ELECTRICAL <br /> SERVICE <br /> PROVDERS
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maxime accusamus quibusdam, repudiandae consectetur ea. Odit vero
              eum repellat illum, aspernatur ullam quasi officia cumque quia
              dolores tenetur beatae vitae! Quasi, labore possimus.
            </p>
            <button>Contact Us</button>
          </div>
          <div className="img">
            <img src={elektirik} width="500" alt="" />
          </div>
        </div>
      </div> 
    </section>
  );
};

export default HomePage;
