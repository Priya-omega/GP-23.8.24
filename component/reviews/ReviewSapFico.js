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

export default function ReviewSapFico() {
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
                                            <p className='bold'> Amitrao Deshmukh </p>
                                            <p> <span> Course : </span> SAP FICO Course </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "The SAP FICO course in Pune was exceptional! The curriculum was comprehensive, and the instructors were knowledgeable. The hands-on experience with real-world scenarios was particularly valuable. Highly recommend this course for anyone looking to advance their career in finance and has very suitable SAP FICO Course fees in Pune."
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
                                            <p className='bold'> Neelam Jadhav </p>
                                            <p> <span> Course : </span> SAP FICO Course </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "I recently completed the SAP FICO course, and it exceeded my expectations. The training was well-structured, and the support from the faculty was outstanding. I feel confident in applying what I’ve learned to my current role. Great course for professionals seeking career growth in finance."
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
                                            <p className='bold'> Sachin Patil </p>
                                            <p> <span> Course : </span> SAP FICO Course </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "This SAP FICO Training in Pune offers excellent value for money as it has very affordable SAP FICO Course fees in Pune. The practical sessions and expert guidance provided were instrumental in grasping complex concepts. The course has significantly boosted my expertise and employability. I’m very pleased with the results."
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
                                            <p className='bold'> Aishwarya Kulkarni </p>
                                            <p> <span> Course : </span> SAP FICO Course </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "The SAP FICO course was a fantastic learning experience. The blend of theoretical knowledge and practical applications helped me understand the nuances of SAP FICO. The trainers were experienced and approachable. I’m grateful for the skills I’ve gained through this course."
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
                                            <p className='bold'> Kiran Ghorpade </p>
                                            <p> <span> Course : </span> SAP FICO Course </p>
                                        </div>
                                    </div>

                                    <div className="txt">
                                        <p ><FaQuoteLeft className='leftquote' />
                                            "I highly recommend this SAP FICO course in Pune. The program was meticulously designed, and the trainers were experts in their field. The hands-on approach and real-world case studies prepared me well for professional challenges. A great investment for anyone serious about a career in finance."
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
