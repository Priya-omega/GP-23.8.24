import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M2() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 2 : </b> Object-Oriented Programming in Python
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Classes and objects	</li>
                                    <li>	Inheritance, polymorphism, and encapsulation	</li>
                                    <li>	Magic methods and operator overloading	</li>
                                    <li>	Understanding design patterns in Python	</li>
                                    <li>	Building real-world applications using OOP principles	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

