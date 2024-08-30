import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M3() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 3 : </b> Data Structures and Algorithms Using Java
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Core Data Structures </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Manipulation and usage of Arrays and Strings.</li>
                                    <li> Implementation and utilization of Linked Lists, Stacks & Queues.</li>
                                    <li> Basic Understanding and Applications of Trees, DiGraphs (Graph Only with Edges in One Direction), Graph only undirected) & HashMap. </li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Algorithms </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Merge, Quick sorting, and Binary, Linear Searching, etc.</li>
                                    <li> Recursion - Explanation and Examples.</li>
                                    <li> Optimization Problems: Using dynamic programming to solve difficult problems.</li>
                                    <li> Time Complexity — Performance Analysis of Algorithms.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                )
            }




        </>
    )
};

