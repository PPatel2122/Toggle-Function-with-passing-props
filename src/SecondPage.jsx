import React from 'react'
import './SecondPage.css'

const SecondPage = ({Submit, ClickChange}) => {
  return (
    <>
    <div className="output">
      <div className="list">
        {Submit.map((info, index) => (
          <div className="lists" key={index}>
            Name: {info.name} || Department: {info.dept} || rating:{" "}
            {info.rating}
          </div>
        ))}
      </div>
    </div>

    <div>
      <button className="button dataoutbutton" type="submit" onClick={ClickChange}>
        Go Back
      </button>
    </div>
  </>
  );
};

export default SecondPage