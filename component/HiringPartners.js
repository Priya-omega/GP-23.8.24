import React from 'react'

export default function HiringPartners() {

    const row1 = [
        "img/logo/1.webp",
        "img/logo/2.webp",
        "img/logo/3.webp",
        "img/logo/4.webp",
        "img/logo/5.webp",
        "img/logo/6.webp",
        "img/logo/7.webp",
        "img/logo/8.webp",
        "img/logo/9.webp",
        "img/logo/10.webp",
        "img/logo/11.webp",
        "img/logo/12.webp",
        "img/logo/13.webp"
    ]

    const row2 = [
        "img/logo/14.webp",
        "img/logo/15.webp",
        "img/logo/16.webp",
        "img/logo/17.webp",
        "img/logo/18.webp",
        "img/logo/19.webp",
        "img/logo/20.webp",
        "img/logo/21.webp",
        "img/logo/22.webp",
        "img/logo/23.webp",
        "img/logo/24.webp",
        "img/logo/25.webp"
    ]



    return (
        <>

            <div className="hiringParners">

                <div className="heading2">
                    <h3>Top Companies Hiring on Guidence Point</h3>
                    <p>Join us to empower your career with our hiring partners </p>
                </div>

                <div className='Marquee'>
                    <div className='MarqueeGroup' >

                        <div className="imgGroup">
                            {
                                row1.map((e) =>
                                    <img src={e} alt="" className='logo' />

                                )
                            }
                        </div>


                    </div>

                    <div className='MarqueeGroup' >


                        <div className="imgGroup">
                            {
                                row1.map((e) =>
                                    <img src={e} alt="" className='logo' />

                                )
                            }
                        </div>

                    </div>
                </div>

                <div className='Marquee'>
                    <div className='MarqueeGroup2' >

                        <div className="imgGroup">
                            {
                                row2.map((e) =>
                                    <img src={e} alt="" className='logo' />

                                )
                            }
                        </div>


                    </div>

                    <div className='MarqueeGroup2' >


                        <div className="imgGroup">
                            {
                                row2.map((e) =>
                                    <img src={e} alt="" className='logo' />

                                )
                            }
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}
