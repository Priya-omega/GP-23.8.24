import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M7() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 7 : </b> API Development with Python
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Introduction to APIs and REST principles	</li>
                                    <li>	Building RESTful APIs with Flask and Django REST Framework	</li>
                                    <li>	Authentication and authorization for APIs	</li>
                                    <li>	Testing and documenting APIs with Postman and Swagger	</li>
                                    <li>	Consuming third-party APIs in Python applications	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

