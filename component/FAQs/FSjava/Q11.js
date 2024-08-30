import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../../../styles/Questions.module.scss'

export default function Q11() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span onClick={() => setToggle(!toggle)}> 11. You may be wondering now, what is the typical Full Stack Developer Job Market outlook. Let's find out!  </span>  <FaPlusSquare onClick={() => setToggle(!toggle)} className={styles.plusicon} /> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Full Stack Developer has a secure and rapidly growing job market. A rising need of many companies from different lines is for developers who can develop separately on front-end and back-end systems. The reason for this level of demand in Full Stack Developers is the Call for professionals who can create and handle complex web applications. You will be ready to capitalize on this demand thanks to all the skills you learn in our course and can chase endless opportunities available for technical job roles.</p>

          </div>
        )
      }




    </>
  )
};

