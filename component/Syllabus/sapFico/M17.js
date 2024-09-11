import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M17() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 17 : </b> SAP FICO Reporting and Analytics
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to SAP Reporting Tools	</li>
                                    <li>	Financial and Managerial Reporting in SAP	</li>
                                    <li>	SAP FICO Reports: Standard and Customized Reports	</li>
                                    <li>	Using SAP BI/BW for Advanced Analytics	</li>
                                    <li>	Dashboard Creation and Visualization	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

