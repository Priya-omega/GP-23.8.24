import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M6() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 6 : </b>  Basics of Web Development (HTML, CSS, and JS)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> HTML5 </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> The general structure of a web page. </li>
                                    <li> Forms, Tables, Multimedia elements.</li>
                                    <li> Semantic HTML for better SEO.</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> CSS3 </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Web Page Styling: Selectors, Box Model, and Layouts. </li>
                                    <li> CSS Flexbox, Grid, and Responsive Design (including a new technique for my responsive images gallery).</li>
                                    <li> Using CSS grids (B.PNG, X.CSS) & various layout libraries such as Bootstrap.</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> JavaScript </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Main topics: Variables, Functions, and Events.</li>
                                    <li> Manipulating the DOM and Handling Events.</li>
                                    <li> It has ES6+ (Arrow functions, Classes & Modules) features.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                )
            }




        </>
    )
};

