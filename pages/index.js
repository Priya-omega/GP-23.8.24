import CompetitiveExam from '@/component/CompetitiveExam'
import DScourses from '@/component/DScourses'
import FScourses from '@/component/FScourses'
import HomeFaq from '@/component/HomeFaq'
import Layout from '@/component/Layout'
import Poster from '@/component/Poster'
import SAPcourses from '@/component/SAPcourses'
import React from 'react'
import { BsEmojiSunglasses, BsFire } from "react-icons/bs";

import HiringPartners from '@/component/HiringPartners'
import FeedbackForm from '@/component/FeedbackForm'
import Testimonials from '@/component/Testimonials'
import Link from 'next/link'
import Reviews from '@/component/Reviews'

export default function index() {
  return (
    <>


      <Layout>

        <Poster />


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

                <Link href="/JobCourses">
                  <button>Register Now</button>

                </Link>
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

          <HiringPartners />
        </div>


        <FeedbackForm />


        <div className="pageContainer">
          <Reviews />

        </div>


        <div className="pageContainer">
          <div className="heading2">
            <h3>General - Frequently Asked Questions</h3>
          </div>
          <HomeFaq />

        </div>



      </Layout>



    </>
  )
}
