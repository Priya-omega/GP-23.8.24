import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaPhoneAlt, FaRegHandPointRight } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { pagelinks } from '../pagelinks'

export default function NavbarDesk() {
    const { asPath } = useRouter()
    return (
        <>
            <div className='navbarDesk'>

                {/* <!-- Navbar logo --> */}
                <div className='logo'>
                    <p>Guidence Point</p>
                </div>

                <div className='navlinks'>

                    {/* <Link href="/"><a className={asPath === '/' ? "Active NavLink" : "NavLink"}>Home</a></Link> */}

                    <Link href="/"> Home </Link>

                    <div className="dropDown">
                        <Link href={pagelinks.fullstack}> FullStack </Link>

                        <div className="dropDownContent">

                            <p><Link href={pagelinks.fullstackjava}>   FullStack java </Link> </p>

                            <p><Link href={pagelinks.pythonfullstack}>  FullStack Python  </Link> </p>

                            <p><Link href={pagelinks.jobTraining}>  Job Training  </Link> </p>

                            {/* <p><Link href="/">  MernStack </Link> </p> */}



                        </div>
                    </div>

                    <div className="dropDown">
                        <Link href="/dataScience"> Data Science </Link>

                        <div className="dropDownContent">

                            {/* <p><Link href="/">Data Science with AI ML </Link> </p> */}
                            <p><Link href="/dataScience"> Data Science </Link> </p>

                            <p><Link href="/dataAnalystic"> Data Analytics </Link> </p>


                        </div>
                    </div>

                    <div className="dropDown">
                        <Link href="/courses"> Competitive </Link>

                        <div className="dropDownContent">



                            <p><Link href="/PowerBI"> Power BI </Link> </p>

                            {/* <p><Link href="/fullstack"> Full Stack </Link></p> */}

                        </div>
                    </div>

                    <div className="dropDown">
                        <Link href=""> SAP </Link>

                        <div className="dropDownContent">

                            <p><Link href={pagelinks.sapFICO}> SAP FICO </Link> </p>

                            {/* <p><Link href=""> SAP MM </Link> </p>

                            <p><Link href=""> SAP SD </Link> </p> */}

                        </div>
                    </div>

                    <div className="dropDown">
                        <Link href="/courses"> PAP </Link>

                        {/* <div className="dropDownContent">

                            <p><Link href="/courses"> Data Science </Link> </p>

                            <p><Link href="/dataAnalystic"> Data Analytics </Link> </p>

                            <p><Link href="/PowerBI"> Power BI </Link> </p>

                            <p><Link href="/fullstack"> Full Stack </Link>
                            </p>

                        </div> */}
                    </div>



                    {/* <Link href=""> Placement </Link>
                    <Link href="/test"> Blogs </Link>
                    <Link href=""> Contact </Link>
 */}



                    {/* <Link href="/embedded-system-online-training"><a className={asPath === '/embedded-system-online-training' ? "Active NavLink" : "NavLink"}> Online Training </a></Link> */}

                </div>


                <div className="contact">
                    <div className='box'>
                        <FaPhoneAlt className="phoneicon" /> Call : 8605006788
                    </div>
                    &nbsp;  | &nbsp;
                    <div className='box'>
                        <MdEmail className="mailicon" /> info@technoscripts.in
                    </div>

                </div>


                {/* Search Menu */}
                {/* <div className='search'>

                    <input type="search" placeholder='Search Here...' />
                    <button className='search-btn'>
                        Search
                    </button>

                </div> */}

            </div>
        </>
    )
}
