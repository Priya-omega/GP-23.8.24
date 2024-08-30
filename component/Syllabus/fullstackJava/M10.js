import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M10() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 10 : </b>  RESTful Web Services and API Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Building RESTful APIs</h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	REST principles: Resources, URIs, HTTP methods.	</li>
                                    <li>	RESTful APIs using Spring Boot.	</li>
                                    <li>	Serialização e Desserialização com XML, JSON.	</li>
                                    <li>	The best practices for HATEOAS and API versioning techniques.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div className="heading">
                                <h3>Securing RESTful APIs  </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	JWT Authentication and Authorization.	</li>
                                    <li>	OAuth2 and OpenID Connect.	</li>
                                    <li>	Handling CORS and API rate limiting.	</li>
                                    <li>	API Security and Performance Best Practices.	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

