import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M5() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 5 : </b> Data Structures and Algorithms
                </span> <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div className='session'>

                            <div className="heading">
                                <h3>Understanding Data Structures</h3>
                            </div>
                            <ul>
                                <li> Arrays, Linked Lists, Stacks, Queues: Basic data structures and their applications.</li>
                                <li> Trees and Graphs: Implementing Tree and Graph Algorithms for effective data management and retrieval.</li>
                                <li> Hashing and Hash Tables: Understanding hash functions and implementing hash tables.</li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Algorithms</h3>
                            </div>
                            <ul>
                                <li> Sorting and Searching: Implementing algorithms like QuickSort, MergeSort, and Binary Search.</li>
                                <li>Dynamic Programming and Greedy Algorithms: Solving complex problems using dynamic programming and greedy techniques. </li>
                                <li> Complexity Analysis: Understanding Big O notation, time and space complexity, and amortized complexity.</li>
                            </ul>
                        </div>

                    </div>
                )
            }




        </>
    )
};

