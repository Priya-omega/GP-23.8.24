import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q1() {

  const [toggle, setToggle] = useState(true);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}>  1. What Is Full Stack Development and Why It Matters? </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p>Working on front-end (client side) and back end(server Side of web applications in Full Stack Development Front-end development deals with creating UI (User Interface) and a better user experience, this is bounded up using languages like HTML, CSS & JS frameworks such as React or Angular. Nodejs – It refers to the back-end development process which consists of managing servers, databases, and application logic. js, Python, or Ruby on Rails. Why Full Stack Developer is Important A full stack developer can do it all, providing seamless integration between the user interface and the back-end of a system. </p>

          </div>
        )
      }




    </>
  )
};

