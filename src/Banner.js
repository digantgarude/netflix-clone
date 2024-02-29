import React from 'react';
import "./Banner.css"

function Banner() {
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://www.travellingbookjunkie.com/wp-content/uploads/2021/01/14019907992_0544000a68_c.jpg")`,
        backgroundPosition: "center center",
    }}>
    <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner_description">
            This is a test description.
        </h1>
    </div>
    <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner