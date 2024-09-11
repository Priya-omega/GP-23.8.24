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

export default function ReviewFSpython() {
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
                                            <p className='bold'>Aaditya Deshmukh</p>
                                            <p> <span> Course : </span> Python Developer </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "This Python Full stack developer course in Pune truly surpassed my expectations. The instructors are very knowledgeable, and the hands-on projects helped me gain confidence in both back-end and front-end development. I now feel ready to tackle any job in this field!"
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
                                            <p className='bold'> Neha Patil </p>
                                            <p> <span> Course : </span> Python Developer </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "I was in search of a comprehensive course that offered practical experience, and this one was just right. The curriculum spans everything from the basics to advanced Python concepts, complete with numerous real-world examples. I highly recommend it for anyone serious about a career in software development."
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
                                            <p className='bold'> Sanjay Kulkarni </p>
                                            <p> <span> Course : </span> Python Developer </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "I appreciated the structure of the course. The step-by-step approach made it easier to understand complex concepts, and the support from the instructors was fantastic. I also valued the emphasis on industry best practices and modern tools. This course has significantly enhanced my career prospects."
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
                                            <p className='bold'> Pooja Joshi </p>
                                            <p> <span> Course : </span> Python Developer </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "This course was a transformative experience for me! The blend of theory and practical projects made learning both engaging and effective. I found the modules on API development and DevOps particularly enlightening. I now have a solid grasp of how to create full-scale applications."
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
                                            <p className='bold'> Rohan Shinde </p>
                                            <p> <span> Course : </span> Python Developer </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "This is an exceptional course for anyone aiming to excel in Python Full stack developer course in Pune. The instructors are friendly, and the content is current with the latest technologies. The capstone project was both challenging and rewarding, and it played a key role in helping me secure a fantastic job offer!"
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
