import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M13() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 13 : </b>  DevOps & Cloud Deployment
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3>  Introduction to DevOps</h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Learning DevOps principles and culture.	</li>
                                    <li>	Git and GitHub/GitLab Embed version control.	</li>
                                    <li>	Build automating: Maven/Gradle.	</li>
                                    <li>	CI/CD pipelines.	</li>
                                </ul>
                            </div>

                        </div>
                        <div>
                            <div className="heading">
                                <h3>Containerization with Docker  </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Docker and containerization Basics.	</li>
                                    <li>	I am creating Docker containers for Java Applications.	</li>
                                    <li>	Docker Compose for multi-container applications.	</li>
                                    <li>	Migrating Dockerized applications to dev and production servers.	</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="heading">
                                <h3> Cloud Deployment </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	AWS, Azure, and Google Cloud: This blog will give you a light introduction to what cloud platforms are all about ie., AWS, Azure, and GOOGLE CLOUD.	</li>
                                    <li>	Running Java applications on an EC2.	</li>
                                    <li>	Database management AWS RDS.	</li>
                                    <li>	Monitors and optimizes cloud solutions alliterations.	</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                )
            }




        </>
    )
};

