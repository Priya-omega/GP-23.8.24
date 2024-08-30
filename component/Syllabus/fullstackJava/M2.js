import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M2() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 2 : </b> OOP with Java
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> OOP Principles </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>Encapsulation, Inheritance, Polymorphism and Abstraction. </li>
                                    <li> Classes and Objects: Instantiate objects and types of objects.</li>
                                    <li> Method overloading, constructors, private methods, and the use of this.</li>
                                </ul>
                            </div>

                        </div>


                        <div>

                            <div className="heading">
                                <h3> Advanced OOP Concepts </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Comparison between interfaces and abstract classes.</li>
                                    <li>Overloading vs Overriding. </li>
                                    <li> Nested Classes and Anonymous Classes.</li>
                                    <li>Annotations and Reflection API in Java. </li>

                                </ul>
                            </div>

                        </div>

                    </div>
                )
            }




        </>
    )
};

