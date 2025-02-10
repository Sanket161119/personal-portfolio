/* eslint-disable no-unused-vars */
import React from 'react'
import './MyWork.css'
import infinite from "../../assets/infinite.PNG";
import mywork from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={infinite} alt="" />
        </div>
        <div className="mywork-container">
                {mywork.map((work,index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
    </div>
  )
}

export default MyWork