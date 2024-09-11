import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M8() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 8 : </b> Asynchronous Programming with Python
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Understanding synchronous vs. asynchronous programming	</li>
                                    <li>	Using asyncio for concurrency	</li>
                                    <li>	Introduction to Celery for background tasks	</li>
                                    <li>	Building real-time applications with WebSockets (Django Channels)	</li>
                                    <li>	Asynchronous APIs with FastAPI	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

