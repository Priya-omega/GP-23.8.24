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

export default function ReviewFSjava() {
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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

                            <div className='box'>
                                <div className="content">
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>  Shreya Deshmukh  </p>
                                            <p> <span> Course : </span> FullStack Java Development </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "The full stack Java course in Pune at Guidance Point went beyond my expectations! This helped a lot as the instructors were focused on breaking down harder concepts into simpler terms and doing many projects over the last year built up my skills. Those extra classes were key to getting me ready for job terms, esp the mock interviews and resume sessions which helped instill confidence in me when I got my first Java Developer role. Highly recommend it!"
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className='box'>
                                <div className="content">
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>    Rohit Patil </p>
                                            <p> <span> Course : </span> FullStack Java Development </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            “I was even referred to this course as someone who was moving from a different field. The syllabus was wide-ranging and included both front-end and back-end development. Instructors are excellent, and always there to help. Best of all is the career support (LinkedIn optimization and placement help) Because of Guidance Point, I am now a Full Stack Developer!
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className='box'>
                                <div className="content">
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>   Sagar Bhosale  </p>
                                            <p> <span> Course : </span> FullStack Java Development </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            “Training was really at an ease and could learn according to my own pace due to the amalgamation of classes and also online. The teachers at Guidance Point were very cooperative and helped with a practical experience of the industry. The DevOps and cloud deployment modules were the most beneficial since these are trending things with new tools This is a best buy course for anyone who is looking at Java Development as a Career.
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className='box'>
                                <div className="content">
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>      Priya Kulkarni  </p>
                                            <p> <span> Course : </span> FullStack Java Development </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            “This course was a missing puzzle from my career. The use of real-world skills and their breadth in Java-related technologies made it special. The capstone project especially helped me to implement all that I learned and also the career development sessions were priceless. If you are looking to become a Full Stack Java Developer then highly recommend Guidance Point.
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className='box'>
                                <div className="content">
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>   Aditi Joshi </p>
                                            <p> <span> Course : </span> FullStack Java Development </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            “I knew some Java when I joined this full stack Java course in Pune but the advanced topics and its way of teaching took my skills to a higher level. The module on Spring framework was the most helpful and other important modules were microservices. The structure of the course is well-developed and real-time projects make it flexible yet enough challenging to learn with benefits. Grateful for the coaching and guidance throughout.
                                            <FaQuoteRight className='rightquote' />
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className='box'>
                                <div className="content">
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/usericon.png" alt="" />
                                        </div>

                                        <div className="name">
                                            <p className='bold'>   Rohit Patil </p>
                                            <p> <span> Course : </span> FullStack Java Development </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            “I was even referred to this course as someone who was moving from a different field. The syllabus was wide-ranging and included both front-end and back-end development. Instructors are excellent, and always there to help. Best of all is the career support (LinkedIn optimization and placement help) Because of Guidance Point, I am now a Full Stack Developer!
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
