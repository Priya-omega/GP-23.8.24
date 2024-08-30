import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";
export default function Q1() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 1 : </b>  Introduction to Full-Stack Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3>Full Stack Development </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Definition and Scope: Full-stack development means front-end and back-end development of web applications, starting with the user interface design toward the database and server management.</li>
                                    <li> The Importance of the Industry: A full-stack developer has a high worth due to his or her flexibility and how he or she can do various things within these different layers. Therefore, having gone through this part of the article, I don't think it is possible to have small or large enterprises without a full-stack developer.</li>
                                    <li> Industry: Full Stack Developer, Front-end Developer, Back-end Developer, Software Engineer these terms are relevant to numerous industries, from technology, finance, and healthcare, to e-commerce.</li>
                                </ul>
                            </div>

                            <div className="session">
                                <div className="heading">
                                    <h3>Web Development: An Introduction </h3>
                                </div>
                                <ul>
                                    <li> Client-Server Architecture: How the web works: clients and servers.</li>
                                    <li> Types of Web Applications: Static and Dynamic Web Applications, SPA Single Page Application, PWA Progressive Web Apps.</li>
                                    <li> Development Tools and Environment: Overview of the main tools: code editors (VS Code and Sublime Text), version control systems (Git), and package managers (npm, yarn).</li>
                                </ul>

                            </div>

                            <div className="session">
                                <div className="heading">
                                    <h3> HTML HyperText Markup Language</h3>
                                </div>
                                <ul>
                                    <li>Structure of Web Pages: Elements, tags, attributes, semantic HTML, forms, and multimedia elements. </li>
                                </ul>

                            </div>

                            <div className="session">
                                <div className="heading">
                                    <h3>CSSCascading Style Sheets </h3>
                                </div>

                                <ul>
                                    <li>Styling Web Pages: CSS selectors, properties, Flexbox, Grid layout, responsive design, and CSS preprocessors like SASS and LESS. </li>
                                </ul>
                            </div>

                            <div className="session">
                                <div className="heading">
                                    <h3> Introduction to JavaScript</h3>
                                </div>

                                <ul>
                                    <li> Variables, Data Types, Operators, Functions, Loops, Conditional Statements: Core JavaScript concepts.</li>
                                    <li>Document Object Model Manipulation: Changing content interactively and creating event listeners responsible for manipulating HTML and CSS. </li>
                                </ul>
                            </div>

                            <div className="session">
                                <div className="heading">
                                    <h3>Advanced JavaScript </h3>
                                </div>
                                <ul>
                                    <li>ES6+ Features: Arrow functions, classes, template literals, destructuring, modulesJavaScript's new generation features. </li>
                                    <li> Asynchronous JavaScript: Promises, async/await, and AJAX to handle asynchronous operations.</li>
                                    <li>JavaScript Frameworks and Libraries: Overview of popular libraries like jQuery, and frameworks like React.js, Angular, or Vue.js; component-based architecture and basics of state management. </li>
                                </ul>

                            </div>
                        </div>


                    </div>
                )
            }




        </>
    )
};

