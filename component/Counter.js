import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function Counter() {
    const [counterState, setCounterstate] = useState(false)
    return (
        <>
            <div className='counter'>
                <ScrollTrigger onEnter={() => setCounterstate(true)} onExit={() => setCounterstate(false)}>
                    <div className="text">
                        <h3>  Giving flight to your ambitions </h3>
                        <p className='subpara'>Real success requires the right skillset. Through our online courses, you too can give wings to your dreams.</p>
                    </div>

                    <div className="container">
                        <div className="box">

                            <div className='count'>
                                {
                                    counterState &&
                                    <CountUp
                                        start={0}
                                        end={4552}
                                        duration={2.72}
                                    >
                                    </CountUp>
                                }+
                            </div>

                            <h4>Students Placed</h4>

                        </div>

                        <div className="box">

                            <div className='count'>
                                {
                                    counterState &&
                                    <CountUp
                                        start={0}
                                        end={572}
                                        duration={2.72}
                                    >
                                    </CountUp>
                                }+
                            </div>

                            <h4>Hiring Partners</h4>

                        </div>

                        <div className="box">

                            <div className='count'>
                                {
                                    counterState &&
                                    <CountUp
                                        start={0}
                                        end={312}
                                        duration={2.72}
                                    >
                                    </CountUp>
                                }+
                            </div>

                            <h4>Trainings Conducted</h4>

                        </div>

                        <div className="box box1">

                            <div className='count'>
                                {
                                    counterState &&
                                    <CountUp
                                        start={0}
                                        end={258}
                                        duration={2.72}
                                    >
                                    </CountUp>
                                }+
                            </div>

                            <h4>Corporate Trainings</h4>

                        </div>


                    </div>

                </ScrollTrigger>


            </div>

        </>
    )
}
