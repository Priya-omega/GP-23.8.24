import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'
import React from 'react'
import FaqPowerBi from '@/component/FaqPowerBi'
import HomeFaq from '@/component/HomeFaq'

import HiringPartners from '@/component/HiringPartners'
import FeedbackForm from '@/component/FeedbackForm'
import Testimonials from '@/component/Testimonials'

export default function PowerBi() {
    let image = {
        background: "linear-gradient(90deg, rgb(6 6 76 / 53%), #9d92ee4e), url(img/bg/5.webp) no-repeat center center/cover"
    }

    let data = {
        title: "Power BI"
    }

    return (
        <>
            <Layout>

                <Certificate data={data} image={image} />

                <div className="pageContainer">
                    <Counter />
                    <HiringPartners />

                    <FeedbackForm />

                    {/* <Testimonials /> */}
                </div>

                <div className="pageContainer">
                    <div className="heading2">
                        <h3>PowerBI - Frequently Asked Questions</h3>
                    </div>
                    <FaqPowerBi />

                </div>

            </Layout>
        </>
    )
}

