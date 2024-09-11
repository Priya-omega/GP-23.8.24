import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M5() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 5 : </b> Asset Accounting (AA)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Overview of Asset Accounting in SAP	</li>
                                    <li>	Asset Class Configuration and Asset Master Data	</li>
                                    <li>	Asset Acquisition, Transfers, and Retirements	</li>
                                    <li>	Depreciation Methods and Calculation	</li>
                                    <li>	Asset Revaluation and Impairment Testing	</li>
                                    <li>	Year-End Closing for Asset Accounting	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

