import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M16() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 16 : </b> Data Migration and SAP S/4HANA Overview
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Data Migration Techniques: LSMW, BDC, and BAPI	</li>
                                    <li>	Introduction to SAP S/4HANA and Key Differences	</li>
                                    <li>	Migration Strategies from SAP ECC to SAP S/4HANA	</li>
                                    <li>	Overview of FIORI Apps for SAP FICO	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

