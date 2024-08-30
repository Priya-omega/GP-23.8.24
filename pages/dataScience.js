import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'
import React from 'react'

export default function dataScience() {

    let image = {
        background: "linear-gradient(90deg, #06064c, #9d92ee4e), url(img/bg/3.jpg) no-repeat center center/cover"
    }

    let data = {
        title: "Data Science"
    }

    return (
        <>

            <Layout>

                <Certificate data={data} image={image} />

                <div className="pageContainer">
                    <Counter />

                </div>

            </Layout>
        </>
    )
}
