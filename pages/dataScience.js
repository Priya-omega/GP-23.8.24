import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'
import Mobileform from '@/component/Mobileform'
import React from 'react'

export default function dataScience() {

    let image = {
        background: "linear-gradient(90deg, #06064c, #9d92ee4e), url(img/bg/datascience.webp) no-repeat center center/cover"
    }

    let data = {
        title: "Data Science"
    }

    return (
        <>

            <Layout>

                <Certificate data={data} image={image} />

                <Mobileform />


                <div className="pageContainer">
                    <Counter />

                </div>

            </Layout>
        </>
    )
}
