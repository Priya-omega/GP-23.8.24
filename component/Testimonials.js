import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { BsStarHalf, BsStarFill, BsFillEmojiSmileFill } from 'react-icons/bs'
export default function Testimonial() {
    return (
        <>
            <div className="Testimonial">

                <div className="heading2">
                    <h3> Ratings & Reviews by Students</h3>
                    <p>Guidence Point has received honest feedback from our learners around the globe. </p>
                </div>

                <div className="container1">
                    {/* <div className="txt">

                        <p>Guidence Point has received honest feedback from our learners around the globe.</p>
                    </div> */}



                    <div className="google">
                        <div className='img'>
                            <img src="img/googleRating.png" alt="" />
                        </div>


                        <div className='rating'>
                            <p>4.9</p>
                            <p> <BsStarFill className='star' /> <BsStarFill className='star' />  <BsStarFill className='star' />  <BsStarFill className='star' /> <BsStarHalf className='star' /> </p>
                        </div>

                    </div>

                </div>

                <div className="container2">
                    <div className='box'>
                        <div className="logo">
                            <div className="img">
                                <img src="img/test/2.jpeg" alt="" />
                            </div>

                            <div className="name">
                                <p className='bold'>Nikhil Kulkarni</p>
                                <p> <span> Course : </span> Data Science </p>
                            </div>
                        </div>

                        <div className="txt">
                            <p ><FaQuoteLeft className='leftquote' />
                                Guidence Point is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical.
                                <FaQuoteRight className='rightquote' />
                            </p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className="logo">
                            <div className="img">
                                <img src="img/test/1.jpeg" alt="" />
                            </div>
                            <div className="name">
                                <p className='bold'>Mayur Joshi</p>
                                <p> <span> Course : </span> Power BI </p>
                            </div>
                        </div>

                        <div className="txt">
                            <p ><FaQuoteLeft className='leftquote' />
                                I am Employed person took weekend batch for advance embedded. I am very thankful to TechnoScripts for clearing all my doubts and also they took hands on practice on kits, of every micro-controller.
                                <FaQuoteRight className='rightquote' />
                            </p>
                        </div>
                    </div>

                    {/* <div className='box'>
                        <div className="logo">
                            <div className="img">
                                <img src="img/profile.jpg" alt="" />
                            </div>
                            <div className="name">
                                <p className='bold'>Swapnil Marathe</p>
                                <p> <span> Course : </span> Advanced Embedded </p>
                            </div>
                        </div>

                        <div className="txt">
                            <p ><FaQuoteLeft className='leftquote' />
                                Technoscripts is the best institute in pune for Embedded career oriented course. They have faculties having expertise in development so I got good knowledge.
                                <FaQuoteRight className='rightquote' />
                            </p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className="logo">
                            <div className="img">
                                <img src="img/profile.jpg" alt="" />
                            </div>
                            <div className="name">
                                <p className='bold'>Kasthuri Srinivasan</p>
                                <p> <span> Course : </span> Advanced Embedded </p>
                            </div>
                        </div>

                        <div className="txt">
                            <p ><FaQuoteLeft className='leftquote' />
                                TechnoScripts is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical.
                                <FaQuoteRight className='rightquote' />
                            </p>
                        </div>
                    </div> */}
                </div>



            </div>



        </>
    )
}