import React from 'react'
import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'

export default function fullstack() {

    let image = {
        background: "linear-gradient(90deg, #0b4e7a, rgb(157 146 238 / 1%)), url(img/bg/9.jpg) no-repeat center center/cover"
    }

    let data = {
        title: "FullStack software Development"
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
