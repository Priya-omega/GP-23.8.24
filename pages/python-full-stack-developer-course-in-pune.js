import Layout from '@/component/Layout'
import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import FScourses from '@/component/FScourses'
import HiringPartners from '@/component/HiringPartners'
import FeedbackForm from '@/component/FeedbackForm'
import Link from 'next/link'
import React from 'react'
import FS from '@/component/Syllabus/fullstack/FS'
import { TiArrowForward } from "react-icons/ti";
import FSque from '@/component/FAQs/FS/FSque'
import ReviewFS from '@/component/reviews/ReviewFS'
import Head from 'next/head'
import { FaRegCalendar, FaUserGear } from "react-icons/fa6";
import { FaUsers, FaProjectDiagram } from "react-icons/fa";
import { MdMenuBook, MdLibraryBooks } from "react-icons/md";

export default function python() {
    let image = {
        background: "linear-gradient(90deg, #0b4e7a, rgb(157 146 238 / 1%)), url(img/bg/9.jpg) no-repeat center center/cover"
    }

    let data = {
        title: "FullStack software Development"
    }

    return (
        <>
            <Head>
                <title> Python Full stack developer course in Pune </title>
                <meta name="description" content="Join our Python Full Stack Developer course in Pune and master front-end, back-end, and databases with expert guidance, hands-on projects, and job support." />

                {/* <script key="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }} /> */}
            </Head>


            <Layout>

                <Certificate data={data} image={image} />

                <div className="pageContainer">
                    <div className='text'>
                        <h1>Best Python Full stack developer course in Pune</h1>
                    </div>

                    <div>
                        <p>Are you interested in starting a career in web development with Python? Our Python Full stack developer course in Pune is designed specifically for you! We’ll take you from the fundamentals of Python programming to advanced web development using popular frameworks like Django and Flask. You’ll also gain essential front-end skills in HTML, CSS, and JavaScript, all while working on real-world projects that allow you to apply your new knowledge. </p>
                        <p> With our 100% job guarantee and a pay-after-placement option, we are dedicated to helping you secure a fantastic job. You’ll receive mock interview practice, guidance from industry experts, and personalized mentorship to ensure you’re well-prepared for the job market. Whether you’re a beginner eager to enter the tech field or an experienced professional wanting to enhance your Python skills, our Python Full stack developer course in Pune provides a practical, supportive, and career-oriented learning environment. Join us, and let’s work together to build your future in Python development!</p>

                        <h4> Course Details :</h4>

                        <div className="courseDetailTable">
                            <div>
                                <p><b> <FaRegCalendar className='calendericon' /> Tenure : </b> 6 Months</p>
                                <p><b> <MdMenuBook className='modeStudyicon' /> Mode of Study : </b>  Online/Offline/Hybrid</p>
                                <p><b>  <MdLibraryBooks className='libraryicon' /> Course Structure :  </b> Modular</p>
                            </div>

                            <div>
                                <p><b> <FaProjectDiagram className='projecticon' /> Project :  </b> Live Industry Project</p>
                                <p><b> <FaUsers className='trainersicon' /> Trainers : </b>  Industry Experts</p>
                                <p><b> <FaUserGear className='placementicon' /> Placement:  </b> 100% Job Guarantee</p>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>

        </>
    )
}

