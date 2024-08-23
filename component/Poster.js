import React from 'react'
import Form from './Form'
import { FaRegHandshake, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa'
import { PiCertificateBold } from "react-icons/pi";
import { AiTwotoneCalendar, AiOutlineSetting } from 'react-icons/ai'

export default function Poster() {
    return (
        <>
            <div className="poster">
                <div className="text">

                    <div className="tag">
                        Certified Training Courses <PiCertificateBold className='degicon' />
                    </div>

                    <h1 className='title'>Embed your future with <span className='highlight'> Guidence Point</span></h1>

                    <div className="para">
                        <p>Join Placement Guaranteed Courses <FaCheckCircle className='checkicon' /></p>

                        <p> With High Salary Package <FaCheckCircle className='checkicon' /></p>

                    </div>


                    <div className="boxcontainer">

                        <div className="container">
                            <div className="box">
                                <FaRegHandshake className="placementicon" /> Placement Assistance
                            </div>

                            <div className="box">
                                <FaProjectDiagram className="projecticon" /> Live Projects
                            </div>
                        </div>

                        <div className="container">
                            <div className="box">
                                <AiOutlineSetting className="techicon" /> Technical Support
                            </div>



                            <div className="box">
                                <AiTwotoneCalendar className="durationicon" /> Flexible Schedule
                            </div>
                        </div>

                    </div>

                </div>

                <div className="formContainer">
                    <Form />
                </div>


            </div>
        </>
    )
}
