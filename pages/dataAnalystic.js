import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'
import React from 'react'
import DScourses from '@/component/DScourses'
import HomeFaq from '@/component/HomeFaq'

import HiringPartners from '@/component/HiringPartners'
import FeedbackForm from '@/component/FeedbackForm'
import Testimonials from '@/component/Testimonials'
export default function dataAnalystic() {

    let image = {
        background: "linear-gradient(90deg, #38064cbf, #9d92ee4e), url(img/bg/7.jpg) no-repeat center center/cover"
    }

    let data = {
        title: "Data Analytics"
    }

    return (
        <>

            <Layout>

                <Certificate data={data} image={image} />

                <div className="pageContainer">
                    <Counter />
                    <DScourses />
                    <HiringPartners />

                    <FeedbackForm />

                    <Testimonials />


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
