import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M13() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 13 : </b> SAP FICO Integration with Other Modules
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Integration with Sales and Distribution (SD)	</li>
                                    <li>	Integration with Materials Management (MM)	</li>
                                    <li>	Integration with Human Capital Management (HCM)	</li>
                                    <li>	Overview of Logistics Integration with FICO	</li>
                                    <li>	Data Flow and Posting Between Modules	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

