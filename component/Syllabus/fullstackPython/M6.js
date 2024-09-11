import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M6() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 6 : </b> Database Management with Python
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Databases and SQL	</li>
                                    <li>	Using SQLite and PostgreSQL with Python	</li>
                                    <li>	Database operations with SQLAlchemy and Django ORM	</li>
                                    <li>	Database design principles and normalization	</li>
                                    <li>	Building and managing databases for web applications	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

