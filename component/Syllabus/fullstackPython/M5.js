import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M5() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 5 : </b>Front-End Development Fundamentals
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Basics of HTML, CSS, and JavaScript	</li>
                                    <li>	Responsive design with CSS frameworks (Bootstrap or Tailwind CSS)	</li>
                                    <li>	Introduction to front-end JavaScript libraries (React or Vue.js)	</li>
                                    <li>	Integrating Python back-end with a dynamic front-end	</li>
                                    <li>	AJAX and RESTful services for data fetching	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

