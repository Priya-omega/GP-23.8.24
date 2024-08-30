import Layout from '@/component/Layout'
import React from 'react'
import DScourses from '@/component/DScourses'
import FScourses from '@/component/FScourses'
import HiringPartners from '@/component/HiringPartners'
import FeedbackForm from '@/component/FeedbackForm'
import Testimonials from '@/component/Testimonials'
export default function JobCourses() {
    return (
        <>

            <Layout>

                <div className="JobCourses">

                    <div className="pageContainer">



                        <FeedbackForm />

                        <div className="heading">
                            <h3>Our Job Guarantee Courses with 100% Placement</h3>
                        </div>

                        <DScourses />

                        <FScourses />


                        <div className="banner">

                            <div className="text-box">
                                <h1>Empower your career  </h1>

                                <h1>with </h1>

                                <h1>Guidence Point</h1>

                                <button>Register Now</button>

                            </div>

                            <div className="img">
                                <img src="img/un1.svg" alt="" />

                            </div>
                        </div>

                        <HiringPartners />
                    </div>


                    <div className="pageContainer">
                        <Testimonials />

                    </div>

                </div>

            </Layout>



        </>
    )
}
