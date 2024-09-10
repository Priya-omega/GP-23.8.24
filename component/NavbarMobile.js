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

    const { asPath } = useRouter();

    return (
        <>

            <div className="NavbarMobile">

                {/* <!-- Navbar logo --> */}
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


                    {/* <!-- Dropdown menu --> */}
                    <div className="dropdown">


                        <Link href={pagelinks.fullstack} className={asPath === '/' ? "Active NavLink" : "NavLink"}>FullStack</Link><IoIosArrowDown onClick={() => setToggle(!toggle)} className='down-arrow' />

                        {
                            toggle && (
                                <div className="drop-content">

                                    <Link href={pagelinks.fullstackjava} className={asPath === '/' ? "Active NavLink" : "NavLink"} >FullStack java  </Link>

                                    <Link href={pagelinks.pythonfullstack} className={asPath === '/' ? "Active NavLink" : "NavLink"} >FullStack Python  </Link>


                                    {/* <!-- Creating sub menu Dropdown --> */}

                                    {/* <div className="dropdown2">
                                        <div className='dropdown2div'><Link href=""  className={asPath === '/' ? "Active NavLink" : "NavLink"}><a className='Link2 dropBtn2'> Modular Courses </a></Link><IoIosArrowForward onClick={() => setToggle2(!toggle2)} className='right-arrow' />
                                        </div>
                                        {
                                            toggle2 && (
                                                <div className="drop-content2">

                                                    <Link href="/embedded-c-training-pune"><a className='Link'> Embedded C Training </a></Link>

                                                    <Link href="/8051-training-course"><a className='Link'> 8051 Training </a></Link>

                                                    <Link href="/raspberry-pi-training-pune"><a className='Link'> Raspberry pi Training </a></Link>

                                                    <Link href="/arduino-training-pune"><a className='Link'> Arduino Training </a></Link>

                                                    <Link href="/pic-training-in-pune"><a className='Link'> PIC Training </a></Link>

                                                    <Link href="/avr-training-course"><a className='Link'> AVR Training </a></Link>

                                                    <Link href="/arm-7-training-pune"><a className='Link'> ARM 7 Training </a></Link>

                                                    <Link href="/arm-cortex-training"><a className='Link'> ARM Cortex Training </a></Link>

                                                    <Link href="/embedded-linux-training-pune"><a className='Link'> Embedded Linux Training </a></Link>

                                                </div>
                                            )
                                        }

                                    </div> */}



                                </div>
                            )
                        }

                    </div>





                </div>





            </div>

        </>
    )
}

export default Nav