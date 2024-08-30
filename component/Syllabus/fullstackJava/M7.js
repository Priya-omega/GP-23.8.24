import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M7() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 7 : </b> Front-end Development with Modern JavaScript Frameworks
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> The Front-End Frameworks 101 Guide </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Overview of React.js, Angular, and Vue.js. </li>
                                    <li> Change Patterns From The Front End Of Yesteryears.</li>
                                    <li> Traditional vs Modern Frontend Development:</li>
                                    <li> Unlike before where the way of front end development was something that required pure hard code in HTML, CSS, and JS, now there is a lot more abstraction:</li>
                                    <li> Premature Optimization PSA</li>
                                    <li> Where are we going</li>
                                    <li> Common Patterns Collection menu (Feel free to skip this part!)</li>
                                    <li> Copy-Pasting</li>
                                    <li> Composition</li>
                                    <li> Nodalization</li>
                                    <li> Contextualizing</li>
                                    <li> To close off</li>
                                    <li>You may also like Traditional vs Modern frontend-development</li>
                                    <li> Before representing respective parts playing role in traditional…medium.com</li>

                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> React.js </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> JSX and Components: Build UI components.</li>
                                    <li> State, Props & LifeCycle Methods.</li>
                                    <li> React Router and Redux.</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Angular </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Components, Templates, Directives.	</li>
                                    <li>	Services and DI.	</li>
                                    <li>	Angular Routing & Navigation.	</li>
                                    <li>	Using Forms: Traditional and Model-driven or Reactive Form.	</li>
                                </ul>
                            </div>

                        </div>


                    </div>
                )
            }




        </>
    )
};

