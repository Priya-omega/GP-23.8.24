import React from 'react'
import { FaRegHandshake, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa'
import { AiTwotoneCalendar, AiOutlineSetting } from 'react-icons/ai'
import { PiCertificateBold } from "react-icons/pi";
import EnrollmentForm from './EnrollmentForm'

export default function Certificate({ data, image }) {
    return (
        <>
            <div className="certificate" style={image}>
                <div className="text">

                    <div className="flag">
                        <span>  Certified Training <PiCertificateBold className='degicon' /> </span>

                    </div>

                    <p className='course'>{data.title} </p>

                    <p className='title'> Course With Guarenteed <span className='highlight'> Placement</span></p>

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
                    <EnrollmentForm />
                </div>


            </div>
        </>
    )
}
