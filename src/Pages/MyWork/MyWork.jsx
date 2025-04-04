/* eslint-disable no-unused-vars */
import React from 'react'
import './MyWork.scss'
import infinite from "../../assets/Images/infinite.svg";
import mywork from "../../assets/Json/mywork_data.json"
import arrow_icon from "../../assets/Images/arrow_icon.svg"
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