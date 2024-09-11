import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M4() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 4 : </b> Advanced Web Development with Django
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul><li>	Introduction to the Django Framework	</li>
                                    <li>	Django project structure and best practices	</li>
                                    <li>	Models, views, and templates (MVT architecture)	</li>
                                    <li>	Working with Django ORM and migrations	</li>
                                    <li>	Authentication, middleware, and security in Django	</li>
                                    <li>	Building a scalable web application with Django	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

