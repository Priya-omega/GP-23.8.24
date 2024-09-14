import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { BsMenuButtonWide } from 'react-icons/bs'
import { ImCancelCircle, ImMenu3 } from 'react-icons/im'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import { useRouter } from 'next/router';
import { pagelinks } from '../pagelinks'



// import styles from '../styles/Navbar.module.scss'


function Nav() {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const { asPath } = useRouter();

    return (
        <>

            <div className="NavbarMobile">

                <div className='logo'>
                    <p>Guidence Point</p>
                </div>

                {/* <!-- responsive navbar toggle button --> */}
                <input type="checkbox" id="nav-check" />
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                {/* <!-- Navbar items --> */}

                <div className="nav-links">


                    <Link href="/" className={asPath === '/' ? "Active NavLink" : "NavLink"}>Home</Link>

                    {/* <!-- fullstack Dropdown  --> */}
                    <div className="dropdown">


                        <Link href={pagelinks.fullstack} className={asPath === `${pagelinks.fullstack}` ? "Active NavLink" : "NavLink"}>FullStack</Link><IoIosArrowDown onClick={() => setToggle(!toggle)} className='down-arrow' />

                        {
                            toggle && (
                                <div className="drop-content">
                                    <div className="content">

                                        <Link href={pagelinks.fullstackjava} className={asPath === `${pagelinks.fullstackjava}` ? "Active NavLink" : "NavLink"} >FullStack java  </Link>

                                        <Link href={pagelinks.pythonfullstack} className={asPath === `${pagelinks.pythonfullstack}` ? "Active NavLink" : "NavLink"} >FullStack Python  </Link>

                                        <Link href={pagelinks.jobTraining} className={asPath === `${pagelinks.jobTraining}` ? "Active NavLink" : "NavLink"} >Job Training  </Link>
                                    </div>

                                </div>
                            )
                        }

                    </div>

                    <div className="dropdown">


                        <Link href="dataScience" className={asPath === `${pagelinks.fullstack}` ? "Active NavLink" : "NavLink"}>Data Science</Link><IoIosArrowDown onClick={() => setToggle3(!toggle3)} className='down-arrow' />

                        {
                            toggle3 && (
                                <div className="drop-content">
                                    <div className="content">

                                        <Link href="/dataScience" className={asPath === `${pagelinks.fullstackjava}` ? "Active NavLink" : "NavLink"} > Data Science </Link>

                                        <Link href="/dataAnalystic" className={asPath === `${pagelinks.pythonfullstack}` ? "Active NavLink" : "NavLink"} >Data Analytics </Link>

                                    </div>

                                </div>
                            )
                        }

                    </div>


                    <Link href="" className={asPath === '' ? "Active NavLink" : "NavLink"}>Competitive Exams</Link>

                    {/* <!-- SAP Dropdown  --> */}
                    <div className="dropdown sapDwn">
                        <Link href="" className={asPath === '' ? "Active NavLink" : "NavLink"}>SAP</Link><IoIosArrowDown onClick={() => setToggle2(!toggle2)} className='down-arrow' />

                        {
                            toggle2 && (
                                <div className="drop-content">
                                    <div className="content">
                                        <Link href={pagelinks.sapFICO} className={asPath === '/SAP-FICO-course-in-pune' ? "Active NavLink" : "NavLink"} >SAP FICO  </Link>

                                    </div>



                                </div>
                            )
                        }

                    </div>

                    <Link href="" className={asPath === '' ? "Active NavLink" : "NavLink"}>PAP</Link>



                </div>







            </div>

        </>
    )
}

export default Nav