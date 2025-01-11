import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'
import React from 'react'
import DScourses from '@/component/DScourses'
import HomeFaq from '@/component/HomeFaq'

import HiringPartners from '@/component/HiringPartners'
import FeedbackForm from '@/component/FeedbackForm'
import Testimonials from '@/component/Testimonials'
import Mobileform from '@/component/Mobileform'
export default function dataAnalystic() {

    let image = {
        background: "linear-gradient(90deg, #38064cbf, rgb(15 190 243 / 65%)), url(img/bg/dataanalytics.webp) no-repeat center center/cover"
    }

    let data = {
        title: "Data Analytics"
    }

    return (
        <>

            <Layout>

                <Certificate data={data} image={image} />

                <Mobileform />


                <div className="pageContainer">
                    <Counter />
                    <DScourses />
                    <HiringPartners />

                    <FeedbackForm />

                    {/* <Testimonials /> */}


                </div>

                <div className="pageContainer">
                    <div className="heading2">
                        <h3>Data Analystics - Frequently Asked Questions</h3>
                    </div>
                    <HomeFaq />

                </div>

            </Layout>
        </>
    )
}
