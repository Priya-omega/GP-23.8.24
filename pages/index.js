import CompetitiveExam from '@/component/CompetitiveExam'
import DScourses from '@/component/DScourses'
import FeedbackForm from '@/component/FeedbackForm'
import FScourses from '@/component/FScourses'
import HiringPartners from '@/component/HiringPartners'
import HomeFaq from '@/component/HomeFaq'
import Layout from '@/component/Layout'
import Poster from '@/component/Poster'
import SAPcourses from '@/component/SAPcourses'
import Testimonials from '@/component/Testimonials'
import React from 'react'
import { BsEmojiSunglasses, BsFire } from "react-icons/bs";

export default function index() {
  return (
    <>


      <Layout>

        <Poster />

        <FeedbackForm />

        <HiringPartners />

        <div className="pageContainer">

          <div className="courseCards">
            <div className="text">
              <h3>Make your dream a career reality</h3>
              <p>Trending on Guidence Point <BsFire className='emoji' /></p>
            </div>


            <div className="boxContainer">

              <div className="box box1">
                <div className="container">
                  <div className="tag">
                    Certification courses
                  </div>

                  <div className="text">
                    <p>with <span> Guidence Point</span></p>

                  </div>
                </div>


                <div className="img">
                  <img src="img/illu/15.svg" alt="" />
                </div>

                <button>Register Now</button>
              </div>

              <div className="box box2">

                <div className="container">

                  <div className="tag">
                    Job Guarantee Courses
                  </div>

                  <div className="text">
                    <p>with <span> 100% Placement </span></p>

                  </div>
                </div>

                <div className="img">
                  <img src="img/illu/14.svg" alt="" />
                </div>

                <button>Register Now</button>
              </div>

              <div className="box box3">
                <div className="container">
                  <div className="tag">
                    On Job Training
                  </div>

                  <div className="text">
                    <p>with <span> Live projects</span></p>

                  </div>
                </div>


                <div className="img">
                  <img src="img/illu/1.svg" alt="" />
                </div>

                <button>Register Now</button>
              </div>

            </div>



          </div>

          <DScourses />

          <FScourses />

          <SAPcourses />

          <CompetitiveExam />



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

          <Testimonials />

          <HomeFaq />

        </div>

      </Layout>



    </>
  )
}
