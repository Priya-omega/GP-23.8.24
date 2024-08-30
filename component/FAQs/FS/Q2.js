import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q2() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 2. Which Technologies and Frameworks are included in the full stack developer course in Pune?  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Full Stack Development Course covers the entire spectrum of web development from frontend to backend and is much more than just HTML along with CSS and JS. Get trained in front-end technologies like HTML, CSS, JavaScript with frameworks and libraries such as React, and Angular. The course will include Node for the back-end development. js, Express. js as well as SQL and NoSQL databases like MongoDB. We will also get into how server-side rendering works with Next. js and deployment strategies. By attending this broad curriculum you will have a very good base needed in full-stack development.</p>

          </div>
        )
      }




    </>
  )
};

