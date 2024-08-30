import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M4() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 4 : </b> Relational Databases, SQL
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Introduction to Databases </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Basic concepts of Database: Tables, Rows, Columns, and Relationships.</li>
                                    <li> SELECT, INSERT, UPDATE, and DELETE commands in SQL.</li>
                                    <li> Understanding Joins, subqueries, and transactions.</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3>Working with MySQL/Oracle  </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>Database: More Advanced Topics (Design, Normalization). </li>
                                    <li> Stored Procedures, Functions, Triggers, and Views.</li>
                                    <li> How to connect Java applications with databases (DB)? (JDBC).</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                )
            }




        </>
    )
};

