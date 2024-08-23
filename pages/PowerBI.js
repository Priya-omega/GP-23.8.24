import Certificate from '@/component/Certificate'
import Counter from '@/component/Counter'
import Layout from '@/component/Layout'
import React from 'react'

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

                </div>

            </Layout>
        </>
    )
}

