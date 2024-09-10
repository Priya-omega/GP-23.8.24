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

export default function Reviews() {
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
                                            <img src="img/test/1.jpeg" alt="" />
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


                            </div>

                            <div className="cardContainer">
                                <div className='box'>
                                    <div className="logo">
                                        <div className="img">
                                            <img src="img/test/3.jpeg" alt="" />
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
                                            <img src="img/test/5.jpeg" alt="" />
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



                            </div>




                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
