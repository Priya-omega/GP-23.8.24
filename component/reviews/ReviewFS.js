import React from 'react'
// import styles from '../styles/Review.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { BsStarHalf, BsStarFill, BsFillEmojiSmileFill } from 'react-icons/bs'
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Head from "next/head";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ReviewFS() {
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <div className="Testimonial">
                <div className="heading2">
                    <h3> Ratings & Reviews by Students</h3>
                    <p>Guidence Point has received honest feedback from our learners around the globe. </p>
                </div>

                <div className="container1">


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

                    <div className='boxContainer'>
                        <Slider {...settings}>

                            <div className="cardContainer">
                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>Priya Deshmukh</p>
                                            <p> <span> Course : </span> Data Science </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            Guidance Point full stack developer course in Pune was fantastic! The curriculum was inclusive wherein it covered from front-end to back end technologies. The hands-on projects and great instructors broke down tough ideas into digestible pieces. Special thanks for the Job guarantee and support in LinkedIn Profile optimization. Highly recommended!"
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>

                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'> Rohit Kulkarni</p>
                                            <p> <span> Course : </span> Data Science </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            The best decision of my career was to take up the full stack classes in Pune. The perfect mix of classroom & online training that gave me hands-on experience and deep learning. The mock interviews, and resume building workshops were crucial to help me get my first job in tech. Thank you, Guidance Point!"
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="cardContainer">
                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>Sneha Patil</p>
                                            <p> <span> Course : </span> Data Science </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            I loved the hands-on approach of the full stack developer course in Pune at Guidance Point. Studying the latest technologies such as React and Node. js was a game-changer for me. It was updated course material and most importantly pay-after-placement option. Now I am a successful web developer…and I owe that to this program!
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>Ankit Jadhav</p>
                                            <p> <span> Course : </span> Data Science </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            My experience with the course was awesome it's way beyond my expectations this is a true measure of its effectiveness. They were especially valuable to me for the fact that it was a very knowledgeable set of instructors and we got to do a lot of hands on projects which ramped everything up. The job preparation support, including mock interviews and LinkedIn profiling, was very good. I recently got placed in an amazing job at a top tech company and I am super excited about that!
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>



                            </div>


                            <div className="cardContainer">
                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>Mitali More</p>
                                            <p> <span> Course : </span> Data Science </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            Guidance Point Full Stack Development is a good course to start learning from basics and more importantly "Full stack". The classroom and hybrid training meet worked well for my schedule As it covered all the modern technologies and they also gave me a job guarantee which kept my head calm. This year, I am too well prepared to embark on a thriving web development career.
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>Sneha Patil</p>
                                            <p> <span> Course : </span> Data Science </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            I loved the hands-on approach of the full stack developer course in Pune at Guidance Point. Studying the latest technologies such as React and Node. js was a game-changer for me. It was updated course material and most importantly pay-after-placement option. Now I am a successful web developer…and I owe that to this program!
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>



                            </div>



                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
