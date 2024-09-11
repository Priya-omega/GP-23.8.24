import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M10() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 10 : </b> Data Handling and Manipulation with Python
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Working with Python libraries for data manipulation (Pandas, NumPy)	</li>
                                    <li>	Reading, writing, and manipulating CSV, JSON, and XML files	</li>
                                    <li>	Data cleaning, transformation, and analysis	</li>
                                    <li>	Visualizing data using Matplotlib and Seaborn	</li>
                                    <li>	Connecting Python applications to data sources	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

