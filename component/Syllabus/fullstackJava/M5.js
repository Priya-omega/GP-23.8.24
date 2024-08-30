import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M5() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 5 : </b> Advanced Java Programming
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Error Reporting and Debugging </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Checked Exception vs Unchecked Exception.</li>
                                    <li> Exceptions, throws, and finally. With the utilization of try-catch blocks.</li>
                                    <li> IDE-based debugging techniques and tools.</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3>  Java Collections Framework</h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> List, Set, and Map with its implementations.</li>
                                    <li> Multiplexers and Generics — for type safety.</li>
                                    <li> Basic Concepts Of Comparable And Comparator.</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Concurrency and Multithreading </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Thread Creation and Management.</li>
                                    <li> Java 8: Synchronization, Locks, and Concurrent Collections.</li>

                                    <li> Thread Pooling and Executors.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                )
            }




        </>
    )
};

